import { module, test } from 'qunit';
import { setupRenderingTest } from 'site-books-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | form/adr-question-number', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <Form::AdrQuestionNumber @questionIndex={{1}} @questionLength={{4}} />
    `);

    assert.dom('p').hasText('1/4');
  });
});
