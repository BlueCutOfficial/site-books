import styleUrl from "url:../styles/style.css";
import booksEde from "url:../assets/books/enfant-des-esprits-extrait.pdf";

class AdrExtractButton extends HTMLElement {
  constructor() {
    super()
    var wrapper = document.createElement('div')

    var extractLink = document.createElement('a')
    extractLink.setAttribute('class', 'pure-button pure-button--black')
    extractLink.setAttribute('target', '_blank')
    extractLink.setAttribute('download', this.getAttribute('file'))
    let bookUrl = this.getBookUrl(this.getAttribute('file'))
    extractLink.setAttribute('href', bookUrl)
    extractLink.textContent = 'Lire un extrait'
    wrapper.appendChild(extractLink)

    var shadow = this.attachShadow({mode: 'closed'})
    shadow.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">
      <link rel="stylesheet" type="text/css" href="${styleUrl}">
    `
    shadow.appendChild(wrapper)
  }

  getBookUrl(fileName) {
    switch(fileName) {
    case 'enfant-des-esprits-extrait.pdf':
      return booksEde
    }
  }
}

customElements.define('adr-extract-button', AdrExtractButton)