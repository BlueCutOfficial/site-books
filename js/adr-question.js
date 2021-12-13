import styleUrl from "url:../styles/style.css";

class AdrQuestion extends HTMLElement {
  constructor() {
    super()
    var wrapper = document.createElement('div')
    wrapper.innerHTML = `
      <div>
        <input type="radio" id="choix1" name="question" value="choix1" checked>
        <label for="huey">Choix 1</label>
      </div>
      <div>
        <input type="radio" id="choix2" name="question" value="choix2">
        <label for="dewey">Choix 2</label>
      </div>
    `
    var shadow = this.attachShadow({mode: 'closed'})
    shadow.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">
      <link rel="stylesheet" type="text/css" href="${styleUrl}">
    `
    shadow.appendChild(wrapper)
  }
}

customElements.define('adr-question', AdrQuestion)

