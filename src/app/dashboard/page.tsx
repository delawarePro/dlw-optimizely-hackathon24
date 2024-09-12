'use client';

import React from "react";

import '../../../public/assets/js/convf/conversation-flows.js';
import '../../../public/assets/css/conversation-flows.css';
// import '@delawarepro/dlw-conversation-flows/conversation-flows.scss';

export default function DashboardPage() {
    return (
        <>
            <dlw-conversation-flows apiBaseUrl="https://dlw-dev-optimizely-hackathon24-asphead-web.azurewebsites.net/api"
                                    title="How can we help you today?"
                                    greeting="Hi what kind of help are you looking for?"
                                    suggestionsTitle="We can help you find the right product, or inspire you, what are you looking for?"
                                    suggestions="[&quot;Where can I find files about X?&quot;,&quot;How are you today?&quot;]">
            </dlw-conversation-flows>
        </>
    );
}