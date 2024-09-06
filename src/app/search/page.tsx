﻿'use client';

import { liteClient as algoliasearch } from "algoliasearch/lite";
import { Hit as AlgoliaHit } from 'instantsearch.js';
import React from "react";
import {
    Hits,
    Highlight,
    SearchBox,
    RefinementList,
    DynamicWidgets,
} from 'react-instantsearch';
import { InstantSearchNext } from 'react-instantsearch-nextjs';

const client = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76");

type HitProps = {
    hit: AlgoliaHit<{
        name: string;
        price: number;
    }>;
};

function Hit({ hit }: HitProps) {
    return (
        <>
            <Highlight hit={hit} attribute="name" className="Hit-label" />
            <span className="Hit-price">${hit.price}</span>
        </>
    );
}

export default async function SearchPage() {
    return (
        <InstantSearchNext searchClient={client} indexName="instant_search" routing>
            <div className="Container">
                <div>
                    <SearchBox />
                    <Hits hitComponent={Hit} />
                </div>
            </div>
        </InstantSearchNext>
    );
}