import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { WebEssentialBannerDataFragmentDoc, type WebEssentialBannerDataFragment } from "@/gql/graphql";

import { CmsEditable } from '@remkoj/optimizely-cms-react/rsc'
import { RichText } from '@remkoj/optimizely-cms-react/components'

/**
 * Banner - Web Essential
 *
 */

export const WebEssentialBannerElement : CmsComponent<WebEssentialBannerDataFragment> = ({ data, contentLink, children }) => {
    const title = data?.Title || "";
    const description = data?.Description?.html || "";
    
    return (
        <CmsEditable cmsId={contentLink.key}>
            <div className="px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{title}</h2>
                    <RichText as="div"
                              className="mt-6 text-lg leading-8 text-gray-600"
                              cmsFieldName={"Description"}
                              text={data?.Description?.json}/>
                </div>
            </div>
        </CmsEditable>


    )
}
WebEssentialBannerElement.displayName = "Banner - Web Essential (Element/WebEssentialBanner)"
WebEssentialBannerElement.getDataFragment = () => ['WebEssentialBannerData', WebEssentialBannerDataFragmentDoc]

export default WebEssentialBannerElement