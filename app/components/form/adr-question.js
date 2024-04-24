import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class FormAdrQuestionComponent extends Component {
  @action selectAnswer(event) {
    this.args.onSelectAnswer(event.target.value);
  }
}
