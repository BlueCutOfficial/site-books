import { select, toggleClass } from './generic'

/**
 * Hide the whole menu to show only the burger icon
 */
function deactivateMenu() {
  toggleClass(['layout', 'menu', 'menuLink'], 'active', false)
}

/**
 * Switch the menu from burger icon to full display
 */
export function toggleMenu() {
  let active = 'active'
  select('layout').classList.toggle(active)
  select('menu').classList.toggle(active)
  select('menuLink').classList.toggle(active)
}

/**
 * Show the info page
 */
export function showMenuInfo() {
  select('booksLink').classList.remove('pure-menu-selected')
  select('booksLink').children[0].removeAttribute('aria-current')
  select('infoLink').classList.add('pure-menu-selected')
  select('infoLink').children[0].setAttribute('aria-current', 'page')
  toggleClass(['books', 'sorting-menu'], 'hidden', true)
  toggleClass(['info'], 'hidden', false)
  deactivateMenu()
}

/**
 * Show the book page
 */
export function showMenuBooks() {
  select('infoLink').classList.remove('pure-menu-selected')
  select('infoLink').children[0].removeAttribute('aria-current')
  select('booksLink').classList.add('pure-menu-selected')
  select('booksLink').children[0].setAttribute('aria-current', 'page')
  toggleClass(['books', 'sorting-menu'], 'hidden', false)
  toggleClass(['info'], 'hidden', true)
  deactivateMenu()
}
