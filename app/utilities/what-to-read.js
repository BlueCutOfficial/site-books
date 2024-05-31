const questions = [
  {
    id: 'size',
    label: 'Plutôt roman court ou roman plus long ?',
    choices: [
      {
        id: 'short',
        label: 'Plutôt court.',
        score: { suzuha: 3, ede: 0, vdy: 0 },
      },
      {
        id: 'long',
        label: 'Histoire qui dure.',
        score: { suzuha: 0, ede: 2, vdy: 2 },
      },
      {
        id: 'no-size-preference',
        label: "C'est pas la taille qui compte.",
        score: { suzuha: 0, ede: 0, vdy: 0 },
      },
    ],
  },
  {
    id: 'pace',
    label:
      "Quel rythme de lecture recherchez-vous ? Êtes-vous dans l'action ou dans la contemplation ?",
    choices: [
      {
        id: 'fast',
        label: "J'aime quand les événements s'enchainent rapidement.",
        score: { suzuha: 3, ede: 3, vdy: 1 },
      },
      {
        id: 'slow',
        label: "Je veux m'imprégner de l'ambiance avec de belles descriptions.",
        score: { suzuha: 1, ede: 2, vdy: 3 },
      },
      {
        id: 'middle',
        label: "Tout est dans l'équilibre.",
        score: { suzuha: 1, ede: 3, vdy: 2 },
      },
    ],
  },
  {
    id: 'time',
    label: 'Quel temps de narration préférez-vous ?',
    choices: [
      {
        id: 'present',
        label: 'Présent',
        score: { suzuha: 3, ede: 3, vdy: 0 },
      },
      {
        id: 'past',
        label: 'Passé',
        score: { suzuha: 0, ede: 0, vdy: 3 },
      },
      {
        id: 'no-time-preference',
        label: "Aucune importance, tant que le style m'emporte.",
        score: { suzuha: 0, ede: 0, vdy: 0 },
      },
    ],
  },
  {
    id: 'affinity',
    label:
      'Y a-t-il un élément du cercle de la magie qui vous inspire particulièrement ?',
    choices: [
      {
        id: 'water',
        label: 'Eau',
        score: { suzuha: 3, ede: 2, vdy: 0 },
      },
      {
        id: 'light',
        label: 'Lumière',
        score: { suzuha: 0, ede: 3, vdy: 3 },
      },
      {
        id: 'darkness',
        label: 'Ombre',
        score: { suzuha: 0, ede: 3, vdy: 0 },
      },
    ],
  },
  {
    id: 'theme',
    label: 'Parmi les thématiques suivantes, laquelle vous parle le plus ?',
    choices: [
      {
        id: 'feminism',
        label: 'Féminisme',
        score: { suzuha: 3, ede: 1, vdy: 1 },
      },
      {
        id: 'journey',
        label: 'Voyage',
        score: { suzuha: 1, ede: 3, vdy: 1 },
      },
      {
        id: 'culture-shock',
        label: 'Choc des cultures',
        score: { suzuha: 1, ede: 2, vdy: 3 },
      },
    ],
  },
  {
    id: 'character',
    label: 'Quel genre de personnage avez-vous envie de suivre ?',
    choices: [
      {
        id: 'heros',
        label:
          'Une héroïne dans la pure tradition, gentille, courageuse et travailleuse.',
        score: { suzuha: 3, ede: 0, vdy: 0 },
      },
      {
        id: 'dark-man',
        label: 'Un jeune homme qui a ses défauts et un lourd passé.',
        score: { suzuha: 0, ede: 1, vdy: 3 },
      },
      {
        id: 'duo',
        label:
          'Et pourquoi pas deux personnages dont les chemins vont se croiser ?',
        score: { suzuha: 0, ede: 3, vdy: 0 },
      },
    ],
  },
  {
    id: 'pet',
    label: 'Le compagnon idéal du rôdeur qui est en vous ?',
    choices: [
      {
        id: 'squirrel',
        label: 'Un écureuil',
        score: { suzuha: 0, ede: 3, vdy: 0 },
      },
      {
        id: 'dragon-tiger',
        label: 'Un GROS félin',
        score: { suzuha: 3, ede: 0, vdy: 0 },
      },
      {
        id: 'no-animal',
        label: 'Je préfère les arbres aux animaux.',
        score: { suzuha: 0, ede: 0, vdy: 3 },
      },
    ],
  },
];

// Set up the list of questions in a random order, init score
function setupQuestions() {
  window.score = { suzuha: 0, ede: 0, vdy: 0 };
  window.tmpScore = { suzuha: 0, ede: 0, vdy: 0 };
  window.questions = questions.sort(() => Math.random() - 0.5);
}

// Return the list of question, randomize it first
export function getQuestions() {
  if (!window.areQuestionsReady) {
    setupQuestions();
    window.areQuestionsReady = true;
  }
  return window.questions;
}

/*
 * Update the temporay score "window.tmpScore".
 * It is the sum of the actual score and the current question score.
 * It should be updated each time the selected answer changes.
 */
export function computeTmpScore(currentQuestion, answer) {
  // Compute the temporary score from actual score and current question
  let questionScore = currentQuestion.choices.find(
    ({ id }) => id === answer,
  ).score;
  for (let [key] of Object.entries(window.tmpScore)) {
    window.tmpScore[key] = window.score[key] + questionScore[key];
  }
  return JSON.stringify(window.tmpScore);
}

// The tmp score becomes the current final score
export function validateScore() {
  Object.assign(window.score, { ...window.tmpScore });
}
