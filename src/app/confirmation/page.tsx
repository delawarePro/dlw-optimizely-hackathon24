'use client';

import React from 'react'
import { useSearchParams } from 'next/navigation'

import { Sause } from '../search/components/sause';

export default async function SearchPage() {
    const searchParams = useSearchParams();
    const orderID = searchParams.get('orderNr');

    return (
        <>
        <div className="container p-5 flex flex-col gap-5 flex-align-center justify-start grow">
            <Sause useplane={false} />
            <h1 className="text-3xl">Congrats!! <br /> You c(b)aught yourself a pokemon!</h1>
            <h2 className="text-xl">Your order id:<br />
                <span className="text-blue-600">{orderID}</span>
            </h2>

            <p className="text-xl">Go catch a new one trainer!</p>
            <a type="button" className="pixl-button pixl-button--lg" href="/search">Let's go!!</a>
        </div>
        </>
    );
}