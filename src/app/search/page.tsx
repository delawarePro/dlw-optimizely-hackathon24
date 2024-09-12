'use client';

import React from "react";
import { Search } from "./components/search";
import { Cart } from "./components/cart";
import { Sause } from "./components/sause";

import { stubbedSearchClient } from "./components/stubbedSearchClient";

export default async function SearchPage() {
    return (
        <>
            <Cart />
            <Sause useplane={true} />
            <Search searchClient={stubbedSearchClient}/>
        </>
    );
}