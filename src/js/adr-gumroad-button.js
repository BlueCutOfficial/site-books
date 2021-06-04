class AdrGumroadButton extends HTMLElement {
  constructor() {
    super();
    let wrapper = document.createElement('div');

    let gumroadLink = document.createElement('a');
    gumroadLink.setAttribute('class', 'pure-button pure-button--black download-button');
    gumroadLink.setAttribute('target', '_blank');
    gumroadLink.setAttribute('href', this.getAttribute('link'));
    wrapper.appendChild(gumroadLink);

    let gumroadImg = document.createElement('img');
    gumroadImg.setAttribute('src', 'assets/vente.png');
    gumroadImg.setAttribute('alt', `Télécharger ${this.getAttribute('title')}`);
    gumroadLink.appendChild(gumroadImg);

    let shadow = this.attachShadow({mode: 'closed'});
    shadow.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css">
      <link rel="stylesheet" type="text/css" href="styles/buttons.css">
    `;
    shadow.appendChild(wrapper);  
  }
}

customElements.define('adr-gumroad-button', AdrGumroadButton);