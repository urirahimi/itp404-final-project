import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | star-button", function(hooks) {
  setupRenderingTest(hooks);

  // test("the star is filled when starred is true", async function(assert) {
  //   await render(hbs`
  //   <StarButton
  //   data-test="starredIcon"
  //    @starred={{true}}
  //     />
  //   `);

  //   assert.dom('[data-test="starredIcon"]').exists({ count: 1 });
  // });

  // test("the star is empty when starred is false", async function(assert) {
  //   await render(hbs`
  //   <StarButton
  //   data-test="unstarredIcon"
  //   @starred={{false}}
  //  />
  //   `);

  //   assert.dom('[data-test="unstarredIcon"]').exists({ count: 1 });
  // });
});
