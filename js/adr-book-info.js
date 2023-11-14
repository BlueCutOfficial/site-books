import styleUrl from "url:../styles/style.css"

class AdrBookInfo extends HTMLElement {
  constructor() {
    super()
    var wrapper = document.createElement('div')
    wrapper.classList.add('book-info')
    wrapper.classList.add('padding--medium')
    wrapper.innerHTML = `
      <slot name="feedback"></slot>
    `

    if (this.getAttribute('shownav')) {
      wrapper.innerHTML += `
        <div class="centered">
          <button class="pure-button pure-button--black" type="button"><</button>
          <button class="pure-button pure-button--black" type="button">></button>
        </div>
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

customElements.define('adr-book-info', AdrBookInfo)