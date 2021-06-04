/**
 * Auto-executed at init, bind events related to page setup
 */
(function (window, document) {

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
  

}(this, this.document));

