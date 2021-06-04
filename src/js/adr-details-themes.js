class AdrDetailsThemes extends HTMLElement {
  constructor() {
    super()
    let wrapper = document.createElement('div')

    let bookId = this.getAttribute('bookId')
    let book = window.books.find(item => item.id === bookId)

    let strList = ''
    book.keywords.forEach((bookKeyword) => {
      let keyword = window.keywords.find(item => item.id === bookKeyword)
      strList = `${strList}<li>${keyword.label}</li>`
    })    

    wrapper.innerHTML = `<ul>${strList}</ul>`

    let shadow = this.attachShadow({mode: 'closed'})
    shadow.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css">
      <link rel="stylesheet" type="text/css" href="styles/style.css">
    `
    shadow.appendChild(wrapper)
  }
}

customElements.define('adr-details-themes', AdrDetailsThemes)