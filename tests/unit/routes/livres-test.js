import { module, test } from 'qunit';
import { setupTest } from 'site-books-ember/tests/helpers';

module('Unit | Route | livres', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:livres');
    assert.ok(route);
  });
});
