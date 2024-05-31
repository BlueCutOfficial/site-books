import { module, test } from 'qunit';
import { setupRenderingTest } from 'site-books-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | form/adr-question', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('question', {
      label: 'Interesting question',
      choices: [
        {
          id: 'choice-1',
          label: 'Choice 1',
        },
        {
          id: 'choice-2',
          label: 'Choice 2',
        },
      ],
    });

    await render(hbs`<Form::AdrQuestion @question={{this.question}} />`);

    assert.dom('[data-test-label]').hasText('Interesting question');
    assert.dom('input[type="radio"][name="question"]').exists({ count: 2 });
    assert.dom('input[value="choice-1"]').exists();
    assert.dom('label[for="choice-1"]').hasText('Choice 1');
  });
});
