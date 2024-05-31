import { module, test } from 'qunit';
import { setupTest } from 'site-books-ember/tests/helpers';
import LivresRoute from 'site-books-ember/routes/livres';

module('Unit | Route | livres', function (hooks) {
  setupTest(hooks);

  hooks.beforeEach(function () {
    this.owner.register('route:livres', LivresRoute);
  });

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:livres');
    assert.ok(route);
  });
});
