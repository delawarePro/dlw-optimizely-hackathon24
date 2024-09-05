import React from "react";
import { InstantSearch, RefinementList } from "react-instantsearch";

export function Search({ searchClient }: { searchClient: any }) {
  return (
    <InstantSearch searchClient={searchClient} indexName="instant_search">
      <RefinementList attribute="brand" />
    </InstantSearch>
  );
}
