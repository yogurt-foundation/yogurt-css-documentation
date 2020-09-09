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

/**
 * (experimental)
 */
document.security_sha1 = {
  'https://yogurt-css-documentation.netlify-app': '75e72fe9a6908658da4a2fdb52a4dd5336d14d85',
  'https://yogurt-css-documentation.netlify.app/installation/': 'ba3581948b8a73896a80bc983c78fb18b3a2c693',
  'https://yogurt-css-documentation.netlify.app/utility-map/': '6baa93d7d4f68210b06c451ca5ea6ac218cdf438'
};

const cachep2p = new CacheP2P();



