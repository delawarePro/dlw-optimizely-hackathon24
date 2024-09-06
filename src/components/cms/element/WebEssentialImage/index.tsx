import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { WebEssentialImageDataFragmentDoc, type WebEssentialImageDataFragment } from "@/gql/graphql";
import Image from '@/components/shared/cms-image'

/**
 * Image - Web Essential
 * 
 */
export const WebEssentialImageElement : CmsComponent<WebEssentialImageDataFragment> = ({ data, children }) => {
    
    return <div>
        <Image src={ data.Image } height={100} width={100} alt={""} />
    </div>
}
WebEssentialImageElement.displayName = "Image - Web Essential (Element/WebEssentialImage)"
WebEssentialImageElement.getDataFragment = () => ['WebEssentialImageData', WebEssentialImageDataFragmentDoc]

export default WebEssentialImageElement