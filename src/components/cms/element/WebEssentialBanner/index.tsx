import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { WebEssentialBannerDataFragmentDoc, type WebEssentialBannerDataFragment } from "@/gql/graphql";

/**
 * Banner - Web Essential
 * 
 */
export const WebEssentialBannerElement : CmsComponent<WebEssentialBannerDataFragment> = ({ data, children }) => {
    const title = data?.Title || "";
    const description = data?.Description?.html || "";
    
    return (
        <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{ title }</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600" dangerouslySetInnerHTML={{__html: description}}></p>
            </div>
        </div>
    )
}
WebEssentialBannerElement.displayName = "Banner - Web Essential (Element/WebEssentialBanner)"
WebEssentialBannerElement.getDataFragment = () => ['WebEssentialBannerData', WebEssentialBannerDataFragmentDoc]

export default WebEssentialBannerElement