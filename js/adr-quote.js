import styleUrl from "url:../styles/style.css"

class AdrQuote extends HTMLElement {
  constructor() {
    super()
    var wrapper = document.createElement('div')
    wrapper.classList.add('quote')
    wrapper.innerHTML = `
      <q><em>${this.getAttribute('content')}</em></q>
      <span>-&nbsp;<strong>${this.getAttribute('author')}</strong></span>
    `
    var shadow = this.attachShadow({ mode: 'closed' })
    shadow.innerHTML =  `
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">
      <link rel="stylesheet" type="text/css" href="${styleUrl}">
    `
    shadow.appendChild(wrapper)
  }
}

customElements.define('adr-quote', AdrQuote)