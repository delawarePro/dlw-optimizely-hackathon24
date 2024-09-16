import React from "react";
import Image from 'next/image'

export function Sause({ useplane }: { useplane: boolean }) {
    return (
        <>
            <div className="pixel-overlay"></div>
            {
                useplane && <>
                    <div className="spin spin--dynamic">
                        <div className="spin__effect">
                            <div className="spin__spinner">
                                <div className="spin__vane"></div>
                                <div className="spin__vane"></div>
                                <div className="spin__vane"></div>
                                <div className="spin__vane"></div>
                                <div className="spin__vane"></div>
                                <div className="spin__vane"></div>
                                <div className="spin__vane"></div>
                                <div className="spin__vane"></div>
                                <div className="spin__vane"></div>
                                <div className="spin__vane"></div>
                            </div>
                        </div>
                        <div className="spin__center"></div>
                    </div>
                </>
            }

            <div className="opti-title">
                <div className="opti-title-image">
                    <Image
                        src="/assets/img/opti-back.svg"
                        width={500}
                        height={500}
                        alt="Opti title background"
                    />
                    <Image
                        src="/assets/img/opti-logo.svg"
                        width={500}
                        height={500}
                        alt="Opti title"
                    />
                </div>
                <div className="hackathon-box">
                    <div className="hackathon-box__inner">
                        <div className="hackathon-box__face hackathon-box__face--front">
                            HACKATHON
                        </div>
                        <div className="hackathon-box__face hackathon-box__face--bottom"></div>
                    </div>
                </div>
                <p>by DELAWARE</p>
            </div>
            {
                useplane && <>
                    <div className="pokemon-plane">
                        <div className="pokemon-plane__front">delaware</div>
                    </div>
                </>
            }
        </>
    );
}