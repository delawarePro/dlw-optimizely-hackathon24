import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const LinkDataFragmentDoc = gql`
    fragment LinkData on ContentUrl {
  base
  hierarchical
  default
}
    `;
export const IContentInfoFragmentDoc = gql`
    fragment IContentInfo on IContentMetadata {
  key
  locale
  types
  displayName
  version
  url {
    ...LinkData
  }
}
    `;
export const IContentDataFragmentDoc = gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const BlockDataFragmentDoc = gql`
    fragment BlockData on _IComponent {
  ...IContentData
}
    `;
export const IElementDataFragmentDoc = gql`
    fragment IElementData on _IComponent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const ElementDataFragmentDoc = gql`
    fragment ElementData on _IComponent {
  ...IElementData
}
    `;
export const ReferenceDataFragmentDoc = gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    ...LinkData
  }
}
    `;
export const PokemonDataFragmentDoc = gql`
    fragment PokemonData on Pokemon {
  Identifier
  Name
  Thumbnail {
    ...ReferenceData
  }
  Species
  Types
  Attack
  Height
  HP
  Speed
  Weight
}
    `;
export const WebEssentialBannerDataFragmentDoc = gql`
    fragment WebEssentialBannerData on WebEssentialBanner {
  Title
  Description {
    json
    html
  }
}
    `;
export const WebEssentialCallToActionDataFragmentDoc = gql`
    fragment WebEssentialCallToActionData on WebEssentialCallToAction {
  Label
  Link {
    ...LinkData
  }
}
    `;
export const WebEssentialImageDataFragmentDoc = gql`
    fragment WebEssentialImageData on WebEssentialImage {
  Image {
    ...LinkData
  }
}
    `;
export const WebEssentialQuoteDataFragmentDoc = gql`
    fragment WebEssentialQuoteData on WebEssentialQuote {
  Author
  Text {
    json
    html
  }
  Image {
    ...LinkData
  }
}
    `;
export const WebEssentialRichTextDataFragmentDoc = gql`
    fragment WebEssentialRichTextData on WebEssentialRichText {
  Content {
    json
    html
  }
}
    `;
export const WebEssentialRichTextMediaDataFragmentDoc = gql`
    fragment WebEssentialRichTextMediaData on WebEssentialRichTextMedia {
  Content {
    json
    html
  }
  Media {
    ...LinkData
  }
  Reverse
}
    `;
export const CompositionDataFragmentDoc = gql`
    fragment CompositionData on ICompositionNode {
  name: displayName
  layoutType: nodeType
  type
  key
  template: displayTemplateKey
  settings: displaySettings {
    key
    value
  }
  ... on ICompositionStructureNode {
    nodes @recursive(depth: 10) {
      name: displayName
    }
  }
  ... on ICompositionComponentNode {
    component {
      ...BlockData
      ...ElementData
      ...PokemonData
      ...WebEssentialBannerData
      ...WebEssentialCallToActionData
      ...WebEssentialImageData
      ...WebEssentialQuoteData
      ...WebEssentialRichTextData
      ...WebEssentialRichTextMediaData
    }
  }
}
    `;
export const ExperienceDataFragmentDoc = gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionData
  }
}
    `;
export const BlankExperienceDataFragmentDoc = gql`
    fragment BlankExperienceData on BlankExperience {
  ...ExperienceData
}
    `;
export const CampaignPageDataFragmentDoc = gql`
    fragment CampaignPageData on CampaignPage {
  Title
  Content {
    ...BlockData
    ...PokemonData
  }
  ...ExperienceData
}
    `;
export const HomePageDataFragmentDoc = gql`
    fragment HomePageData on HomePage {
  ...ExperienceData
}
    `;
export const PageDataFragmentDoc = gql`
    fragment PageData on _IContent {
  ...IContentData
}
    `;
export const IContentListItemFragmentDoc = gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const PokemonsQueryAltDocument = gql`
    query PokemonsQueryAlt($searchQuery: String!) {
  Pokemon(where: {_fulltext: {match: $searchQuery}}) {
    items {
      Identifier
      Name
      Types
      Species
      Thumbnail {
        url {
          base
          internal
          hierarchical
          default
          type
        }
      }
      _metadata {
        key
        displayName
      }
    }
  }
}
    `;
export const getContentByIdDocument = gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items {
      ...BlockData
      ...PageData
      ...PokemonData
      ...BlankExperienceData
      ...CampaignPageData
      ...HomePageData
    }
  }
}
    ${BlockDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${PokemonDataFragmentDoc}
${ReferenceDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${WebEssentialBannerDataFragmentDoc}
${WebEssentialCallToActionDataFragmentDoc}
${WebEssentialImageDataFragmentDoc}
${WebEssentialQuoteDataFragmentDoc}
${WebEssentialRichTextDataFragmentDoc}
${WebEssentialRichTextMediaDataFragmentDoc}
${CampaignPageDataFragmentDoc}
${HomePageDataFragmentDoc}`;
export const getContentByPathDocument = gql`
    query getContentByPath($path: [String!]!, $locale: [Locales!], $siteId: String) {
  content: _Content(
    where: {_metadata: {url: {default: {in: $path}, base: {eq: $siteId}}}}
    locale: $locale
  ) {
    total
    items {
      ...IContentData
      ...PageData
      ...BlankExperienceData
      ...CampaignPageData
      ...HomePageData
    }
  }
}
    ${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PageDataFragmentDoc}
${BlankExperienceDataFragmentDoc}
${ExperienceDataFragmentDoc}
${CompositionDataFragmentDoc}
${BlockDataFragmentDoc}
${ElementDataFragmentDoc}
${IElementDataFragmentDoc}
${PokemonDataFragmentDoc}
${ReferenceDataFragmentDoc}
${WebEssentialBannerDataFragmentDoc}
${WebEssentialCallToActionDataFragmentDoc}
${WebEssentialImageDataFragmentDoc}
${WebEssentialQuoteDataFragmentDoc}
${WebEssentialRichTextDataFragmentDoc}
${WebEssentialRichTextMediaDataFragmentDoc}
${CampaignPageDataFragmentDoc}
${HomePageDataFragmentDoc}`;
export const getContentTypeDocument = gql`
    query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items {
      _metadata {
        types
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    PokemonsQueryAlt(variables: Schema.PokemonsQueryAltQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.PokemonsQueryAltQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.PokemonsQueryAltQuery>(PokemonsQueryAltDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PokemonsQueryAlt', 'query', variables);
    },
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>(getContentByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>(getContentByPathDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentByPath', 'query', variables);
    },
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>(getContentTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentType', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;