'use client';

import React, { useState, useEffect } from "react";

import '../../../public/assets/css/conversation-flows.css';
import "../../../public/assets/css/convf.css";


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
                        <div className="chat-container">
                            <dlw-conversation-flows apiBaseUrl="https://dlw-dev-optimizely-hackathon24-asphead-web.azurewebsites.net/api"
                                title="How can we help you today?"
                                greeting="Hi what kind of help are you looking for?"
                                suggestionsTitle="We can help you find info about orders."
                                suggestions="[&quot;Can you provide me some information about order X?&quot;,&quot;What is the most sold product?&quot;]">
                            </dlw-conversation-flows>
                        </div>
                    </>
                    : <><p>Loading...</p></>
            }
        </>
    );
}