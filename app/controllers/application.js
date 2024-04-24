import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
  @tracked isActive = false;

  @action
  deactivateMenu() {
    this.isActive = false;
  }

  @action
  toggleMenu() {
    this.isActive = !this.isActive;
  }
}
