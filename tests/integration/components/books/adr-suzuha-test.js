import { module, test } from 'qunit';
import { setupRenderingTest } from 'site-books-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | books/adr-suzuha', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Books::AdrSuzuha />`);
    assert.dom('h1').hasText('Suzuha');
  });
});
