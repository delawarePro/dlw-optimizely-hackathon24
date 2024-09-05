// import { renderToString } from 'react-dom/server';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import {
  InstantSearch,
  InstantSearchServerState,
  InstantSearchSSRProvider,
} from 'react-instantsearch';
import { history } from 'instantsearch.js/es/lib/routers/index.js';
import singletonRouter from 'next/navigation';
import { createInstantSearchRouterNext } from 'react-instantsearch-router-nextjs';

// const searchClient = algoliasearch('YourApplicationID', 'YourSearchOnlyAPIKey');

const customSearchClient = {
  search(requests) {
    return {}
  },
  createContext(requests) {
    return {}
  },
  searchForFacetValues(requests) {
    return {}
  }
};

type SearchPageProps = {
  serverState?: InstantSearchServerState;
  serverUrl: URL;
};

export default function SearchPage({ serverState, serverUrl }: SearchPageProps) {
  return (
    <InstantSearchSSRProvider {...serverState}>
      <InstantSearch
        searchClient={customSearchClient}
        indexName="YourIndexName"
      >
        {/* Widgets */}
      </InstantSearch>
    </InstantSearchSSRProvider>
  );
}

export async function getServerSideProps({ req }) {
  "use server"
  const protocol = req.headers.referer?.split('://')[0] || 'https';
  const serverUrl = `${protocol}://${req.headers.host}${req.url}`;
  const serverState = await getServerState(
    <SearchPage serverUrl={serverUrl} />,
    { renderToString }
  );

  return {
    props: {
      serverState,
      serverUrl,
    },
  };
}