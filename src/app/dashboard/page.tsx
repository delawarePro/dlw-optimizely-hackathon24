'use client';

import React from "react";

import '@delawarepro/dlw-conversation-flows';
// import '@delawarepro/dlw-conversation-flows/conversation-flows.scss';

export default async function DashboardPage() {
    return (
        <>
            <dlw-conversation-flows apiBaseUrl="https://dlw-dev-optimizely-hackathon24-asphead-web.azurewebsites.net/"
                                    title="How can we help you today?"
                                    greeting="Hi what kind of help are you looking for?"
                                    suggestionsTitle="We can help you find the right product, or inspire you, what are you looking for?"
                                    suggestions="[&quot;Where can I find files about X?&quot;,&quot;How are you today?&quot;]">
            </dlw-conversation-flows>
        </>
    );
}