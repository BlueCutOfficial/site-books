import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | on-score-change', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.setProperties({
      results: [
        { id: 'ede', value: 10 },
        { id: 'suzuha', value: 7 },
        { id: 'vdy', value: 4 },
      ],
      bookItem: {
        id: 'suzuha',
        title: 'Suzuha',
      },
    });

    await render(hbs`
      <div data-test-element {{on-score-change this.results this.bookItem}}></div>
    `);

    assert.dom('[data-test-element]').hasStyle({ 'margin-top': '50px' });
    assert.dom('[data-test-element]').hasText('2. Suzuha');
  });
});
