class AdrDetailsTech extends HTMLElement {
  constructor() {
    super()
    let wrapper = document.createElement('div')

    let strStats = `Environ ${this.getAttribute('nbWords')} mots, ${this.getAttribute('nbPages')} pages, ${this.getAttribute('readingTime')} de lecture`
    let strEpub = `EPUB : ISBN ${this.getAttribute('isbnEpub')}`
    let strMobi = `MOBI : ISBN ${this.getAttribute('isbnMobi')}`
    let strPdf = `PDF : ISBN ${this.getAttribute('isbnPdf')}`
    let strPublishingDate = `Date de publication : ${this.getAttribute('publishingDate')}`
    let strLastUpdate = `Dernière mise à jour : ${this.getAttribute('lastUpdate')}`

    wrapper.innerHTML = `
      <p>Ce roman est téléchargeable gratuitement et ne contient aucun DRM.</p>
      <p>${strStats}</p>
      <ul>
        <li>${strEpub}</li>
        <li>${strMobi}</li>
        <li>${strPdf}</li>
      </ul>
      <p>${strPublishingDate}</p>
      <p>${strLastUpdate}</p>
    `

    let shadow = this.attachShadow({mode: 'closed'})
    shadow.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css">
      <link rel="stylesheet" type="text/css" href="styles/style.css">
    `
    shadow.appendChild(wrapper)
  }
}

customElements.define('adr-details-tech', AdrDetailsTech)