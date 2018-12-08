import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | todo', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /todo', async function(assert) {
    await visit('/todo');

    assert.equal(currentURL(), '/todo');
  });
});
