import styleUrl from "url:../styles/style.css";

const position1 = '0px'
const position2 = '50px'
const position3 = '100px'

class AdrResultList extends HTMLElement {

  static get observedAttributes() {
    return ['score']
  }

  attributeChangedCallback(_, __, newValue) {
    let score = JSON.parse(newValue)
    let results = []
    // We need to transform the score dictionary into an array...
    for (let [key, value] of Object.entries(score)) {
      results.push({
        id: key,
        value
      })
    }
    // ...in order to sort this array by score
    results = results.sort((a, b) => b.value - a.value)

    // Then for each book, apply margin-top depending on its index in results
    this.bookListing.forEach((bookItem) => {
      let position = this.bookPosition(results, bookItem.id)
      let marginValue = position1 
      switch(position) {
        case 2:
          marginValue = position2
          break;
        case 3:
          marginValue = position3
          break
      }
      bookItem.element.style['margin-top'] = marginValue
    })
    
  }

  bookPosition(results, bookId) {
    // Find the element corresponding to the bookId in the results array
    let resultItem = results.find(({ id }) => id === bookId)
    // Then return the index of this element + 1 to get its position
    return results.indexOf(resultItem) + 1
  }

  constructor() {
    super()
    this.wrapper = document.createElement('div')
    this.wrapper.classList.add('result-list')

    this.bookListing = [
      { 
        id: 'suzuha', 
        element: this.createBookItem('1. Suzuha')
      },
      { 
        id: 'ede', 
        element:this.createBookItem('2. L\'Enfant des Esprits') 
      },
      { 
        id: 'vdy', 
        element:this.createBookItem('3. Le Voeu de Yoko')
      }
    ]

    this.bookListing.forEach((bookItem) => {
      this.wrapper.appendChild(bookItem.element)
    })

    var shadow = this.attachShadow({mode: 'closed'})
    shadow.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css">
      <link rel="stylesheet" type="text/css" href="${styleUrl}">
    `
    shadow.appendChild(this.wrapper)
  }

  createBookItem(innerHTML) {
    let bookItem = document.createElement('p')
    bookItem.classList.add('result-item')
    bookItem.innerHTML = innerHTML
    return bookItem
  }
}

customElements.define('adr-result-list', AdrResultList)