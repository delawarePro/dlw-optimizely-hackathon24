import { liteClient as algoliasearch } from "algoliasearch/lite";
import { Hit as AlgoliaHit } from "instantsearch.js";

const algoliaClient = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76");

const dummyData: AlgoliaHit[] = [
    {
        objectID: "1",
        name: "bulbasaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
        price: 100,
        categories: ["steel", "ghost"],
        __position: 0
    },
    {
        objectID: "2",
        name: "ivysaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/2.gif",
        price: 200,
        categories: ["grass", "poison"],
        __position: 1
    },
    {
        objectID: "3",
        name: "venusaur",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/3.gif",
        price: 300,
        categories: ["grass", "poison"],
        __position: 2
    },
    {
        objectID: "4",
        name: "charmander",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/4.gif",
        price: 400,
        categories: ["fire"],
        __position: 3
    },
    {
        objectID: "5",
        name: "charmeleon",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/5.gif",
        price: 500,
        categories: ["fire"],
        __position: 4
    },
    {
        objectID: "6",
        name: "charizard",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/6.gif",
        price: 600,
        categories: ["fire", "flying"],
        __position: 5
    },
    {
        objectID: "7",
        name: "squirtle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/7.gif",
        price: 700,
        categories: ["water"],
        __position: 6
    },
    {
        objectID: "8",
        name: "wartortle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/8.gif",
        price: 800,
        categories: ["water"],
        __position: 7
    },
    {
        objectID: "9",
        name: "blastoise",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/9.gif",
        price: 900,
        categories: ["water"],
        __position: 8
    },
    {
        objectID: "10",
        name: "caterpie",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/10.gif",
        price: 1000,
        categories: ["bug"],
        __position: 9
    },
    {
        objectID: "11",
        name: "metapod",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/11.gif",
        price: 1100,
        categories: ["bug"],
        __position: 10
    },
    {
        objectID: "12",
        name: "butterfree",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/12.gif",
        price: 1200,
        categories: ["bug", "flying"],
        __position: 11
    },
    {
        objectID: "13",
        name: "weedle",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/13.gif",
        price: 1300,
        categories: ["bug", "poison"],
        __position: 12
    },
    {
        objectID: "14",
        name: "kakuna",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/14.gif",
        price: 1400,
        categories: ["bug", "poison"],
        __position: 13
    },
    {
        objectID: "15",
        name: "beedrill",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/15.gif",
        price: 1500,
        categories: ["bug", "poison"],
        __position: 14
    },
    {
        objectID: "16",
        name: "pidgey",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/16.gif",
        price: 1600,
        categories: ["normal", "flying"],
        __position: 15
    },
    {
        objectID: "17",
        name: "pidgeotto",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/17.gif",
        price: 1700,
        categories: ["normal", "flying"],
        __position: 16
    },
    {
        objectID: "18",
        name: "pidgeot",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/18.gif",
        price: 1800,
        categories: ["normal", "flying"],
        __position: 17
    },
    {
        objectID: "19",
        name: "rattata",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/19.gif",
        price: 1900,
        categories: ["normal"],
        __position: 18
    },
    {
        objectID: "20",
        name: "raticate",
        image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
        animation: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/20.gif",
        price: 2000,
        categories: ["normal"],
        __position: 19
    }
];

export const stubbedSearchClient = {
    search(requests: any) {
        // Return the hardcoded dummy data
        return Promise.resolve({
            results: [
                {
                    hits: dummyData,
                    nbHits: dummyData.length,
                    processingTimeMS: 1,
                },
            ],
        });
    },
    searchForFacetValues: algoliaClient.searchForFacets.bind(algoliaClient),
};