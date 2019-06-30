import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js/cjs';
import { searchBox, hits } from 'instantsearch.js/cjs/widgets';

const search = instantsearch({
  indexName: 'kaldi_TEST',
  searchClient: algoliasearch(
    'SBWYYZBRQM',
    '3e8e75585e9690f6f7683d6db393b081',
  ),
  routing: true
});
  // initialize SearchBox
  search.addWidget(
  instantsearch.widgets.searchBox({
    container: document.querySelector("#search-box"),
    placeholder: 'Search'
  })
);

var hit = document.querySelector("#hits");

search.addWidget(
  instantsearch.widgets.hits({
    container: document.querySelector("#hits"),
    templates: {
      empty: 'No results',
      item: '<em>Hit {{objectID}}</em>: {{{_highlightResult.name.value}}}'
    }
  })
);

search.start();

