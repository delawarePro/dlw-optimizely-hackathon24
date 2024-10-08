import type * as Schema from "./graphql";
import type { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
export const LinkDataFragmentDoc = /*#__PURE__*/ gql`
    fragment LinkData on ContentUrl {
  base
  hierarchical
  default
}
    `;
export const IContentInfoFragmentDoc = /*#__PURE__*/ gql`
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
export const IContentDataFragmentDoc = /*#__PURE__*/ gql`
    fragment IContentData on _IContent {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const IContentListItemFragmentDoc = /*#__PURE__*/ gql`
    fragment IContentListItem on _IContent {
  ...IContentData
}
    `;
export const IElementDataFragmentDoc = /*#__PURE__*/ gql`
    fragment IElementData on _IElement {
  _metadata {
    ...IContentInfo
  }
  _type: __typename
}
    `;
export const WebEssentialBannerDataFragmentDoc = /*#__PURE__*/ gql`
    fragment WebEssentialBannerData on WebEssentialBanner {
  Title
  Description {
    json
    html
  }
}
    `;
export const WebEssentialCallToActionDataFragmentDoc = /*#__PURE__*/ gql`
    fragment WebEssentialCallToActionData on WebEssentialCallToAction {
  Label
  Link {
    ...LinkData
  }
}
    `;
export const WebEssentialImageDataFragmentDoc = /*#__PURE__*/ gql`
    fragment WebEssentialImageData on WebEssentialImage {
  Image {
    ...LinkData
  }
}
    `;
export const WebEssentialQuoteDataFragmentDoc = /*#__PURE__*/ gql`
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
export const WebEssentialRichTextDataFragmentDoc = /*#__PURE__*/ gql`
    fragment WebEssentialRichTextData on WebEssentialRichText {
  Content {
    json
    html
  }
}
    `;
export const WebEssentialRichTextMediaDataFragmentDoc = /*#__PURE__*/ gql`
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
export const ElementDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ElementData on _IElement {
  ...IElementData
  ...WebEssentialBannerData
  ...WebEssentialCallToActionData
  ...WebEssentialImageData
  ...WebEssentialQuoteData
  ...WebEssentialRichTextData
  ...WebEssentialRichTextMediaData
}
    `;
export const CompositionDataFragmentDoc = /*#__PURE__*/ gql`
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
  ... on ICompositionElementNode {
    element {
      ...ElementData
    }
  }
}
    `;
export const ExperienceDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ExperienceData on _IExperience {
  composition {
    ...CompositionData
  }
}
    `;
export const BlankExperienceDataFragmentDoc = /*#__PURE__*/ gql`
    fragment BlankExperienceData on BlankExperience {
  ...ExperienceData
}
    `;
export const ReferenceDataFragmentDoc = /*#__PURE__*/ gql`
    fragment ReferenceData on ContentReference {
  key
  url {
    ...LinkData
  }
}
    `;
export const PokemonDataFragmentDoc = /*#__PURE__*/ gql`
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
export const BlockDataFragmentDoc = /*#__PURE__*/ gql`
    fragment BlockData on _IContent {
  ...IContentData
  ...PokemonData
}
    `;
export const CampaignPageDataFragmentDoc = /*#__PURE__*/ gql`
    fragment CampaignPageData on CampaignPage {
  Title
  Content {
    ...BlockData
  }
  ...ExperienceData
}
    `;
export const HomePageDataFragmentDoc = /*#__PURE__*/ gql`
    fragment HomePageData on HomePage {
  ...ExperienceData
}
    `;
export const PageDataFragmentDoc = /*#__PURE__*/ gql`
    fragment PageData on _IContent {
  ...IContentData
  ...BlankExperienceData
  ...CampaignPageData
  ...HomePageData
}
    `;
export const getContentTypeDocument = /*#__PURE__*/ gql`
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
export const getContentByIdDocument = /*#__PURE__*/ gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {
  content: _Content(
    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}
    locale: $locale
  ) {
    total
    items {
      ...BlockData
      ...PageData
    }
  }
}
    ${BlockDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
${PokemonDataFragmentDoc}
${ReferenceDataFragmentDoc}
${PageDataFragmentDoc}
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
export const getContentByPathDocument = /*#__PURE__*/ gql`
    query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {
  content: _Content(
    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}
    locale: $locale
  ) {
    total
    items {
      ...PageData
    }
  }
}
    ${PageDataFragmentDoc}
${IContentDataFragmentDoc}
${IContentInfoFragmentDoc}
${LinkDataFragmentDoc}
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
${BlockDataFragmentDoc}
${PokemonDataFragmentDoc}
${ReferenceDataFragmentDoc}
${HomePageDataFragmentDoc}`;
export const PokemonsQueryAltDocument = /*#__PURE__*/ gql`
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
      _link {
        Price {
          items {
            parentIdentifier
            listPrice
            salePrice
          }
        }
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getContentType(variables: Schema.getContentTypeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentTypeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentTypeQuery>(getContentTypeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentType', 'query', variables);
    },
    getContentById(variables: Schema.getContentByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByIdQuery>(getContentByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentById', 'query', variables);
    },
    getContentByPath(variables: Schema.getContentByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.getContentByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.getContentByPathQuery>(getContentByPathDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContentByPath', 'query', variables);
    },
    PokemonsQueryAlt(variables: Schema.PokemonsQueryAltQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Schema.PokemonsQueryAltQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Schema.PokemonsQueryAltQuery>(PokemonsQueryAltDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PokemonsQueryAlt', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;