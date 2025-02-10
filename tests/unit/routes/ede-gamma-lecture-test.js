import { module, test } from 'qunit';
import { setupTest } from 'site-books-ember/tests/helpers';

module('Unit | Route | ede-gamma-lecture', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:ede-gamma-lecture');
    assert.ok(route);
  });
});
