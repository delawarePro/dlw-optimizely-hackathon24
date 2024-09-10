import React, { useState, useEffect } from 'react'
import { Dlw_CommerceFlows } from '@delawarepro/dlw-commerce-flows';

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
    document.getCustomerId = () => localStorage.getItem("customerId");
    
    document.cfApiBaseUrl = 'https://dlw-dev-optimizely-hackathon24-asphead-web.azurewebsites.net/';
    
    // TODO: clear card with dom event: CLEAR_CART
    if(!document.getCustomerId()) {
        let customerId = Math.round(Math.random() * 10000);
        localStorage.setItem("customerId", customerId);
    }
    

    cfConfig = {
        apiBaseUrl: document.cfApiBaseUrl,
        cartUrl: '/checkout',
        customerId: document.getCustomerId(),
        userId: document.getCustomerId(), // For now, should change when login is supported.
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


export function Cart() {
    
    useEffect(() => {
        init();
    }, [])

    return (
        <>
            <div className="cf-cart">
                <dlw-cf-added-to-cart-popup></dlw-cf-added-to-cart-popup>
            </div>
        </>
    );
}

