import styleUrl from "url:../styles/style.css"

class AdrBookLinks extends HTMLElement {
  constructor() {
    super()
    var wrapper = document.createElement('div')
    wrapper.classList.add('book-links')
    wrapper.innerHTML = ''
    if (this.getAttribute('book-link')) {
      wrapper.innerHTML += `
        <adr-shop-button
          link=${this.getAttribute('book-link')}
          title="Commander le livre (${this.getAttribute('price')}€)"
        ></adr-shop-button>
      `
    }
    if (this.getAttribute('ebook-link')) {
      wrapper.innerHTML += `
        <adr-shop-button
          link=${this.getAttribute('ebook-link')}
          title="Télécharger l'e-book (0€)"
        ></adr-shop-button>
      `
    }
    if (this.getAttribute('file')) {
      wrapper.innerHTML += `
      <adr-extract-button
        file=${this.getAttribute('file')}
      ></adr-extract-button>
      `
    }

    var shadow = this.attachShadow({mode: 'closed'})
    shadow.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">
      <link rel="stylesheet" type="text/css" href="${styleUrl}">
    `
    shadow.appendChild(wrapper)
  }
}

customElements.define('adr-book-links', AdrBookLinks)