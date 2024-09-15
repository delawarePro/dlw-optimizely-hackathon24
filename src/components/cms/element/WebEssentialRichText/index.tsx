import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { WebEssentialRichTextDataFragmentDoc, type WebEssentialRichTextDataFragment } from "@/gql/graphql";
import WeRichText from "@/components/web-essentials/richtext/richtext";

/**
 * Rich Text - Web Essential
 * 
 */
export const WebEssentialRichTextElement : CmsComponent<WebEssentialRichTextDataFragment> = ({ data, children }) => {
    const content = data?.Content?.html || "";
    
    return (
        <div className="px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl">
                <p className="mt-6 leading-8 text-gray-600" dangerouslySetInnerHTML={{__html: content}}></p>
            </div>
        </div>
    )
}
WebEssentialRichTextElement.displayName = "Rich Text - Web Essential (Element/WebEssentialRichText)"
WebEssentialRichTextElement.getDataFragment = () => ['WebEssentialRichTextData', WebEssentialRichTextDataFragmentDoc]

export default WebEssentialRichTextElement