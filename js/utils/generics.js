/**
 * Get element by id
 * Elements that were already requested are registered in "selectors" array for performance
 */
export function select(id) {
  if (!window.selectors) {
    window.selectors = {}
  }
  let selector = window.selectors[id]
  if (!selector) {
    selector = document.getElementById(id)
    window.selectors.id = selector
  }
  return selector
}

/**
 * Add or remove the class "toggleClass" on all given selectors
 */
export function toggleClass(selectors, toggleClass, isAdd) {
  selectors.forEach((id) => {
    if (isAdd) {
      select(id).classList.add(toggleClass)
    } else {
      select(id).classList.remove(toggleClass)
    }
  })
}

/**
 * Return the part of the URL corresponding to location hash according to current values,
 * designed to work only when called on books page
 */
export function getURL() {
  return `#${window.baseURL}?${window.sortingParam}`
}