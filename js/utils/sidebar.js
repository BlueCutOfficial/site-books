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

const menusConfig = {
  home: {
    itemsToActivate: [],
    itemsToDeactivate: ['booksLink', 'infoLink', 'seriesLink'],
    selectorsToShow: ['home'],
    selectorsToHide: ['books', 'sorting-menu', 'info', 'series', 'whattoread']
  }, 
  info: {
    itemsToActivate: ['infoLink'],
    itemsToDeactivate: ['booksLink', 'seriesLink'],
    selectorsToShow: ['info'],
    selectorsToHide: ['books', 'sorting-menu', 'home', 'series', 'whattoread']
  },
  livres: {
    itemsToActivate: ['booksLink'],
    itemsToDeactivate: ['infoLink', 'seriesLink'],
    selectorsToShow: ['books', 'sorting-menu'],
    selectorsToHide: ['info', 'home', 'series', 'whattoread']
  }, 
  series: {
    itemsToActivate: ['seriesLink'],
    itemsToDeactivate: ['infoLink', 'booksLink'],
    selectorsToShow: ['series'],
    selectorsToHide: ['home', 'books', 'sorting-menu', 'info', 'whattoread']
  },
  'que-choisir': {
    itemsToActivate: [],
    itemsToDeactivate: ['infoLink', 'booksLink', 'seriesLink'],
    selectorsToShow: ['whattoread'],
    selectorsToHide: ['home', 'books', 'sorting-menu', 'info', 'series']
  }
}

/**
 * Show the menu that fit the given id
 */
export function showMenu(menuId) {
  window.baseURL = menuId
  let { 
    itemsToActivate, 
    itemsToDeactivate, 
    selectorsToShow, 
    selectorsToHide 
  } = menusConfig[menuId]
  itemsToActivate.forEach((itemToActivate) => {
    activateSidebarItem(itemToActivate)
  })
  itemsToDeactivate.forEach((itemToDeactivate) => {
    deactivateSidebarItem(itemToDeactivate)
  })
  toggleClass(selectorsToShow, 'hidden', false)
  toggleClass(selectorsToHide, 'hidden', true)
  deactivateMenu()
}
