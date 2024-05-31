import { module, test } from 'qunit';
import { setupTest } from 'site-books-ember/tests/helpers';
import LivresRoute from 'site-books-ember/controllers/livres';

module('Unit | Controller | livres', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('controller:livres', LivresRoute);
  });

  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:livres');
    assert.ok(controller);
  });
});
