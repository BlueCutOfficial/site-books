import styleUrl from "url:../styles/style.css";

class AdrResultList extends HTMLElement {

  static get observedAttributes() {
    return ['score']
  }

  attributeChangedCallback(_, __, newValue) {
    let score = JSON.parse(newValue)
    let results = []
    for (let [key, value] of Object.entries(score)) {
      results.push({
        id: key,
        value
      })
    }
    results = results.sort((a, b) => b.value - a.value)
    this.wrapper.innerHTML = `
      <p>1. ${this.wrapperList[results[0].id]}</p>
      <p>2. ${this.wrapperList[results[1].id]}</p>
      <p>3. ${this.wrapperList[results[2].id]}</p>
    ` 
  }

  constructor() {
    super()
    this.wrapper = document.createElement('div')

    this.wrapperList = {
      suzuha: '<span>Suzuha</span>',
      ede: '<span>L\'Enfant des Esprits</span>',
      vdy: '<span>Le Voeu de Yoko</span>'
    }

    var shadow = this.attachShadow({mode: 'closed'})
    shadow.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">
      <link rel="stylesheet" type="text/css" href="${styleUrl}">
    `
    shadow.appendChild(this.wrapper)
  }
}

customElements.define('adr-result-list', AdrResultList)