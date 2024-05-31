import { module, test } from 'qunit';
import { setupRenderingTest } from 'site-books-ember/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | adr-article-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.setProperties({
      title: 'My great article',
      link: 'https://example.com',
      platform: 'GitHub',
    });

    await render(hbs`
      <AdrArticleButton 
        @title={{this.title}}
        @link={{this.link}}
        @platform={{this.platform}}
      />
    `);

    assert.dom('a').hasAttribute('href', this.link);
    assert.dom('[data-test-title]').includesText(this.title);
    assert.dom('[data-test-platform]').includesText(this.platform);
  });
});
