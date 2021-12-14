import styleUrl from "url:../styles/style.css";

class AdrQuestion extends HTMLElement {

  static get observedAttributes() {
    return ['question', 'answer'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'question':
        let question = JSON.parse(newValue)
        this.showQuestion(question)
        break;
      case 'answer':
        break;
    }
  }

  constructor() {
    super()
    this.wrapper = document.createElement('div')
    var shadow = this.attachShadow({mode: 'closed'})
    shadow.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">
      <link rel="stylesheet" type="text/css" href="${styleUrl}">
    `
    shadow.appendChild(this.wrapper)
  }

  showQuestion(question) {
    let answers = ''
    let first = true
    let checked = ' checked'
    question.choices.forEach((choice) => {
      answers += `
        <div>
          <input type="radio" id="${choice.id}" name="question" value="${choice.id}"${checked}>
          <label for="${choice.id}">${choice.label}</label>
        </div>
      `
      if (first) {
        first = false
        checked = ''
      }
    })
    this.wrapper.innerHTML = `
      <p>${question.label}</p>
      ${answers}
    `
  }
}

customElements.define('adr-question', AdrQuestion)

