import { select } from './generics'

const questions = [{
  id: 'size',
  label: 'Plutôt roman court ou roman plus long ?',
  choices: [{
    id: 'short',
    label: 'Plutôt court',
    score: { suzuha: 3, ede: 1, vdy: 1 }
  }, {
    id: 'long',
    label: 'Histoire qui dure',
    score: { suzuha: 1, ede: 3, vdy: 3 }
  }]
}, {
  id: 'pace',
  label: 'Quel rythme de lecture ? Êtes-vous dans l\'action ou dans la contemplation ?',
  choices: [{
    id: 'fast',
    label: 'J\'aime quand les événements s\'enchainent rapidement.',
    score: { suzuha: 3, ede: 3, vdy: 1 }
  }, {
    id: 'slow',
    label: 'Je veux m\'imprégner de l\'ambiance avec de belles descriptions',
    score: { suzuha: 1, ede: 1, vdy: 3 }
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
  let questionScore = _getQuestion().choices.find(({ id }) => {
    return id === window.selectedAnswer
  }).score
  for (let [key] of Object.entries(window.tmpScore)) {
    window.tmpScore[key] = window.score[key] + questionScore[key]
  }
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
  // It needs the question structure and the selected answer
  adrQuestionElement.setAttribute('question', JSON.stringify(_getQuestion()))
  adrQuestionElement.setAttribute('answer', window.selectedAnswer)
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
