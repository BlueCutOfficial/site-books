/**
 * Update sorting parameter
 * Change window location hash via href to trigger page set up
 */
function setSorting(param) {
  sortingParam = `sorting=${param}`
  sortingLink = `sorting-${param}`
  select(sortingLink).setAttribute('href', getURL())
}

/**
 * Update details parameter
 * Change window location hash via href to trigger page set up
 */
function setDetails(param) {
  detailsParam = `details=${param}`
  detailsLink = `details-${param}`
  select(detailsLink).setAttribute('href', getURL())
}

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
      var strParams = hash.split('?').reverse()[0]
      var params = strParams.split('&') || strParams
      params.forEach((param) => {
        switch (param) {
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
        case 'details=pitch':
          displayPitch()
          break
        case 'details=tech':
          displayTech()
          break
        case 'details=theme':
          displayTheme()
          break
        }
      })
    }
  }
}