import { module, test } from 'qunit';
import { setupTest } from 'site-books-ember/tests/helpers';
import QueChoisirRoute from 'site-books-ember/routes/que-choisir';

module('Unit | Route | que-choisir', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('route:que-choisir', QueChoisirRoute);
  });

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:que-choisir');
    assert.ok(route);
  });
});
