import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { CampaignPageDataFragmentDoc, type CampaignPageDataFragment } from "@/gql/graphql";
import { type Maybe, type ICompositionNode, type ExperienceDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"

/**
 * Campaign Page
 * 
 */
export const CampaignPageExperience : CmsComponent<CampaignPageDataFragment> = ({ data }) => {
    const composition = (data as ExperienceDataFragment).composition as Maybe<ICompositionNode>
    return <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
        { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
    </CmsEditable>
}
CampaignPageExperience.displayName = "Campaign Page (Experience/CampaignPage)"
CampaignPageExperience.getDataFragment = () => ['CampaignPageData', CampaignPageDataFragmentDoc]
CampaignPageExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

export default CampaignPageExperience