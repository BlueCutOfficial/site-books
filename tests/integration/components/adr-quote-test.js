import { module, test } from 'qunit';
import { setupRenderingTest } from 'site-books-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | adr-quote', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.setProperties({
      content: 'I loved this book!',
      author: 'Enthusiastic Reader',
    });

    await render(hbs`
      <AdrQuote
        @content={{this.content}}
        @author={{this.author}}
      />
    `);

    assert
      .dom('[data-test-quote]')
      .includesText(this.content)
      .includesText(this.author);
  });
});
