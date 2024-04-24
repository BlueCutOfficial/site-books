import { module, test } from 'qunit';
import { setupRenderingTest } from 'site-books-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | form/adr-result-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Form::AdrResultList />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Form::AdrResultList>
        template block text
      </Form::AdrResultList>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
