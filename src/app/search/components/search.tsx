import React from "react";
import { InstantSearch, Hits, SearchBox } from "react-instantsearch";
import { Hit as AlgoliaHit } from "instantsearch.js";

type HitProps = {
    hit: AlgoliaHit<{
        name: string;
        price: number;
    }>;
};

function Hit({ hit }: HitProps) {
    return (
        <>
            <div className="Hit-price">
                ${hit.name}
                <span className="pokeball">
          <span className="pokeball--top"></span>
          <span className="pokeball--bottom"></span>
          <span className="pokeball--mid"></span>
        </span>
            </div>
        </>
    );
}

export function Search({ searchClient }: { searchClient: any }) {
    return (
        <InstantSearch searchClient={searchClient} indexName="instant_search">
            <SearchBox />
            <Hits hitComponent={Hit} />
        </InstantSearch>
    );
}
