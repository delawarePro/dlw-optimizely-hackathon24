import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { WebEssentialQuoteDataFragmentDoc, type WebEssentialQuoteDataFragment } from "@/gql/graphql";

/**
 * Quote - Web Essential
 * 
 */
export const WebEssentialQuoteElement : CmsComponent<WebEssentialQuoteDataFragment> = ({ data, children }) => {
    const componentName = 'Quote - Web Essential'
    const componentInfo = ''
    return (
        <p>placeholder</p>
    )
}
WebEssentialQuoteElement.displayName = "Quote - Web Essential (Element/WebEssentialQuote)"
WebEssentialQuoteElement.getDataFragment = () => ['WebEssentialQuoteData', WebEssentialQuoteDataFragmentDoc]

export default WebEssentialQuoteElement