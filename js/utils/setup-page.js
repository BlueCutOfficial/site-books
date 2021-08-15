import { select, getURL } from './generics'
import { showMenuInfo, showMenuBooks, showMenuHome, showMenuSeries } from './sidebar'
import { sortByDate, sortByChrono, sortByLatest } from './header'

/**
 * Update sorting parameter
 * Change window location hash via href to trigger page set up
 */
export function setSorting(param) {
  window.sortingParam = `sorting=${param}`
  let sortingLink = `sorting-${param}`
  select(sortingLink).setAttribute('href', getURL())
}

/**
 * Set up the page depending on the current URL
 */
export function setUpPage() {
  let hash = window.location.hash
  if (hash.includes('#menu')) {
    // Do nothing if the burger icon is clicked
    return
  }
  if (hash.includes('#info')) {
    showMenuInfo()
  } else if (hash.includes('#livres')) {
    showMenuBooks()
    if (hash.includes('?')) {
      let strParams = hash.split('?').reverse()[0]
      let params = strParams.split('&') || strParams
      params.forEach((param) => {
        switch (param) {
        default:
          break
        case 'sorting=date':
          setSorting('date')
          sortByDate()
          break
        case 'sorting=chrono':
          setSorting('chrono')
          sortByChrono()
          break
        case 'sorting=latest':
          setSorting('latest')
          sortByLatest()
          break
        }
      })
    }
  } else if (hash.includes('#series')) {
    showMenuSeries()
  } else {
    showMenuHome()
  }
}