/**
 * Rearrange the list of books
 */
function sortBy(attribute) {
  [...select('books').children]
    .sort((a,b) => a.getAttribute(attribute) > b.getAttribute(attribute) ? 1 : -1)
    .forEach(node => select('books').appendChild(node))
};

/**
 * Sort the list of books by chronological order
 */
function sortByChrono() {
  // Sort the list
  sortBy('data-chrono')
  // Update dropdown state
  select('sorting').textContent = 'Ordre chronologique'
  select('sorting').setAttribute('href', getURL())
  toggleClass(['sorting-date', 'sorting-latest'], 'pure-menu-selected', false)
  toggleClass(['sorting-chrono'], 'pure-menu-selected', true)
};

/**
 * Sort the list of books by publishing date order (oldest first)
 */
function sortByDate() {
  // Sort the list
  sortBy('data-date')
  // Update dropdown state
  select('sorting').textContent = 'Date de publication'
  select('sorting').setAttribute('href', '#livres?sorting=date')
  toggleClass(['sorting-chrono', 'sorting-latest'], 'pure-menu-selected', false)
  toggleClass(['sorting-date'], 'pure-menu-selected', true)
};

/**
 * Sort the list of books by publishing date order (latest first)
 */
function sortByLatest() {
  // Sort the list
  sortBy('data-latest')
  // Update dropdown state
  select('sorting').textContent = 'Plus récent'
  select('sorting').setAttribute('href', '#livres?sorting=latest')
  toggleClass(['sorting-chrono', 'sorting-date'], 'pure-menu-selected', false)
  toggleClass(['sorting-latest'], 'pure-menu-selected', true)
};

/**
 * Display the pitch for each book
 */
function displayPitch() {
  select('details').textContent = 'le résumé'
  select('details').setAttribute('href', getURL())
  toggleClass(['details-tech', 'details-theme'], 'pure-menu-selected', false)
  toggleClass(['details-pitch'], 'pure-menu-selected', true)

  toggleClass(['le-voeu-de-yoko-pitch', 'ede-pitch', 'suzuha-pitch'], 'hidden', false)
  toggleClass(['le-voeu-de-yoko-tech', 'ede-tech', 'suzuha-tech'], 'hidden', true)
  // toggleClass(['le-voeu-de-yoko-theme', 'ede-theme', 'suzuha-theme'], 'hidden', true)
};

/**
 * Display the technical details for each book
 */
function displayTech() {
  select('details').textContent = 'la fiche technique'
  select('details').setAttribute('href', getURL())
  toggleClass(['details-pitch', 'details-theme'], 'pure-menu-selected', false)
  toggleClass(['details-tech'], 'pure-menu-selected', true)

  toggleClass(['le-voeu-de-yoko-pitch', 'ede-pitch', 'suzuha-pitch'], 'hidden', true)
  toggleClass(['le-voeu-de-yoko-tech', 'ede-tech', 'suzuha-tech'], 'hidden', false)
  // toggleClass(['le-voeu-de-yoko-theme', 'ede-theme', 'suzuha-theme'], 'hidden', true)
};

/**
 * Display the theme details for each book
 */
function displayTheme() {
  select('details').textContent = 'les thèmes'
  select('details').setAttribute('href', getURL())
  toggleClass(['details-pitch', 'details-tech'], 'pure-menu-selected', false)
  toggleClass(['details-theme'], 'pure-menu-selected', true)

  toggleClass(['le-voeu-de-yoko-pitch', 'ede-pitch', 'suzuha-pitch'], 'hidden', true)
  toggleClass(['le-voeu-de-yoko-tech', 'ede-tech', 'suzuha-tech'], 'hidden', true)
  // toggleClass(['le-voeu-de-yoko-theme', 'ede-theme', 'suzuha-theme'], 'hidden', false)
};