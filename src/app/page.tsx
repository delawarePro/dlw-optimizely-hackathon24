'use client';

import React from "react";
import { Search } from "./search/components/search";
import { Cart } from "./search/components/cart";
import { Sause } from "./search/components/sause";

import { stubbedSearchClient } from "./search/components/stubbedSearchClient";

export default async function SearchPage() {
    return (
        <>
            <Cart />
            <Sause useplane={true} />
            <Search searchClient={stubbedSearchClient}/>
        </>
    );
}