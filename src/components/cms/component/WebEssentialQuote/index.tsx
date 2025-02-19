import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { WebEssentialQuoteDataFragmentDoc, type WebEssentialQuoteDataFragment } from "@/gql/graphql";
import WeQuote from "@/components/web-essentials/quote/quote";

/**
 * Quote - Web Essential
 * 
 */

export const WebEssentialQuoteElement : CmsComponent<WebEssentialQuoteDataFragment> = ({ data, contentLink, children }) => {
    const author = data?.Author || "";
    const image = data?.Image || "";
    
    return (
        <WeQuote contentLink={contentLink} author={author} image={image} quote={data?.Text}></WeQuote>
    )
}
WebEssentialQuoteElement.displayName = "Quote - Web Essential (Element/WebEssentialQuote)"
WebEssentialQuoteElement.getDataFragment = () => ['WebEssentialQuoteData', WebEssentialQuoteDataFragmentDoc]

export default WebEssentialQuoteElement