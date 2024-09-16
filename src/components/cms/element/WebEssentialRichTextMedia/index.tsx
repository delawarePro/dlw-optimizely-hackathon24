import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { WebEssentialRichTextMediaDataFragmentDoc, type WebEssentialRichTextMediaDataFragment } from "@/gql/graphql";

import { getServerContext } from '@remkoj/optimizely-cms-react/rsc'
import { CmsEditable } from '@remkoj/optimizely-cms-react/rsc'
import { RichText } from '@remkoj/optimizely-cms-react/components'
import Image from "@/components/shared/cms-image";

/**
 * Rich Text Media - Web Essential
 *
 */

const { factory } = getServerContext();

export const WebEssentialRichTextMediaElement: CmsComponent<WebEssentialRichTextMediaDataFragment> = ({ data, contentLink, children }) => {

    const randomID = `lightbox-${Math.round(Math.random() * 1000 )}`;

    return (
        <CmsEditable cmsId={contentLink.key}>
            <>
                <div className="relative">
                    <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
                        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                            <button popovertarget={randomID} className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                                <Image src={data?.Media} fill alt={""} className="object-cover" />
                            </button>
                        </div>
                        <div className="px-6 lg:contents">
                            <div
                                className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                                <div className="mt-6 text-xl leading-8 text-gray-700">
                                    <RichText className="mt-6 leading-8 text-gray-600"
                                              text={data?.Content?.json} factory={factory} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div popover="true" className="show-lightbox" id={randomID}>
                    <div className="lightbox-container">
                        <Image src={data?.Media} fill alt={""} className="object-cover" />
                        <button popovertarget={randomID} popovertargetaction="hide">Close</button>
                    </div>
                </div>
            </>
        </CmsEditable>
    )
}
WebEssentialRichTextMediaElement.displayName = "Rich Text Media - Web Essential (Element/WebEssentialRichTextMedia)"
WebEssentialRichTextMediaElement.getDataFragment = () => ['WebEssentialRichTextMediaData', WebEssentialRichTextMediaDataFragmentDoc]

export default WebEssentialRichTextMediaElement