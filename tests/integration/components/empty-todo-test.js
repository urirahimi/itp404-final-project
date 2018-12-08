import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { visit } from "@ember/test-helpers";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | empty-todo", function(hooks) {
  setupRenderingTest(hooks);

  test("Testing to see if the conditional rendering works", async function(assert) {
    this.set("completed", true);

    await render(hbs`<EmptyTodo @completed={{true}} />`);
    // await visit(`/`);
    assert.dom('[data-test="subject"]').exists({ count: 1 });
  });

  test("Testing to see if the conditional rendering works (with false)", async function(assert) {
    this.set("completed", false);

    await render(hbs`<EmptyTodo @completed={{false}}  />`);
    // await visit(`/`);
    assert.dom('[data-test="subject"]').exists({ count: 1 });
  });
});
