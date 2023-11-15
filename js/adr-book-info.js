import styleUrl from "url:../styles/style.css"
import { select } from './utils/generics';

class AdrBookInfo extends HTMLElement {

  connectedCallback() {
    if (this.slotsCount > 1) {
      // Listen to click on navigation buttons
      let previousButton = this.wrapper.querySelector(`#${this.getAttribute('id')}-previous`)
      let nextButton = this.wrapper.querySelector(`#${this.getAttribute('id')}-next`)
      previousButton.addEventListener('click', this.onPrevious)
      nextButton.addEventListener('click', this.onNext)
    }
  }

  disconnectedCallback() {
    if (this.slotsCount > 1) {
      let previousButton = this.wrapper.querySelector(`${this.getAttribute('id')}-previous`)
      let nextButton = this.wrapper.querySelector(`${this.getAttribute('id')}-next`)
      previousButton.removeEventListener('click', this.onPrevious)
      nextButton.removeEventListener('click', this.onNext)
    }
  }

  constructor() {
    super()
    // Get the slots count and set current slot to 1
    this.slotsCount = Number(this.getAttribute('slots'))
    this.currentSlot = 0
    this.blocks = []

    // Setup the wrapper
    this.wrapper = document.createElement('div')
    this.wrapper.classList.add('book-info')
    this.wrapper.classList.add('padding--medium')
    this.wrapper.innerHTML = ''

    // If there are several slots, append navigation keys
    if (this.slotsCount > 1) {
      this.wrapper.innerHTML += `
        <div class="centered">
          <button
            id="${this.getAttribute('id')}-previous"
            wrapper="${this.getAttribute('id')}"
            class="pure-button pure-button--black"
            type="button"><</button>
          <button
            id="${this.getAttribute('id')}-next"
            wrapper="${this.getAttribute('id')}"
            class="pure-button pure-button--black"
            type="button">></button>
        </div>
      `
    }

    // Append the right slots count
    for(let i = 0; i < this.slotsCount; i++) {
      this.wrapper.innerHTML += `
        <slot name="slot-${i}"></slot>
      `
    }

    var shadow = this.attachShadow({mode: 'closed'})
    shadow.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">
      <link rel="stylesheet" type="text/css" href="${styleUrl}">
    `
    shadow.appendChild(this.wrapper)
  }

  // Context is not bound, we can't use "this"
  onPrevious(event) {
    // Get the required props
    let wrapperId = event.target.getAttribute('wrapper')
    let wrapper = select(wrapperId)
    let slotsCount = Number(wrapper.getAttribute('slots'))
    let currentSlot = Number(wrapper.getAttribute('current'))
    // Hide the current slot
    select(`${wrapperId}-${currentSlot}`).classList.remove('show-from-left')
    select(`${wrapperId}-${currentSlot}`).classList.remove('show-from-right')
    select(`${wrapperId}-${currentSlot}`).classList.add('hidden')
    // Compute the new current slot and do the changes
    currentSlot = (currentSlot <= 0) ? slotsCount - 1 : currentSlot - 1
    select(`${wrapperId}-${currentSlot}`).classList.remove('hidden')
    select(`${wrapperId}-${currentSlot}`).classList.add('show-from-left')
    wrapper.setAttribute('current', currentSlot)
  }

  // Context is not bound, we can't use "this"
  onNext(event) {
    // Get the required props
    let wrapperId = event.target.getAttribute('wrapper')
    let wrapper = select(wrapperId)
    let slotsCount = Number(wrapper.getAttribute('slots'))
    let currentSlot = Number(wrapper.getAttribute('current'))
    // Hide the current slot
    select(`${wrapperId}-${currentSlot}`).classList.remove('show-from-left')
    select(`${wrapperId}-${currentSlot}`).classList.remove('show-from-right')
    select(`${wrapperId}-${currentSlot}`).classList.add('hidden')
    // Compute the new current slot and do the changes
    let plusOne = currentSlot + 1
    currentSlot = (plusOne >= slotsCount) ? 0 : plusOne
    select(`${wrapperId}-${currentSlot}`).classList.remove('hidden')
    select(`${wrapperId}-${currentSlot}`).classList.add('show-from-right')
    wrapper.setAttribute('current', currentSlot)
  }
}

customElements.define('adr-book-info', AdrBookInfo)