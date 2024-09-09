import React, { useState, useEffect } from 'react'
import { Dlw_CommerceFlows } from '@delawarepro/dlw-commerce-flows';

// import '@delawarepro/commerce-flows-all.scss'

function serverNotAvailableErrorCallback() {
    console.error("The server can not be reached.");
}

let cfConfig: any;

let localizationconfig = {
    translate: function (key, defaultValue) {
        return key;
    }
}

async function init() {
    
    document.cfApiBaseUrl = 'https://dlw-dev-optimizely-hackathon24-asphead-web.azurewebsites.net/';

    // TODO: clear card with dom event: CLEAR_CART
    let customerId = Math.round(Math.random() * 10000);
    localStorage.setItem("customerId", customerId);

    cfConfig = {
        apiBaseUrl: document.cfApiBaseUrl,
        cartUrl: '/cart',
        customerId: customerId,
        userId: customerId, // For now, should change when login is supported.
        // Localization global initialised in index.js
        localization: localizationconfig,
        onServerError: serverNotAvailableErrorCallback,
        returnUrl: '/',
        confirmationUrl: '/',
        includeCheckout: true,
        manualInitializeComponents: true
    }
    
    // Wait for the components to be defined before initializing the commerce flows.
    // await Dlw_CommerceFlows.initializeCartSummaryComponents();
    Dlw_CommerceFlows.initialize(cfConfig);
}   


export function Cart({ searchClient }: { searchClient: any }) {
    
    useEffect(() => {
        init();
    }, [])

    return (
        <>
            <h1>CART</h1>
            <div>
                <dlw-cf-cart-summary></dlw-cf-cart-summary>
            </div>
            <dlw-cf-added-to-cart-popup autoHide="true"></dlw-cf-added-to-cart-popup>
        </>
    );
}

