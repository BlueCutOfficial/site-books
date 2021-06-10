import { select, toggleClass } from './generics'

/**
 * Hide the whole menu to show only the burger icon
 */
export function deactivateMenu() {
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
 * Show the item in parameter active in the sidebar
 */
let activateSidebarItem = function(itemId) {
  select(itemId).classList.add('pure-menu-selected')
  select(itemId).children[0].setAttribute('aria-current', 'page')
}

/**
 * Show the item in parameter inactive in the sidebar
 */
let deactivateSidebarItem = function(itemId) {
  select(itemId).classList.remove('pure-menu-selected')
  select(itemId).children[0].removeAttribute('aria-current')
}

/**
 * Show the home page
 */
export function showMenuHome() {
  deactivateSidebarItem('booksLink')
  deactivateSidebarItem('infoLink')
  deactivateSidebarItem('seriesLink')
  toggleClass(['home'], 'hidden', false)
  toggleClass(['books', 'sorting-menu', 'info', 'series'], 'hidden', true)
  deactivateMenu()
}

/**
 * Show the author page
 */
export function showMenuInfo() {
  deactivateSidebarItem('booksLink')
  deactivateSidebarItem('seriesLink')
  activateSidebarItem('infoLink')
  toggleClass(['books', 'sorting-menu', 'home', 'series'], 'hidden', true)
  toggleClass(['info'], 'hidden', false)
  deactivateMenu()
}

/**
 * Show the book page
 */
export function showMenuBooks() {
  deactivateSidebarItem('infoLink')
  deactivateSidebarItem('seriesLink')
  activateSidebarItem('booksLink')
  toggleClass(['books', 'sorting-menu'], 'hidden', false)
  toggleClass(['info', 'home', 'series'], 'hidden', true)
  deactivateMenu()
}

/**
 * Show the series page
 */
export function showMenuSeries() {
  deactivateSidebarItem('infoLink')
  deactivateSidebarItem('booksLink')
  activateSidebarItem('seriesLink')
  toggleClass(['series'], 'hidden', false)
  toggleClass(['home', 'books', 'sorting-menu', 'info'], 'hidden', true)
  deactivateMenu()
}