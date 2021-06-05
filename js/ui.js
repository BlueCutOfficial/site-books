let selectors = {}

/**
 * Get element by id
 * Elements that were already requested are registered in "selectors" array for performance
 */
function select(id) {
  let selector = selectors[id]
  if (!selector) {
    selector = document.getElementById(id)
    selectors[id] = selector
  }
  return selector
}

/**
 * Add or remove the class "toggleClass" on all given selectors
 */
function toggleClass(selectors, toggleClass, isAdd) {
  selectors.forEach((id) => {
    if (isAdd) {
      select(id).classList.add(toggleClass)
    } else {
      select(id).classList.remove(toggleClass)
    }
  })
}

/**
 * Switch the menu from burger icon to full display
 */
function toggleMenu() {
  let active = 'active'
  select('layout').classList.toggle(active)
  select('menu').classList.toggle(active)
  select('menuLink').classList.toggle(active)
}

/**
 * Hide the whole menu to show only the burger icon
 */
function deactivateMenu() {
  toggleClass(['layout', 'menu', 'menuLink'], 'active', false)
}

function showMenuInfo() {
  select('booksLink').classList.remove('pure-menu-selected')
  select('booksLink').children[0].removeAttribute('aria-current')
  select('infoLink').classList.add('pure-menu-selected')
  select('infoLink').children[0].setAttribute('aria-current', 'page')
  toggleClass(['books', 'sorting-menu'], 'hidden', true)
  toggleClass(['info'], 'hidden', false)
  deactivateMenu()
}

function showMenuBooks() {
  select('infoLink').classList.remove('pure-menu-selected')
  select('infoLink').children[0].removeAttribute('aria-current')
  select('booksLink').classList.add('pure-menu-selected')
  select('booksLink').children[0].setAttribute('aria-current', 'page')
  toggleClass(['books', 'sorting-menu'], 'hidden', false)
  toggleClass(['info'], 'hidden', true)
  deactivateMenu()
}

/**
 * Functions related to books sorting
 */

function sortBy(attribute) {
  [...select('books').children]
    .sort((a,b) => a.getAttribute(attribute) > b.getAttribute(attribute) ? 1 : -1)
    .forEach(node => select('books').appendChild(node))
}

function sortByChrono() {
  sortBy('data-chrono')
  select('sorting').textContent = 'Ordre chronologique'
  select('sorting').setAttribute('href', '#livres?sorting=chrono')
  toggleClass(['sorting-date', 'sorting-latest'], 'pure-menu-selected', false)
  toggleClass(['sorting-chrono'], 'pure-menu-selected', true)
}

function sortByDate() {
  sortBy('data-date')
  select('sorting').textContent = 'Date de publication'
  select('sorting').setAttribute('href', '#livres?sorting=date')
  toggleClass(['sorting-chrono', 'sorting-latest'], 'pure-menu-selected', false)
  toggleClass(['sorting-date'], 'pure-menu-selected', true)
}

function sortByLatest() {
  sortBy('data-latest')
  select('sorting').textContent = 'Plus récent'
  select('sorting').setAttribute('href', '#livres?sorting=latest')
  toggleClass(['sorting-chrono', 'sorting-date'], 'pure-menu-selected', false)
  toggleClass(['sorting-latest'], 'pure-menu-selected', true)
}

/**
 * Auto-executed at init, bind events related to page setup
 */
(function (window) {

  /**
   * Set up the page depending on the current URL
   */
  function setUpPage() {
    let hash = window.location.hash
    if (hash.includes('#info')) {
      showMenuInfo()
    } else if (hash.includes('#livres')) {
      showMenuBooks()
      if (hash.includes('?')) {
        let params = hash.split('?').reverse()[0]
        switch (params) {
        default:
          break
        case 'sorting=date':
          sortByDate()
          break
        case 'sorting=chrono':
          sortByChrono()
          break
        case 'sorting=latest':
          sortByLatest()
          break
        }
      }
    }
  }

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
  

}(this, this.document))

