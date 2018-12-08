import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | empty-todo", function(hooks) {
  setupRenderingTest(hooks);

  test("Testing to see if the conditional rendering works", async function(assert) {
    this.set("completed", true);

    await render(hbs`<EmptyTodo @completed={{true}} data-test="subject" />`);

    assert.dom('data-test="subject"').hasText("Yo do not have any completed TODOs");
  });

  test("Testing to see if the conditional rendering works (with false)", async function(assert) {
    this.set("completed", false);

    await render(hbs`<EmptyTodo @completed={{false}} data-test="subject" />`);

    assert.dom('data-test="subject"').hasText("Yo do not have any TODOs");
  });
});
