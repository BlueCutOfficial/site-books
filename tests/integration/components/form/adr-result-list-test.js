import { module, test } from 'qunit';
import { setupRenderingTest } from 'site-books-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | form/adr-result-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<Form::AdrResultList />`);
    assert.dom('#result-suzuha').hasText('1. Suzuha');
  });
});
