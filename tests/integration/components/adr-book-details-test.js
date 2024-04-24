import { module, test } from 'qunit';
import { setupRenderingTest } from 'site-books-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | adr-book-details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AdrBookDetails />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <AdrBookDetails>
        template block text
      </AdrBookDetails>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
