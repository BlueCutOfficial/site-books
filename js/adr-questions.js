class AdrQuestions extends HTMLElement {
  constructor() {
    super();
    var wrapper = document.createElement('form');
    wrapper.setAttribute('class', 'pure-form');

    this.getQuestions().forEach((question) => {
      wrapper.appendChild(
        this.generateQuestion(question)
      );
    });

    var shadow = this.attachShadow({mode: 'closed'});
    shadow.innerHTML = `
      <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css">
      <link rel="stylesheet" type="text/css" href="styles/checkbox.css">
    `;
    shadow.appendChild(wrapper);  
  }

  generateQuestion(question) {
    var wrapper = document.createElement('div');

    var paragraphElement = document.createElement('p');
    paragraphElement.innerText = `${question.label}`;
    wrapper.appendChild(paragraphElement);

    question.choices.forEach((choice) => {
      wrapper.appendChild(
        this.generateCheckbox(choice, question.id)
      );
    });

    return wrapper;
  }

  generateCheckbox(id, name) {
    var wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'checkbox-wrapper');

    var inputElement = document.createElement('input');
    inputElement.setAttribute('id', id);
    inputElement.setAttribute('type', 'checkbox');
    inputElement.setAttribute('name', name);
    wrapper.appendChild(inputElement);

    let keyword = this.getKeywords().find(item => item.id === id)

    var labelElement = document.createElement('label');
    labelElement.setAttribute('class', 'pure-checkbox pure-checkbox--accessible');
    labelElement.setAttribute('for', id);
    labelElement.innerText = `${keyword.label}`;
    wrapper.appendChild(labelElement);

    return wrapper;
  }

  getKeywords() {
    return [
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
        label: 'Présent'
      },
      {
        id: 'past',
        label: 'Passé'
      },
      {
        id: 'fast',
        label: 'Rapide'
      },
      {
        id: 'slow',
        label: 'Calme'
      },
      {
        id: 'water',
        label: 'Eau'
      },
      {
        id: 'fire',
        label: 'Feu'
      },
      {
        id: 'wind',
        label: 'Vent'
      },
      {
        id: 'earth',
        label: 'Terre'
      },
      {
        id: 'lightning',
        label: 'Foudre'
      },
      {
        id: 'life',
        label: 'Vie'
      },
      {
        id: 'light',
        label: 'Lumière'
      },
      {
        id: 'darkness',
        label: 'Ténèbres'
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
  }

  getQuestions() {  
    return [
      {
        id: 'size',
        label: 'Plutôt roman court ou roman plus long ?',
        choices: ['short', 'long']
      },
      {
        id: 'time',
        label: 'Quel temps de narration préférez-vous ?',
        choices: ['present', 'past']
      },
      {
        id: 'pace',
        label: 'Quel rythme recherchez-vous ? Aimez-vous quand les événements s\'enchainent rapidement, ou préférez-vous un rythme plus contemplatif ?',
        choices: ['fast', 'slow']
      },
      {
        id: 'affinity',
        label: 'Y a-t-il une magie du cercle élémentaire qui vous inspire particulièrement ?',
        choices: ['water', 'fire', 'wind', 'earth', 'lightning', 'life', 'light', 'darkness']
      },
      {
        id: 'theme',
        label: 'Parmi les thématiques suivantes, lesquelles vous parlent le plus ?',
        choices: ['friendship', 'feminism', 'romance', 'journey', 'fight', 'academician']
      }
    ]
  }

  getBooks() { 
    return [
      {
        id: 'suzuha',
        label: 'Suzuha',
        keywords: ['short', 'present', 'fast', 'water', 'friendship', 'feminism', 'fight', 'academician']
      },
      {
        id: 'enfantdesesprits',
        label: 'L\'Enfant des Esprits',
        keywords: ['long', 'present', 'fast', 'water', 'light', 'darkness', 'friendship', 'romance', 'journey', 'fight']
      },
      {
        id: 'levoeudeyoko',
        label: 'Le Voeu de Yoko',
        keywords: ['long', 'past', 'slow', 'life', 'friendship', 'romance']
      }
    ]
  }

}

customElements.define('adr-questions', AdrQuestions);