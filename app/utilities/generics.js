/**
 * Get element by id
 * Elements that were already requested are registered in "selectors" array for performance
 */
export function select(id) {
  if (!window.selectors) {
    window.selectors = {};
  }
  let selector = window.selectors[id];
  if (!selector) {
    selector = document.getElementById(id);
    window.selectors.id = selector;
  }
  return selector;
}
