class AdrGumroadButton extends HTMLElement {
  constructor() {
    super();
    var wrapper = document.createElement('div');

    var gumroadLink = document.createElement('a');
    gumroadLink.setAttribute('class', 'pure-button pure-button--black download-button');
    gumroadLink.setAttribute('target', '_blank');
    gumroadLink.setAttribute('href', this.getAttribute('link'));
    wrapper.appendChild(gumroadLink);

    var gumroadImg = document.createElement('img');
    gumroadImg.setAttribute('src', 'assets/vente.png');
    gumroadImg.setAttribute('alt', `Télécharger ${this.getAttribute('title')}`);
    gumroadLink.appendChild(gumroadImg);

    var shadow = this.attachShadow({mode: 'closed'});
    shadow.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">
      <link rel="stylesheet" type="text/css" href="styles/style.css">
    `;
    shadow.appendChild(wrapper);  
  }
}

customElements.define('adr-gumroad-button', AdrGumroadButton);