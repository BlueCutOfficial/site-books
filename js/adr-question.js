import styleUrl from "url:../styles/style.css";
import { updateAnswer } from './utils/what-to-read';

class AdrQuestion extends HTMLElement {

  static get observedAttributes() {
    return ['question', 'answer'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'question':
        // Remove the listeners of the old question
        if (oldValue !== null) {
          this.removeQuestionListeners()
        }
        // Get the new question structure from the stringified attribute
        let question = JSON.parse(newValue)
        // Show the new question in the DOM
        this.showQuestion(question)
        // Add the listeners of the new question
        this.addQuestionListeners()
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

  addQuestionListeners() {
    let answersElements = this.wrapper.querySelectorAll('[name]')
    answersElements.forEach((element) => {
      element.addEventListener('change', this.selectAnswer)
    })
  }

  removeQuestionListeners() {
    let answersElements = this.wrapper.querySelectorAll('[name]')
    answersElements.forEach((element) => {
      element.removeEventListener('change', this.selectAnswer)
    })
  }

  selectAnswer(event) {
    updateAnswer(event.target.value)
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

