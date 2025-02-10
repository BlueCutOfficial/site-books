import EmberRouter from '@embroider/router';
import config from 'site-books-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('livres');
  this.route('info');
  this.route('series');
  this.route('que-choisir');
  this.route('ede-gamma-lecture');
});
