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

import { stubbedSearchClient } from "./components/stubbedSearchClient";
import { optiSearchClient } from "./components/optiSearchClient";

export default async function SearchPage() {
    return (
        <>
                <Search searchClient={optiSearchClient}/>
        </>
    );
}