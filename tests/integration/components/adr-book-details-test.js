import { module, test } from 'qunit';
import { setupRenderingTest } from 'site-books-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | adr-book-details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders one slot', async function (assert) {
    await render(hbs`
      <AdrBookDetails @book="my-book" @slots={{1}}>
        <p>Book details</p>
      </AdrBookDetails>
    `);

    assert.dom('#my-book').exists();
    assert.dom('#my-book [data-test-next]').doesNotExist();
    assert.dom('#my-book [data-test-next]').doesNotExist();
    assert.dom('#my-book p').hasText('Book details');
  });

  test('it renders several slots', async function (assert) {
    await render(hbs`
      <AdrBookDetails @book="my-book" @slots={{2}}>
        <p>Book details</p>
      </AdrBookDetails>
    `);

    assert.dom('#my-book [data-test-previous]').exists();
    assert.dom('#my-book [data-test-next]').exists();
    assert.dom('#my-book p').hasText('Book details');
  });

  // TODO: write an actual test for slots switching
});
