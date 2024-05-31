import { module, test } from 'qunit';
import { setupRenderingTest } from 'site-books-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | adr-shop-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <AdrShopButton @link="https://example.com">
        Order it
      </AdrShopButton>
    `);

    assert.dom('a').hasAttribute('href', 'https://example.com');
    assert.dom('a').hasText('Order it');
  });
});
