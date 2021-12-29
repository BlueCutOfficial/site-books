import { select } from './generics'

const questions = [{
  id: 'size',
  label: 'Plutôt roman court ou roman plus long ?',
  choices: [{
    id: 'short',
    label: 'Plutôt court.',
    score: { suzuha: 3, ede: 1, vdy: 1 }
  }, {
    id: 'long',
    label: 'Histoire qui dure.',
    score: { suzuha: 1, ede: 3, vdy: 3 }
  }, {
    id: 'no-size-preference',
    label: 'C\'est pas la taille qui compte.',
    score: { suzuha: 0, ede: 0, vdy: 0 }
  }]
}, {
  id: 'pace',
  label: 'Quel rythme de lecture recherchez-vous ? Êtes-vous dans l\'action ou dans la contemplation ?',
  choices: [{
    id: 'fast',
    label: 'J\'aime quand les événements s\'enchainent rapidement.',
    score: { suzuha: 3, ede: 3, vdy: 1 }
  }, {
    id: 'slow',
    label: 'Je veux m\'imprégner de l\'ambiance avec de belles descriptions.',
    score: { suzuha: 1, ede: 2, vdy: 3 }
  }, {
    id: 'middle',
    label: 'Tout est dans l\'équilibre.',
    score: { suzuha: 1, ede: 3, vdy: 2 }
  }]
}, {
  id: 'time',
  label: 'Quel temps de narration préférez-vous ?',
  choices: [{
    id: 'present',
    label: 'Présent',
    score: { suzuha: 3, ede: 3, vdy: 0 }
  }, {
    id: 'past',
    label: 'Passé',
    score: { suzuha: 0, ede: 0, vdy: 3 }
  }, {
    id: 'no-time-preference',
    label: 'Aucune importance, tant que le style m\'emporte.',
    score: { suzuha: 0, ede: 0, vdy: 0 }
  }]
}, {
  id: 'affinity',
  label: 'Y a-t-il un élément du cercle de la magie qui vous inspire particulièrement ?',
  choices: [{
    id: 'water',
    label: 'Eau',
    score: { suzuha: 4, ede: 2, vdy: 0 }
  }, {
    id: 'light',
    label: 'Lumière',
    score: { suzuha: 0, ede: 3, vdy: 3 }
  }, {
    id: 'darkness',
    label: 'Ombre',
    score: { suzuha: 0, ede: 4, vdy: 0 }
  }]
}, {
  id: 'theme',
  label: 'Parmi les thématiques suivantes, laquelle vous parle le plus ?',
  choices: [{
    id: 'feminism',
    label: 'Féminisme',
    score: { suzuha: 4, ede: 1, vdy: 1 }
  }, {
    id: 'journey',
    label: 'Voyage',
    score: { suzuha: 2, ede: 4, vdy: 2 }
  }, {
    id: 'culture-shock',
    label: 'Choc des cultures',
    score: { suzuha: 2, ede: 2, vdy: 4 }
  }]
}, {
  id: 'character',
  label: 'Quel genre de personnage avez-vous envie de suivre ?',
  choices: [{
    id: 'heros',
    label: 'Une héroïne dans la pure tradition, gentille, courageuse et travailleuse.',
    score: { suzuha: 4, ede: 0, vdy: 0 }
  }, {
    id: 'dark-man',
    label: 'Un jeune homme qui a ses défauts et un lourd passé.',
    score: { suzuha: 0, ede: 1, vdy: 4 }
  }, {
    id: 'duo',
    label: 'Et pourquoi pas deux personnages dont les chemins vont se croiser ?',
    score: { suzuha: 0, ede: 4, vdy: 0 }
  }]
}]

export function setupQuestions() {
  // Set up the list of questions in a random order
  window.questions = questions.sort(() => Math.random() - 0.5);
  // Initialize the current question
  _showQuestion()
  // Bind the next question function to the next question button's click
  let nextQuestionButton = select('wtr-button-next')
  nextQuestionButton.addEventListener('click', _nextQuestion)
}

export function updateAnswer(value) {
  window.selectedAnswer = value 
  _computeTmpScore()
}

/*
 * Return the structure of the current question, based on "window.questionIndex"
 */
function _getQuestion() {
  return window.questionIndex < window.questions.length 
    ? window.questions[window.questionIndex]
    : undefined
}

/*
 * Update the temporay score "window.tmpScore".
 * It is the sum of the actual score and the current question score.
 * It should be updated each time the selected answer changes.
 */
function _computeTmpScore() {
  // Compute the temporary score from actual score and current question
  let questionScore = _getQuestion().choices.find(({ id }) => {
    return id === window.selectedAnswer
  }).score
  for (let [key] of Object.entries(window.tmpScore)) {
    window.tmpScore[key] = window.score[key] + questionScore[key]
  }
  // Update the result list order
  let resultListElement = select('wtr-result')
  resultListElement.setAttribute('score', JSON.stringify(window.tmpScore))
}

/*
 * Update the question component attributes to display the current question.
 */
function _showQuestion() {
  // Initialize the selected answer and the temporary score 
  window.selectedAnswer = _getQuestion().choices[0].id
  _computeTmpScore()
  // Select the question component in the DOM
  let adrQuestionElement = select('wtr-question')
  // It needs the question structure
  adrQuestionElement.setAttribute('question', JSON.stringify(_getQuestion()))
}

function _nextQuestion() {
  // Finalize current score
  Object.assign(window.score, { ...window.tmpScore })
  // Show next question
  window.questionIndex++
  if (_getQuestion()) {
    _showQuestion()
  }
  // If the last question is reached, change the button text, then hide all
  if (window.questionIndex === window.questions.length-1) {
    let nextQuestionButton = select('wtr-button-next')
    nextQuestionButton.innerHTML = 'Valider'
  } else if (window.questionIndex === window.questions.length) {
    let nextQuestionButton = select('wtr-button-next')
    nextQuestionButton.setAttribute('hidden', true)
    let adrQuestionElement = select('wtr-question')
    adrQuestionElement.setAttribute('hidden', true)
  }
}
