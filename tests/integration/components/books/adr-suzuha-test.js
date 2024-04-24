import { module, test } from 'qunit';
import { setupRenderingTest } from 'site-books-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | books/adr-suzuha', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Books::AdrSuzuha />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Books::AdrSuzuha>
        template block text
      </Books::AdrSuzuha>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
