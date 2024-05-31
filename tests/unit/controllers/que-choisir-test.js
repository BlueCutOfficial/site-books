import { module, test } from 'qunit';
import { setupTest } from 'site-books-ember/tests/helpers';
import QueChoisirRoute from 'site-books-ember/controllers/que-choisir';

module('Unit | Controller | que-choisir', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('controller:que-choisir', QueChoisirRoute);
  });

  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:que-choisir');
    assert.ok(controller);
  });
});
