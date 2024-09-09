'use client';

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

import { Search } from ".//components/search";

const client = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76");

export default async function SearchPage() {
    return (
        <>
                <Search searchClient={client}/>
        </>
    );
}