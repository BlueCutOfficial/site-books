import { setSorting, setUpPage } from './utils/setup-page'
import { deactivateMenu, toggleMenu } from './utils/sidebar'
import { setupQuestions } from './utils/what-to-read'

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
  window.questions = setupQuestions()
}

/**
 * Methods bound to DOM elements need to be assigned globally 
 */
window.setSorting = setSorting
window.deactivateMenu = deactivateMenu
window.toggleMenu = toggleMenu

window.score = { suzuha: 0, ede: 0, vdy: 0 }
window.questions = []
window.questionIndex = 0
