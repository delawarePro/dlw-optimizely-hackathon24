'use client';

import React, { useEffect, useState } from "react";

import { Search } from "./components/search";
import { Cart } from "./components/cart";
import { Sause } from "./components/sause";

import { getServerData } from "./searchPageServer";
import { stubbedSearchClient } from "./components/stubbedSearchClient";
import { optiSearchClient } from "./components/optiSearchClient";

const SearchPage: React.FC = () => {
    const [isSalePriceEnabled, setIsSalePriceEnabled] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const data = await getServerData();
            const isEnabled = typeof data.isSalePriceEnabled === 'boolean' ? data.isSalePriceEnabled : false;
            setIsSalePriceEnabled(isEnabled);

            console.log('client: flags isSalePriceEnabled' + isSalePriceEnabled);
        }
        fetchData();
    }, []);

    return (
        <>
            <Cart />
            <Sause useplane={true} />
            <Search searchClient={stubbedSearchClient} />
            {isSalePriceEnabled && <span>dummy</span>}
        </>
    );
};

export default SearchPage;