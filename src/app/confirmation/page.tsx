'use client';

import React from "react";

export default async function SearchPage() {
    return (
        <>
        <div className="container p-5 flex flex-col gap-5 flex-align-center justify-center grow">
            <h1 className="text-3xl">Congrats!! <br /> You c(b)aught yourself a pokemon!</h1>
            <h2 className="text-xl">Go catch a new one trainer!</h2>
            <button type="button" className="pixl-button" href="/search">Let's go!!</button>
        </div>
        </>
    );
}