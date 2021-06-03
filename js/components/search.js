import lunr from 'lunr';
import trim from 'lodash/trim';
import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';
import setupHovers from 'components/hover.js';

export default async () => {

  const SEARCH_RESULT_LIMIT = 10;

  const searchInput = document.querySelector('.search-input');
  const searchResults = document.querySelector('.search-results');

  let docs;
  let index;

  async function load() {

    setState('loading', 'Loading...');

    let result = await fetch('/api/search.json');
    docs = await result.json();

    index = lunr(function () {
      this.ref('id');
      this.field('title');
      this.field('description');
      this.field('topic');
      this.field('relate');
      this.field('variant');

      docs.forEach((doc, index) => {
        doc.id = index;
        this.add(doc);
      });
    });

  }

  let search = debounce(searchTerm => {

    // Make sure we're loaded
    if (docs) {
      let results = index.search(searchTerm).map(r => {
        return docs[r.ref];
      }).slice(0, SEARCH_RESULT_LIMIT);

      if (results.length) {
        searchResults.innerHTML = results.map(renderSearchResult.bind(this, searchTerm)).join('');
        setupHovers('.search-result');
        setState('has-results');
      }
      else {
        setState('no-results', `No results for "${searchTerm}"`);
      }
    }

  }, 250);

  function renderSearchResult(searchTerm, result) {

    let searchTermMatcher = new RegExp(searchTerm.split(' ').join('|'), 'i');

    let title = highlightWords(result.title, searchTermMatcher);
    let description = highlightWords(result.description, searchTermMatcher);
    let topic = highlightWords(result.topic, searchTermMatcher);
    let relate = highlightWords(result.relate, searchTermMatcher);
    let variant = highlightWords(result.variant, searchTermMatcher);

    return `
      <a class="(group) z-10 search-result block mb-2 p-5 outline-none border-4 border-transparent (focus)border-orange-600 text-gray-800 bg-gray-100 (hover)bg-gray-800 rounded-lg"
         href="${result.url}"
         target="_self"
         rel="noopener">
        <y class="pb-1 text-xs text-gray-700 font-semibold (group-hover)text-gray-500">
          ${topic}
        </y>
        <y class="flex justify-start items-center">
          <svg class="block mr-2 w-6 w-auto fill-current text-gray-800 (group-hover)text-gray-100 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M426,0H161.24c-3.978,0-7.793,1.58-10.606,4.394l-75.24,75.239C72.581,82.446,71,86.262,71,90.24V497 c0,8.284,6.716,15,15,15h340c8.284,0,15-6.716,15-15V15C441,6.716,434.284,0,426,0z M411,482H101V96.453L167.453,30H411V482z"/></g></g><g><g><path d="M366,326H146c-8.284,0-15,6.716-15,15s6.716,15,15,15h220c8.284,0,15-6.716,15-15S374.284,326,366,326z"/></g></g><g><g><path d="M226,251h-80c-8.284,0-15,6.716-15,15s6.716,15,15,15h80c8.284,0,15-6.716,15-15S234.284,251,226,251z"/></g></g><g><g><path d="M366,401h-80c-8.284,0-15,6.716-15,15s6.716,15,15,15h80c8.284,0,15-6.716,15-15S374.284,401,366,401z"/></g></g></svg>
          <y class="pb-1 font-medium text-2xl (group-hover)text-gray-100">
            ${title}
          </y>
        </y>
        <y class="pb-1 text-md (group-hover)text-gray-300">
          ${description}
        </y>
        <y class="pb-1 text-xs text-gray-600 (group-hover)text-gray-500">
          ${relate}
        </y>
        <y class="text-xs font-mono font-semibold text-gray-600 (group-hover)text-gray-500">
          ${variant}
        </y>
      </a>
    `;
  }

  function highlightWords(string, wordExpression) {
    return string.replace(new RegExp(wordExpression, 'gi'), '<mark>$&</mark>')
  }

  function setState(state, desc) {

    searchResults.dataset.state = state;

    if (typeof desc === 'string') {
      searchResults.innerHTML = `<span class="text-md text-gray-500">${desc}</span>`;
    }
  }

  let updateFixedPosition = throttle(() => {

    let bounds = searchInput.getBoundingClientRect();
    searchResults.style.top = Math.round(bounds.bottom) + 'px';

  }, 33);

  function show() {

    if (!isVisible()) {
      document.documentElement.classList.add('search-visible');
      document.addEventListener('mousedown', onDocumentMouseDown);
      document.addEventListener('keydown', onDocumentKeyDown);

      // Our search results are position fixed on small screens,
      // but on the homepage the header is pushed down from the
      // top of the screen... et voilà:
      if (document.querySelector('.header').offsetTop > 0 && getComputedStyle(searchResults).position === 'fixed') {
        document.addEventListener('scroll', updateFixedPosition);
        updateFixedPosition();
      }
      else {
        searchResults.style.top = '';
      }

      // Lazy-load the first time the search field is shown
      if (!docs) {
        load().then(
          () => {
            let searchTerm = searchInput.value.trim();
            if (searchTerm && isVisible()) {
              search(searchTerm);
            }
          },
          () => {
            setState('loading-error', 'Failed to load search data!');
          }
        );
      }
    }

  }

  function hide() {

    if (isVisible()) {
      document.documentElement.classList.remove('search-visible');
      document.removeEventListener('mousedown', onDocumentMouseDown);
      document.removeEventListener('keydown', onDocumentKeyDown);
      document.removeEventListener('scroll', updateFixedPosition);
    }

  }

  function isVisible() {

    return document.documentElement.classList.contains('search-visible');

  }

  /**
   * Moves focus between the search input & results.
   */
  function moveFocus(offset = 1) {

    let focusables = [searchInput, ...document.querySelectorAll('.search-result')];
    let index = focusables.indexOf(document.activeElement);
    let target = index === -1 ? focusables[1] : focusables[index + offset];

    if (target) target.focus();

  }

  searchInput.addEventListener('focus', show);
  searchInput.addEventListener('input', event => {
    show();

    let searchTerm = searchInput.value.trim();
    if (searchTerm) {
      search(searchTerm);
    }
    else {
      setState('no-term', 'Enter a search term');
    }
  });

  document.addEventListener('keydown', event => {

    // '/'
    if (event.keyCode === 191) {
      searchInput.focus();
      searchInput.select();
      event.preventDefault();
    }

  });

  // only bound while search is visible
  function onDocumentKeyDown(event) {

    if (event.key === 'Escape') {
      searchInput.blur();
      hide();
    }
    else if (event.key === 'Enter') {
      searchInput.blur();
      hide();

      // If there are results, but no result is focused, open the
      // first one
      let results = document.querySelectorAll('.search-result');
      if (results.length && document.activeElement.matches('.search-result') === false) {
        window.location = results[0].getAttribute('href');
      }
    }
    else if (event.key === 'ArrowUp' || (event.key === 'Tab' && event.shiftKey)) {
      moveFocus(-1);
      event.preventDefault();
    }
    else if (event.key === 'ArrowDown' || event.key === 'Tab') {
      moveFocus(1);
      event.preventDefault();
    }

  }

  function onDocumentMouseDown(event) {

    if (!event.target.closest('.search')) {
      hide();
    }

  }

}
