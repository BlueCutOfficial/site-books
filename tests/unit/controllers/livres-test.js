import { module, test } from 'qunit';
import { setupTest } from 'site-books-ember/tests/helpers';

module('Unit | Controller | livres', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:livres');
    assert.ok(controller);
  });
});
