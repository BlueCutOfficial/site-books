import styleUrl from "url:../styles/style.css";
import utipImg from "url:../assets/utip.svg";

class AdrButtonIcon extends HTMLElement {
  constructor() {
    super()
    var wrapper = document.createElement('div')
    let imageUrl = utipImg 
    wrapper.innerHTML = `
      <a class="pure-button pure-button--black primary-button"
        target="_blank"
        rel="noopener noreferrer"
        href="${this.getAttribute('link')}"
      >
        <div class="inline">
          <img alt="${this.getAttribute('imgalt')}"
            src="${imageUrl}"
            width="25px" 
            height="25px"
          />
        </div>
        <div class="inline vertical-center">
          <p>${this.getAttribute('content')}</p>
        </div>
      </a>
    `
    var shadow = this.attachShadow({mode: 'closed'})
    shadow.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">
      <link rel="stylesheet" type="text/css" href="${styleUrl}">
    `
    shadow.appendChild(wrapper)
  }

  async getImage(url) {
    return import(`url:../assets/${url}`)
  }

}

customElements.define('adr-button-icon', AdrButtonIcon)