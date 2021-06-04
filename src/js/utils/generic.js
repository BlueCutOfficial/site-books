/**
 * Get element by id
 * Elements that were already requested are registered in "selectors" array for performance
 */
function select(id) {
  var selector = selectors[id]
  if (!selector) {
    selector = document.getElementById(id)
    selectors.id = selector
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
};

/**
 * Return the part of the URL correponding to location hash according to current values,
 * designed to work only when called on books page
 */
function getURL(param) {
  return `#${baseURL}?${sortingParam}&${detailsParam}`
};