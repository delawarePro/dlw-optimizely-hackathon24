import React, { useEffect } from 'react'
import { Dlw_CommerceFlows } from '@delawarepro/dlw-commerce-flows';
import "@delawarepro/dlw-commerce-flows/commerce-flow-all.css";
import { translationConfig } from '../../../components/translations/translations';
import { Sause } from '../../search/components/sause';

function serverNotAvailableErrorCallback() {
    console.error("The server can not be reached.");
}

async function init() {

    // Define custom components
    var checkoutAdressSection = await import(/* webpackChunkName: "cf", webpackPreload: true */ "./Custom_CF_Checkout_Address_Section_Deliver");
    var customComponents = [
        { name: 'dlw-cf-checkout-address-section', component: checkoutAdressSection.Custom_CF_Checkout_Address_Section_Delivery },
    ]

    const document : any = window.document;
    document.getCustomerId = () => localStorage.getItem("customerId");    
    document.cfApiBaseUrl = 'https://dlw-dev-optimizely-hackathon24-asphead-web.azurewebsites.net/';

    let cfConfig = {
        apiBaseUrl: document.cfApiBaseUrl,
        cartUrl: '/checkout',
        customerId: document.getCustomerId(),
        userId: document.getCustomerId(), // For now, should change when login is supported.
        // Localization global initialised in index.js
        localization: translationConfig,
        onServerError: serverNotAvailableErrorCallback,
        returnUrl: '/checkout',
        confirmationUrl: '/confirmation',
        includeCheckout: true,
        addressType: null
    }
    
    // Wait for the components to be defined before initializing the commerce flows.
    // await Dlw_CommerceFlows.initializeCartSummaryComponents();
    Dlw_CommerceFlows.initialize(cfConfig, customComponents);
}   

export function Checkout() {
    
    useEffect(() => {
        init();
    }, [])

    return (
        <>
            <div className="cf container ps-5 pe-5 flex flex-col gap-5">
                <Sause />

                <div className="cf-custom-checkout">
                    <dlw-cf-checkout-flow-breadcrumbs></dlw-cf-checkout-flow-breadcrumbs>
                    <dlw-cf-checkout-flow-step-heading></dlw-cf-checkout-flow-step-heading>
                </div>
                <div className="cf-custom-checkout container mx-auto">
                    <dlw-cf-checkout-flow-steps></dlw-cf-checkout-flow-steps>
                    <dlw-cf-checkout-flow-reverse></dlw-cf-checkout-flow-reverse>
                    <dlw-cf-checkout-flow-proceed></dlw-cf-checkout-flow-proceed>
                </div>
            </div>
        </>
    );
}

