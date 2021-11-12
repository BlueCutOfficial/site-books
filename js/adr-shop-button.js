import styleUrl from "url:../styles/style.css";
import imageUrl from "url:../assets/vente.png";

class AdrShopButton extends HTMLElement {
  constructor() {
    super()
    var wrapper = document.createElement('div')
    wrapper.innerHTML = `
      <a class="pure-button pure-button--black download-button"
        target="_blank"
        rel="noopener noreferrer"
        href="${this.getAttribute('link')}">
        <img src="${imageUrl}"
          alt="Télécharger ${this.getAttribute('title')}"
        />
      </a>
    `
    var shadow = this.attachShadow({mode: 'closed'})
    shadow.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">
      <link rel="stylesheet" type="text/css" href="${styleUrl}">
    `
    shadow.appendChild(wrapper)
  }
}

customElements.define('adr-shop-button', AdrShopButton)