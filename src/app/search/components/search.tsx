import React from "react";
import { InstantSearch, Hits, SearchBox } from "react-instantsearch";
import { Hit as AlgoliaHit } from "instantsearch.js";
import { Dlw_DOM_Message_Handler } from '@delawarepro/dlw-commerce-flows';

type HitProps = {
    hit: AlgoliaHit<{
        name: string;
        price: number;
    }>;
};

function addProduct(hit: HitProps) {

    document.dispatchEvent(new CustomEvent(Dlw_DOM_Message_Handler.ADD_ITEM_TO_CART.toLowerCase(), {
        bubbles: true,
        detail: {
            message: {
                item: {
                    itemId: "001",
                    pricing: {
                        pcs: {
                            // todo: Get price from somewhere, maybe from back-end?
                            salePrice: 1337.50,
                            listPrice: 5000.50
                        }
                    },
                    title: "Bulbasaur",
                    description: "grass pokemon that evolves into Venesaur"
                },
                unit: "pcs",
                quantity: 1,
            }
        }
    }));
}

function Hit({ hit }: HitProps) {
    return (
        <>
            <div className="pokemon-card">
                <p>${hit.name}</p>
                {/* <img src={hit.image}></img> */}
                <span className="pokeball">
                    <span className="pokeball--top"></span>
                    <span className="pokeball--bottom"></span>
                    <span className="pokeball--mid"></span>
                </span>
                <img src={hit.animation}></img>
                <button onClick={() => addProduct(hit)}>CATCH!</button>
            </div>
        </>
    );
}

export function Search({ searchClient }: { searchClient: any }) {
    return (
        <>
            <div className="poke-search">
                <InstantSearch searchClient={searchClient} indexName="instant_search">
                    <SearchBox />
                    <Hits hitComponent={Hit} />
                </InstantSearch>
            </div>
        </>
    );
}
