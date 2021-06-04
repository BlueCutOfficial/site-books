/**
 * Elements already found by id
 */
var selectors = {}

/**
 * First part of window.location.hash
 */
var baseURL = 'livres'

/**
 * Query param related to book sorting
 */
var sortingParam = 'sorting=latest'

/**
 * Query param related to book details
 */
var detailsParam = 'details=pitch'

/**
 * Books main informations
 */
var books = [
  {
    id: 'suzuha',
    label: 'Suzuha',
    keywords: ['short', 'present', 'fast', 'water', 'friendship', 'feminism', 'fight', 'academician']
  },
  {
    id: 'enfantdesesprits',
    label: 'L\'Enfant des Esprits',
    keywords: ['long', 'present', 'fast', 'water', 'darkness', 'friendship', 'journey', 'fight']
  },
  {
    id: 'levoeudeyoko',
    label: 'Le Voeu de Yoko',
    keywords: ['long', 'past', 'slow', 'life', 'friendship', 'romance']
  }
]

/**
 * Books keywords
 */
var keywords = [
  {
    id: 'short',
    label: 'Court (moins de 10h de lecture)'
  },
  {
    id: 'long',
    label: 'Assez long (10h à 20h de lecture)'
  },
  {
    id: 'present',
    label: 'Narration au présent'
  },
  {
    id: 'past',
    label: 'Narration au passé'
  },
  {
    id: 'fast',
    label: 'Rythme rapide'
  },
  {
    id: 'slow',
    label: 'Rythme calme'
  },
  {
    id: 'water',
    label: 'Magie de l\'eau'
  },
  {
    id: 'fire',
    label: 'Magie du feu'
  },
  {
    id: 'wind',
    label: 'Magie du vent'
  },
  {
    id: 'earth',
    label: 'Magie de la terre'
  },
  {
    id: 'lightning',
    label: 'Magie de la foudre'
  },
  {
    id: 'life',
    label: 'Magie de la vie'
  },
  {
    id: 'light',
    label: 'Magie de la lumière'
  },
  {
    id: 'darkness',
    label: 'Magie de l\'Ombre'
  },
  {
    id: 'friendship',
    label: 'Amitié'
  },
  {
    id: 'feminism',
    label: 'Féminisme'
  },
  {
    id: 'romance',
    label: 'Romance'
  },
  {
    id: 'journey',
    label: 'Voyage'
  },
  {
    id: 'fight',
    label: 'Combat'
  },
  {
    id: 'academician',
    label: 'Académicien(nes)'
  }
]