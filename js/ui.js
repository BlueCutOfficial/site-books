import { setSorting, setUpPage } from './utils/setup-page'
import { deactivateMenu, toggleMenu } from './utils/sidebar'

window.selectors = {}

/**
 * Detection of a URL change reset the page
 */
window.onhashchange = function() {
  setUpPage()
}

/**
 * setUpPage called when DOM is loaded
 */
window.onload = function() {
  setUpPage()
}

/**
 * Methods bound to DOM elements need to be assigned globally 
 */
window.setSorting = setSorting
window.deactivateMenu = deactivateMenu
window.toggleMenu = toggleMenu
