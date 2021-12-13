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
  return questions.sort(() => Math.random() - 0.5);
}

export function getQuestion() {
  return window.questionIndex < window.questions.length 
    ? window.questions[window.questionIndex]
    : undefined
}

export function nextQuestion() {
  let currentQuestion = getQuestion()
  if (currentQuestion) {
    window.questionIndex++
  }
  return getQuestion()
}