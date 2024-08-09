import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { WebEssentialQuoteDataFragmentDoc, type WebEssentialQuoteDataFragment } from "@/gql/graphql";
import WeQuote from "@/components/web-essentials/quote/quote";

/**
 * Quote - Web Essential
 * 
 */
export const WebEssentialQuoteElement : CmsComponent<WebEssentialQuoteDataFragment> = ({ data, children }) => {
    const componentName = 'Quote - Web Essential'
    const componentInfo = ''
    return (
        <WeQuote></WeQuote>
    )
}
WebEssentialQuoteElement.displayName = "Quote - Web Essential (Element/WebEssentialQuote)"
WebEssentialQuoteElement.getDataFragment = () => ['WebEssentialQuoteData', WebEssentialQuoteDataFragmentDoc]

export default WebEssentialQuoteElement