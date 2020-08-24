import setupHome from 'pages/home.js';
import setupDemo from 'pages/demo.js';

import setupSearch from 'components/search.js';
import setupHovers from 'components/hover.js';
import setupPrefetch from 'components/prefetch.js';
import setupNavigation from 'components/navigation.js';

import AnchorJS from 'anchor-js';

const PAGE_ID = document.body.dataset.page;

setupNavigation();
setupHovers('.header-nav a, .header-cta, .footer a, .sidebar a:not(.selected)');
setupAnchors();

if (document.readyState === 'complete') {
  setup();
}
else if (document.readyState === 'interactive') {
  document.onreadystatechange = function() {
    if (document.readyState == 'complete') {
      setup();
    }
  }
}


function setup() {

  // setupInlineDecks();
  setupPrefetch();

  if (PAGE_ID === 'home') {
    setupHome();
    setupSearch();
  }
  else if (PAGE_ID === 'demo') {
    setupDemo();
  }
  else {
    setupSearch();
  }

}

function setupAnchors() {

  // Set up link anchors
  const anchors = new AnchorJS();
  anchors.options = { placement: 'left', icon: '#' };
  anchors.add('.article>h2, .article>h3, .article>h4');

}


/**
 * krugurt.js modules
 */

serviceWorker.init();

// require id="requestAppInstall" as container
// wrap with id="requestAppTrigger"
// krunch.requestAppInstall();

// check if connected to server
function checkServer(url, timeout) {
  const controller = new AbortController();
  const signal = controller.signal;
  const options = { mode: 'no-cors', signal };
  return fetch(url, options)
    .then(setTimeout(() => { controller.abort() }, timeout))
    .then(response =>
      console.log('Check server response:', response.statusText)
    )
    .catch(error =>
      alert('No internet connection! But you can browse offline the pages you visited.')
    );
}

const url = 'https://yogurt-css-documentation.netlify.app'
const timeout = 3000
checkServer(url, timeout);