import { module, test } from 'qunit';
import { setupRenderingTest } from 'site-books-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | adr-book-details-feedback', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('quotes', [
      {
        content: 'I loved this book!',
        author: 'Enthusiastic Reader',
      },
      {
        content: 'This book reminded me of my childhood',
        author: 'Nostalgic Reader',
      },
    ]);

    await render(hbs`
      <AdrBookDetailsFeedback
        @quotes={{this.quotes}}
      />
    `);

    assert.dom('h2').hasText('🦊📖 Les retours de lecture');
    assert.dom('[data-test-quote]').exists({ count: 2 });
  });
});
