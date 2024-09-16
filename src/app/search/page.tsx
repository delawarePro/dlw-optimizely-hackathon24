'use client';

import React from "react";
import { Search } from "./components/search";
import { Cart } from "./components/cart";
import { Sause } from "./components/sause";

import { stubbedSearchClient } from "./components/stubbedSearchClient";
import { optiSearchClient } from "./components/optiSearchClient";

export default async function SearchPage() {
    return (
        <div className="pokemon-container">
            <Cart />
            <Sause useplane={true} />
            <Search searchClient={optiSearchClient}/>
        </div>
    );
}