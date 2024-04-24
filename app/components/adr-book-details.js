import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

import { select } from '../utilities/generics';

export default class AdrBookDetailsComponent extends Component {
  @tracked current = this.args.current;

  @action
  previous() {
    // Hide the current slot
    let wrapperId = this.args.book;
    select(`${wrapperId}-${this.current}`).classList.remove('show-from-left');
    select(`${wrapperId}-${this.current}`).classList.remove('show-from-right');
    select(`${wrapperId}-${this.current}`).classList.add('hidden');
    // Compute the new current slot and do the changes
    this.current = this.current > 0 ? this.current - 1 : this.args.slots - 1;
    select(`${wrapperId}-${this.current}`).classList.remove('hidden');
    select(`${wrapperId}-${this.current}`).classList.add('show-from-left');
  }

  @action
  next() {
    // Hide the current slot
    let wrapperId = this.args.book;
    select(`${wrapperId}-${this.current}`).classList.remove('show-from-left');
    select(`${wrapperId}-${this.current}`).classList.remove('show-from-right');
    select(`${wrapperId}-${this.current}`).classList.add('hidden');
    // Compute the new current slot and do the changes
    this.current = this.current + 1 < this.args.slots ? this.current + 1 : 0;
    select(`${wrapperId}-${this.current}`).classList.remove('hidden');
    select(`${wrapperId}-${this.current}`).classList.add('show-from-right');
  }
}
