import React, { useState, useEffect } from 'react'
import { Dlw_CommerceFlows } from '@delawarepro/dlw-commerce-flows';

function serverNotAvailableErrorCallback() {
    console.error("The server can not be reached.");
}

let cfConfig: any;

let localizationconfig = {
    translate: function (key : any, defaultValue : any) {
        return key;
    }
}

async function init() {
    
    var document : any = window.document;
    document.getCustomerId = () => localStorage.getItem("customerId");
    
    document.cfApiBaseUrl = 'https://dlw-dev-optimizely-hackathon24-asphead-web.azurewebsites.net/';
    
    // TODO: clear card with dom event: CLEAR_CART
    if(!document.getCustomerId()) {
        let customerId : string = Math.round(Math.random() * 10000).toString();
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
    Dlw_CommerceFlows.initialize(cfConfig, null);
}   


export function Cart() {
    
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

