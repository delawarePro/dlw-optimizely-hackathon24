import { CmsComponent } from "@remkoj/optimizely-cms-react";
import { WebEssentialImageDataFragmentDoc, type WebEssentialImageDataFragment } from "@/gql/graphql";

/**
 * Image - Web Essential
 * 
 */
export const WebEssentialImageElement : CmsComponent<WebEssentialImageDataFragment> = ({ data, children }) => {
    const componentName = 'Image - Web Essential'
    const componentInfo = ''
    return <div className="w-full border-y border-y-solid border-y-slate-900 py-2 mb-4">
        <div className="font-bold italic">{ componentName }</div>
        <div>{ componentInfo }</div>
        { Object.getOwnPropertyNames(data).length > 0 && <pre className="w-full overflow-x-hidden font-mono text-sm bg-slate-200 p-2 rounded-sm border border-solid border-slate-900 text-slate-900">{ JSON.stringify(data, undefined, 4) }</pre> }
        { children && <div className="mt-4 mx-4 flex flex-col">{ children }</div>}
    </div>
}
WebEssentialImageElement.displayName = "Image - Web Essential (Element/WebEssentialImage)"
WebEssentialImageElement.getDataFragment = () => ['WebEssentialImageData', WebEssentialImageDataFragmentDoc]

export default WebEssentialImageElement