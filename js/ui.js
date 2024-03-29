import { setSorting, setUpPage } from './utils/setup-page'
import { deactivateMenu, toggleMenu } from './utils/sidebar'
import { setupQuestions } from './utils/what-to-read'

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
  setupQuestions()
}

/**
 * Methods bound to DOM elements need to be assigned globally 
 */
window.setSorting = setSorting
window.deactivateMenu = deactivateMenu
window.toggleMenu = toggleMenu

window.score = { suzuha: 0, ede: 0, vdy: 0 }
window.tmpScore = { suzuha: 0, ede: 0, vdy: 0 }
window.selectedAnswer = undefined
window.questions = []
window.questionIndex = 0
