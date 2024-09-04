import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { WebEssentialQuoteDataFragmentDoc, type WebEssentialQuoteDataFragment } from "@/gql/graphql";
import WeQuote from "@/components/web-essentials/quote/quote";

/**
 * Quote - Web Essential
 * 
 */
export const WebEssentialQuoteElement : CmsComponent<WebEssentialQuoteDataFragment> = ({ data, children }) => {
    const { Author: author, Text: { html: quote } } = data; // Extract properties from data
    
    return (
        <WeQuote author={author} quote={quote}></WeQuote>
    )
}
WebEssentialQuoteElement.displayName = "Quote - Web Essential (Element/WebEssentialQuote)"
WebEssentialQuoteElement.getDataFragment = () => ['WebEssentialQuoteData', WebEssentialQuoteDataFragmentDoc]

export default WebEssentialQuoteElement