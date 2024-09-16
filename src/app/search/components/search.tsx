﻿import React, { useEffect } from 'react'
import { InstantSearch, Hits, SearchBox, useStats } from "react-instantsearch";
import { Hit as AlgoliaHit } from "instantsearch.js";
// import { Dlw_DOM_Message_Handler } from '@delawarepro/dlw-commerce-flows';

type HitProps = {
    hit: AlgoliaHit<{
        name: string;
        price: number;
        animation: string;
    }>;
};

function addProduct(hit: AlgoliaHit) {

    document.dispatchEvent(new CustomEvent("additemtocart", {
        bubbles: true,
        detail: {
            message: {
                item: {
                    itemId: "001",
                    pricing: {
                        pcs: {
                            // todo: Get price from somewhere, maybe from back-end?
                            salePrice: 133.50,
                            listPrice: 500.50
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

function CustomStats() {
    const {
      nbHits
    } = useStats();

    return <>
        <div className={nbHits == 1 ? "poke-search single-result" : "poke-search"}>
            <SearchBox />
            <Hits hitComponent={Hit} />
        </div>
    </>;
  }

function Hit({ hit }: HitProps) {
    const salePrice = 10;
    const listPrice = 100;

    return (
        <>
            <div className="pokemon-card">
                <p className="pokemon-card__info">
                    <b className="pokemon-name">{hit.name}</b>
                    <br />
                    <span className="pokemon-price">
                        {
                            salePrice ? <>
                                <s>{listPrice}</s> <b>{salePrice}</b>
                            </>
                            : <>
                                {listPrice}
                            </>
                        }
                    </span>
                </p>
                <span className="pokeball">
                    <span className="pokeball--top"></span>
                    <span className="pokeball--bottom"></span>
                    <span className="pokeball--mid"></span>
                </span>
                <img src={hit.animation}></img>
                <button className="pixl-button" onClick={() => addProduct(hit)}>CATCH!</button>
            </div>
        </>
    );
}

export function Search({ searchClient }: { searchClient: any }) {
    return (
        <>
            <InstantSearch searchClient={searchClient} indexName="instant_search">
                <CustomStats />
            </InstantSearch>
        </>
    );
}
