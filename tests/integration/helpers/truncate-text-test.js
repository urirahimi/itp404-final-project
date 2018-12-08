import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Helper | truncate-text", function(hooks) {
  setupRenderingTest(hooks);

  // test("Test text is truncated to the number of characters passed in", async function(assert) {
  //   this.set("inputValue", "example");
  //   this.set("amount", 3);

  //   await render(hbs`{{truncate-text inputValue amount}}`);

  //   assert.equal(this.element.textContent.trim().length, 3);
  // });

  // test("Test text is not truncated when the length is too short", async function(assert) {
  //   this.set("inputValue", "short message < 40");
  //   this.set("amount", 40);

  //   await render(hbs`{{truncate-text inputValue amount}}`);

  //   assert.equal(this.element.textContent, "short message < 40");
  // });
});
