import { module, test } from 'qunit';
import { setupTest } from 'site-books-ember/tests/helpers';

module('Unit | Controller | que-choisir', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:que-choisir');
    assert.ok(controller);
  });
});
