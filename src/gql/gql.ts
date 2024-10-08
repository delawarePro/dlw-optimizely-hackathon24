/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: _Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      _metadata {\n        types\n      }\n    }\n  }\n}": types.getContentTypeDocument,
    "fragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}": types.ReferenceDataFragmentDoc,
    "fragment ElementData on _IElement {\n  ...IElementData\n}": types.ElementDataFragmentDoc,
    "fragment ExperienceData on _IExperience {\n  composition {\n    ...CompositionData\n  }\n}": types.ExperienceDataFragmentDoc,
    "fragment IElementData on _IElement {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}": types.IElementDataFragmentDoc,
    "fragment IContentListItem on _IContent {\n  ...IContentData\n}": types.IContentListItemFragmentDoc,
    "fragment PageData on _IContent {\n  ...IContentData\n}": types.PageDataFragmentDoc,
    "fragment CompositionData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n  ... on ICompositionStructureNode {\n    nodes @recursive(depth: 10) {\n      name: displayName\n    }\n  }\n  ... on ICompositionElementNode {\n    element {\n      ...ElementData\n    }\n  }\n}": types.CompositionDataFragmentDoc,
    "fragment BlockData on _IContent {\n  ...IContentData\n}": types.BlockDataFragmentDoc,
    "fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}": types.IContentInfoFragmentDoc,
    "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: _Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...BlockData\n      ...PageData\n    }\n  }\n}": types.getContentByIdDocument,
    "query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {\n  content: _Content(\n    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...PageData\n    }\n  }\n}": types.getContentByPathDocument,
    "fragment LinkData on ContentUrl {\n  base\n  hierarchical\n  default\n}": types.LinkDataFragmentDoc,
    "fragment IContentData on _IContent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}": types.IContentDataFragmentDoc,
    "\n        query PokemonsQueryAlt($searchQuery: String!)  {\n            Pokemon(\n                where: { _fulltext: { match: $searchQuery } }\n            ) {\n                items{\n                    Identifier\n                    Name,\n                    Types,\n                    Species,\n                    Thumbnail {\n                        url {\n                            base\n                            internal\n                            hierarchical\n                            default\n                            type\n                        }\n                    },\n                    _metadata{\n                        key,\n                        displayName\n                    }\n                    _link {\n                        Price {\n                            items {\n                                parentIdentifier\n                                listPrice\n                                salePrice\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    ": types.PokemonsQueryAltDocument,
    "fragment PokemonData on Pokemon {\n  Identifier\n  Name\n  Thumbnail {\n    ...ReferenceData\n  }\n  Species\n  Types\n  Attack\n  Height\n  HP\n  Speed\n  Weight\n}": types.PokemonDataFragmentDoc,
    "fragment WebEssentialBannerData on WebEssentialBanner {\n  Title\n  Description {\n    json\n    html\n  }\n}": types.WebEssentialBannerDataFragmentDoc,
    "fragment WebEssentialCallToActionData on WebEssentialCallToAction {\n  Label\n  Link {\n    ...LinkData\n  }\n}": types.WebEssentialCallToActionDataFragmentDoc,
    "fragment WebEssentialImageData on WebEssentialImage {\n  Image {\n    ...LinkData\n  }\n}": types.WebEssentialImageDataFragmentDoc,
    "fragment WebEssentialQuoteData on WebEssentialQuote {\n  Author\n  Text {\n    json\n    html\n  }\n  Image {\n    ...LinkData\n  }\n}": types.WebEssentialQuoteDataFragmentDoc,
    "fragment WebEssentialRichTextData on WebEssentialRichText {\n  Content {\n    json\n    html\n  }\n}": types.WebEssentialRichTextDataFragmentDoc,
    "fragment WebEssentialRichTextMediaData on WebEssentialRichTextMedia {\n  Content {\n    json\n    html\n  }\n  Media {\n    ...LinkData\n  }\n  Reverse\n}": types.WebEssentialRichTextMediaDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}": types.BlankExperienceDataFragmentDoc,
    "fragment CampaignPageData on CampaignPage {\n  Title\n  Content {\n    ...BlockData\n  }\n  ...ExperienceData\n}": types.CampaignPageDataFragmentDoc,
    "fragment HomePageData on HomePage {\n  ...ExperienceData\n}": types.HomePageDataFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: _Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      _metadata {\n        types\n      }\n    }\n  }\n}"): (typeof documents)["query getContentType($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: _Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      _metadata {\n        types\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ElementData on _IElement {\n  ...IElementData\n}"): (typeof documents)["fragment ElementData on _IElement {\n  ...IElementData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExperienceData on _IExperience {\n  composition {\n    ...CompositionData\n  }\n}"): (typeof documents)["fragment ExperienceData on _IExperience {\n  composition {\n    ...CompositionData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IElementData on _IElement {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"): (typeof documents)["fragment IElementData on _IElement {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentListItem on _IContent {\n  ...IContentData\n}"): (typeof documents)["fragment IContentListItem on _IContent {\n  ...IContentData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageData on _IContent {\n  ...IContentData\n}"): (typeof documents)["fragment PageData on _IContent {\n  ...IContentData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CompositionData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n  ... on ICompositionStructureNode {\n    nodes @recursive(depth: 10) {\n      name: displayName\n    }\n  }\n  ... on ICompositionElementNode {\n    element {\n      ...ElementData\n    }\n  }\n}"): (typeof documents)["fragment CompositionData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n  ... on ICompositionStructureNode {\n    nodes @recursive(depth: 10) {\n      name: displayName\n    }\n  }\n  ... on ICompositionElementNode {\n    element {\n      ...ElementData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlockData on _IContent {\n  ...IContentData\n}"): (typeof documents)["fragment BlockData on _IContent {\n  ...IContentData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: _Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...BlockData\n      ...PageData\n    }\n  }\n}"): (typeof documents)["query getContentById($key: String!, $version: String, $locale: [Locales!], $path: String, $domain: String) {\n  content: _Content(\n    where: {_or: [{_metadata: {key: {eq: $key}, version: {eq: $version}}}, {_metadata: {url: {hierarchical: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}]}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...BlockData\n      ...PageData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {\n  content: _Content(\n    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...PageData\n    }\n  }\n}"): (typeof documents)["query getContentByPath($path: String!, $version: String, $locale: [Locales!], $domain: String) {\n  content: _Content(\n    where: {_metadata: {url: {default: {eq: $path}, base: {eq: $domain}}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    total\n    items {\n      ...PageData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LinkData on ContentUrl {\n  base\n  hierarchical\n  default\n}"): (typeof documents)["fragment LinkData on ContentUrl {\n  base\n  hierarchical\n  default\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentData on _IContent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"): (typeof documents)["fragment IContentData on _IContent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        query PokemonsQueryAlt($searchQuery: String!)  {\n            Pokemon(\n                where: { _fulltext: { match: $searchQuery } }\n            ) {\n                items{\n                    Identifier\n                    Name,\n                    Types,\n                    Species,\n                    Thumbnail {\n                        url {\n                            base\n                            internal\n                            hierarchical\n                            default\n                            type\n                        }\n                    },\n                    _metadata{\n                        key,\n                        displayName\n                    }\n                    _link {\n                        Price {\n                            items {\n                                parentIdentifier\n                                listPrice\n                                salePrice\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    "): (typeof documents)["\n        query PokemonsQueryAlt($searchQuery: String!)  {\n            Pokemon(\n                where: { _fulltext: { match: $searchQuery } }\n            ) {\n                items{\n                    Identifier\n                    Name,\n                    Types,\n                    Species,\n                    Thumbnail {\n                        url {\n                            base\n                            internal\n                            hierarchical\n                            default\n                            type\n                        }\n                    },\n                    _metadata{\n                        key,\n                        displayName\n                    }\n                    _link {\n                        Price {\n                            items {\n                                parentIdentifier\n                                listPrice\n                                salePrice\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PokemonData on Pokemon {\n  Identifier\n  Name\n  Thumbnail {\n    ...ReferenceData\n  }\n  Species\n  Types\n  Attack\n  Height\n  HP\n  Speed\n  Weight\n}"): (typeof documents)["fragment PokemonData on Pokemon {\n  Identifier\n  Name\n  Thumbnail {\n    ...ReferenceData\n  }\n  Species\n  Types\n  Attack\n  Height\n  HP\n  Speed\n  Weight\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment WebEssentialBannerData on WebEssentialBanner {\n  Title\n  Description {\n    json\n    html\n  }\n}"): (typeof documents)["fragment WebEssentialBannerData on WebEssentialBanner {\n  Title\n  Description {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment WebEssentialCallToActionData on WebEssentialCallToAction {\n  Label\n  Link {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment WebEssentialCallToActionData on WebEssentialCallToAction {\n  Label\n  Link {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment WebEssentialImageData on WebEssentialImage {\n  Image {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment WebEssentialImageData on WebEssentialImage {\n  Image {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment WebEssentialQuoteData on WebEssentialQuote {\n  Author\n  Text {\n    json\n    html\n  }\n  Image {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment WebEssentialQuoteData on WebEssentialQuote {\n  Author\n  Text {\n    json\n    html\n  }\n  Image {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment WebEssentialRichTextData on WebEssentialRichText {\n  Content {\n    json\n    html\n  }\n}"): (typeof documents)["fragment WebEssentialRichTextData on WebEssentialRichText {\n  Content {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment WebEssentialRichTextMediaData on WebEssentialRichTextMedia {\n  Content {\n    json\n    html\n  }\n  Media {\n    ...LinkData\n  }\n  Reverse\n}"): (typeof documents)["fragment WebEssentialRichTextMediaData on WebEssentialRichTextMedia {\n  Content {\n    json\n    html\n  }\n  Media {\n    ...LinkData\n  }\n  Reverse\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}"): (typeof documents)["fragment BlankExperienceData on BlankExperience {\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CampaignPageData on CampaignPage {\n  Title\n  Content {\n    ...BlockData\n  }\n  ...ExperienceData\n}"): (typeof documents)["fragment CampaignPageData on CampaignPage {\n  Title\n  Content {\n    ...BlockData\n  }\n  ...ExperienceData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HomePageData on HomePage {\n  ...ExperienceData\n}"): (typeof documents)["fragment HomePageData on HomePage {\n  ...ExperienceData\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;