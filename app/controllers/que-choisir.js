import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import {
  computeTmpScore,
  getQuestions,
  validateScore,
} from '../utilities/what-to-read';

export default class QueChoisirController extends Controller {
  @tracked currentIndex = 0;
  @tracked currentScore;

  get questions() {
    return getQuestions();
  }

  get currentQuestion() {
    return this.currentIndex < this.questions.length
      ? this.questions[this.currentIndex]
      : undefined;
  }

  get currentQuestionNumber() {
    return this.currentIndex + 1;
  }

  get isLastQuestion() {
    return this.currentIndex + 1 === this.questions.length;
  }

  @action showNext() {
    validateScore();
    this.currentIndex++;
  }

  @action updateScore(answer) {
    this.currentScore = computeTmpScore(this.currentQuestion, answer);
  }
}
