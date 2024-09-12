﻿'use client';

import React, { useState, useEffect } from "react";

import '../../../public/assets/css/conversation-flows.css';


export default function DashboardPage() {
    const [loaded, setLoaded] = useState(false);
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) return;
        setInit(true);
        const script = document.createElement('script');
        script.src = "/assets/js/convf/conversation-flows.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
    }, []);

    return (
        <>
            {
                loaded ?
                    <>
                        <div class="chat-container">
                            <dlw-conversation-flows apiBaseUrl="https://dlw-dev-optimizely-hackathon24-asphead-web.azurewebsites.net/api"
                                title="How can we help you today?"
                                greeting="Hi what kind of help are you looking for?"
                                suggestionsTitle="We can help you find the right product, or inspire you, what are you looking for?"
                                suggestions="[&quot;Where can I find files about X?&quot;,&quot;How are you today?&quot;]">
                            </dlw-conversation-flows>
                        </div>
                    </>
                    : <><p>Loading...</p></>
            }
        </>
    );
}