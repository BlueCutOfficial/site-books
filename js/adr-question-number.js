import styleUrl from "url:../styles/style.css";

class AdrQuestionNumber extends HTMLElement {

  static get observedAttributes() {
    return ['question-index', 'questions-length']
  }

  attributeChangedCallback() {
    this.wrapper.innerHTML = `
      <p>
        ${this.getAttribute('question-index')}/${this.getAttribute('questions-length')}
      </p>
    `
  }

  constructor() {
    super()
    this.wrapper = document.createElement('div')
    this.wrapper.classList.add('question-number')
    var shadow = this.attachShadow({mode: 'closed'})
    shadow.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">
      <link rel="stylesheet" type="text/css" href="${styleUrl}">
    `
    shadow.appendChild(this.wrapper)
  }

}

customElements.define('adr-question-number', AdrQuestionNumber)

