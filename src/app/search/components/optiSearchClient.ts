import { Hit as AlgoliaHit } from "instantsearch.js";
import { gql, GraphQLClient } from 'graphql-request';

const optiGraphSingleKey = process.env.NEXT_PUBLIC_OPTIMIZELY_GRAPH_SINGLE_KEY;
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
                    Identifier
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
                    _link {
                        Price {
                            items {
                                parentIdentifier
                                listPrice
                                salePrice
                            }
                        }
                    }
                }
            }
        }
    `;

    const variables = { searchQuery: searchString };
    const response : any = await graphQLClient.request(POKEMONS_QUERY, variables);

    return response.Pokemon.items.map((item: any) => {

        const price = item._link?.Price?.items?.length > 0
         ? item._link.Price.items[0] : null;

        const listPrice = price ? price.listPrice : null;
        const salePrice = price ? price.salePrice : null;

        // use github for animation & thumbnails for now.
        // as we can't seem to find an API to uploaded asset binaries to SaaS CMS.
        const thumbnail = item?.Thumbnail?.url?.default 
            ? item?.Thumbnail?.url?.default 
            : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.Identifier}.png`;

        const animation = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${item.Identifier}.gif`

        return ({
            key: item._metadata.key,
            objectID: item._metadata.key,
            name: item.Name,
            image: thumbnail,
            animation: animation,
            listPrice: listPrice,
            salePrice: salePrice,
            categories: item.Types,
            __position: 0, // or any other logic to set the position
        } as AlgoliaHit)
    });
}