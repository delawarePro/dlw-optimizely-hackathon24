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
        <WeRichText content={content}></WeRichText>
    )
}
WebEssentialRichTextElement.displayName = "Rich Text - Web Essential (Element/WebEssentialRichText)"
WebEssentialRichTextElement.getDataFragment = () => ['WebEssentialRichTextData', WebEssentialRichTextDataFragmentDoc]

export default WebEssentialRichTextElement