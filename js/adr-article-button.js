import styleUrl from "url:../styles/style.css";

class AdrArticleButton extends HTMLElement {
  constructor() {
    super()
    var wrapper = document.createElement('div')
    wrapper.innerHTML = `
      <a class="pure-button pure-button--black article-button"
        target="_blank"
        rel="noopener noreferrer"
        href=${this.getAttribute('link')}>
        <div class="pure-g">
          <div class="article-button-icon pure-u-3-24">🔗</div>
          <div class="pure-u-21-24">
           <strong>${this.getAttribute('title')}</strong>
            <br />
            <span>sur ${this.getAttribute('platform')}</span>
          </div>
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
}

customElements.define('adr-article-button', AdrArticleButton)