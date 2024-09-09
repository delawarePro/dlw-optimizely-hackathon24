import { Hit as AlgoliaHit } from "instantsearch.js";
import { gql, GraphQLClient } from 'graphql-request';

const optiGraphSingleKey = process.env.OPTIMIZELY_GRAPH_SINGLE_KEY;
const endpoint = 'https://cg.optimizely.com/content/v2?auth=' + optiGraphSingleKey;

export const graphQLClient = new GraphQLClient(endpoint);

export const optiSearchClient = {
    async search(requests: any) {
        const searchString = requests[0].params.query;
        const data = await queryOptiGraph(searchString);

        return {
            results: [
                {
                    hits: data,
                    nbHits: data.length,
                    processingTimeMS: 1,
                },
            ],
        };
    }
};

async function queryOptiGraph(searchString: string): Promise<AlgoliaHit[]> {
    const POKEMONS_QUERY = gql`
        query PokemonsQueryAlt($searchQuery: String!)  {
            Pokemon(
                orderBy: { _ranking: SEMANTIC }
                where: { _fulltext: { match: $searchQuery } }
            ) {
                items{
                    Name,
                    Types,
                    Species,
                    Thumbnail {
                        url {
                            base
                            internal
                            hierarchical
                            default
                            type
                        }
                    },
                    _metadata{
                        key,
                        displayName
                    }
                }
            }
        }
    `;

    const variables = { searchQuery: searchString };
    const response : any = await graphQLClient.request(POKEMONS_QUERY, variables);

    return response.Pokemon.items.map((item: any) => ({
        key: item._metadata.key,
        objectID: item._metadata.key,
        name: item.Name,
        image: item.Thumbnail.url.default,
        price: item.Price,
        categories: item.Types,
        __position: 0, // or any other logic to set the position
    } as AlgoliaHit));
}