import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { WebEssentialRichTextDataFragmentDoc, type WebEssentialRichTextDataFragment } from "@/gql/graphql";
import WeRichText from "@/components/web-essentials/richtext/richtext";
import Image from "@/components/shared/cms-image";

import { getServerContext } from '@remkoj/optimizely-cms-react/rsc'
import { CmsEditable } from '@remkoj/optimizely-cms-react/rsc'
import { RichText } from '@remkoj/optimizely-cms-react/components'

/**
 * Rich Text - Web Essential
 * 
 */

const { factory } = getServerContext();

export const WebEssentialRichTextElement : CmsComponent<WebEssentialRichTextDataFragment> = ({ data, contentLink, children }) => {
    return (
        <CmsEditable cmsId={contentLink.key}>
            <div className="px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl">
                    <RichText as="div"
                              className="mt-6 leading-8 text-gray-600"
                              cmsFieldName={"Content"}
                              text={data?.Content?.json} factory={factory}/>
                </div>
            </div>
        </CmsEditable>
    )
}
WebEssentialRichTextElement.displayName = "Rich Text - Web Essential (Element/WebEssentialRichText)"
WebEssentialRichTextElement.getDataFragment = () => ['WebEssentialRichTextData', WebEssentialRichTextDataFragmentDoc]

export default WebEssentialRichTextElement