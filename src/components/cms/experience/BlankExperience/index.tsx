import { OptimizelyNextPage as CmsComponent } from "@remkoj/optimizely-cms-nextjs";
import { BlankExperienceDataFragmentDoc, type BlankExperienceDataFragment } from "@/gql/graphql";
import { type Maybe, type ICompositionNode, type ExperienceDataFragment } from "@/gql/graphql";
import { OptimizelyComposition, isNode, CmsEditable } from "@remkoj/optimizely-cms-react/rsc";
import { getSdk } from "@/gql"
import { Search } from "@/components/search";
import { liteClient as algoliasearch } from "algoliasearch/lite";

/**
 * Blank Experience
 * An experience without a predefined layout.
 */
export const BlankExperienceExperience : CmsComponent<BlankExperienceDataFragment> = ({ data }) => {
    const composition = (data as ExperienceDataFragment).composition as Maybe<ICompositionNode>
    return <div>
        <Search searchClient={client} />
        <CmsEditable as="div" className="mx-auto px-2 container" cmsFieldName="unstructuredData">
            { composition && isNode(composition) && <OptimizelyComposition node={composition} /> }
        </CmsEditable>
    </div>
}
BlankExperienceExperience.displayName = "Blank Experience (Experience/BlankExperience)"
BlankExperienceExperience.getDataFragment = () => ['BlankExperienceData', BlankExperienceDataFragmentDoc]
BlankExperienceExperience.getMetaData = async (contentLink, locale, client) => {
    const sdk = getSdk(client);
    // Add your metadata logic here
    return {}
}

const client = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76");

export default BlankExperienceExperience