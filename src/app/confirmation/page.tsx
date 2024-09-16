'use client';

import React, { useEffect } from "react";
import { Sause } from '../search/components/sause';

async function init(){
    
    var state = window["optimizely"]?.get("state");
    var pageStates = state?.getPageStates();
    var pageEntries = pageStates ? Object.values(pageStates) : null;

    if (pageEntries){
        pageEntries.forEach(p => {
            var id = p.metadata?.product_id;
    
            if (id) {
                localStorage.setItem('productId', id)
            }
        });
    }
}

export default function SearchPage() {
    useEffect(() => {
        init();
    }, [])

    return (
        <>
        <div className="container p-5 flex flex-col gap-5 flex-align-center justify-start grow">
            <Sause useplane={false} />

            <h1 className="text-3xl">Congrats!! <br /> You c(b)aught yourself a pokemon!</h1>
            <h2 className="text-xl">Go catch a new one trainer!</h2>
            <a type="button" className="pixl-button" href="/search">Let's go!!</a>
        </div>
        </>
    );
}