import { select, toggleClass, getURL } from './generics'

/**
 * Rearrange the list of books
 */
export function sortBy(attribute) {
  [...select('books').children]
    .sort((a,b) => a.getAttribute(attribute) > b.getAttribute(attribute) ? 1 : -1)
    .forEach(node => select('books').appendChild(node))
}

/**
 * Sort the list of books by chronological order
 */
export function sortByChrono() {
  // Sort the list
  sortBy('data-chrono')
  // Update dropdown state
  select('sorting').textContent = 'Ordre chronologique'
  select('sorting').setAttribute('href', getURL())
  toggleClass(['sorting-date', 'sorting-latest'], 'pure-menu-selected', false)
  toggleClass(['sorting-chrono'], 'pure-menu-selected', true)
}

/**
 * Sort the list of books by publishing date order (oldest first)
 */
export function sortByDate() {
  // Sort the list
  sortBy('data-date')
  // Update dropdown state
  select('sorting').textContent = 'Date de publication'
  select('sorting').setAttribute('href', '#livres?sorting=date')
  toggleClass(['sorting-chrono', 'sorting-latest'], 'pure-menu-selected', false)
  toggleClass(['sorting-date'], 'pure-menu-selected', true)
}

/**
 * Sort the list of books by publishing date order (latest first)
 */
export function sortByLatest() {
  // Sort the list
  sortBy('data-latest')
  // Update dropdown state
  select('sorting').textContent = 'Plus récent'
  select('sorting').setAttribute('href', '#livres?sorting=latest')
  toggleClass(['sorting-chrono', 'sorting-date'], 'pure-menu-selected', false)
  toggleClass(['sorting-latest'], 'pure-menu-selected', true)
}
