import { setSorting, setDetails, setUpPage } from './utils/setup-page';
import { toggleMenu } from "./utils/sidebar";

/**
 * Detection of a URL change reset the page
 */
window.onhashchange = function() {
  setUpPage()
};

/**
 * setUpPage called when DOM is loaded
 */
window.onload = function() {
  setUpPage()
}

window.setSorting = setSorting;
window.setDetails = setDetails;
window.toggleMenu = toggleMenu;