import { module, test } from "qunit";
import { visit, click } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";
import moment from "moment";

module("Acceptance | todo", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("Testing the read function", async function(assert) {
    server.create("todo", {
      dateMade: moment().subtract(1, "days"),
      dueDate: moment(),
      subject: "First Todo",
      message: "Message for the first todo",
      completed: false
    });

    await visit(`/`);
    assert.dom('[data-test="emails"]').exists({ count: 1 });
  });

  test("Delete a single Todo", async function(assert) {
    const todo1 = server.create("todo", {
      dateMade: moment().subtract(1, "days"),
      dueDate: moment(),
      subject: "First Todo",
      message: "Message for the first todo",
      completed: false
    });

    const todo2 = server.create("todo", {
      dateMade: moment().subtract(1, "days"),
      dueDate: moment(),
      subject: "Second Todo",
      message: "Message for the second todo",
      completed: false
    });
    await visit(`/todos/${todo2.id}`);
    await click('[data-test="delete-button"]');
    assert.dom('[data-test="emails"]').exists({ count: 1 });
  });

  test("Testing the create function", async function(assert) {
    // Create the
    const Todo = server.create("todo", {
      dateMade: moment().subtract(1, "days"),
      dueDate: moment(),
      subject: "First Todo",
      message: "Message for the first todo",
      completed: false
    });
    await visit(`/todos/${Todo.id}`);

    assert.dom('[data-test="subject"]').hasText("First Todo");
    assert.dom('[data-test="message"]').hasText("Message for the first todo");
  });

  test("Testing the create function with 3 Todos", async function(assert) {
    // Create the
    server.create("todo", {
      dateMade: moment().subtract(1, "days"),
      dueDate: moment(),
      subject: "First Todo",
      message: "Message for the first todo",
      completed: false
    });
    server.create("todo", {
      dateMade: moment().subtract(1, "days"),
      dueDate: moment(),
      subject: "First Todo",
      message: "Message for the first todo",
      completed: false
    });
    server.create("todo", {
      dateMade: moment().subtract(1, "days"),
      dueDate: moment(),
      subject: "First Todo",
      message: "Message for the first todo",
      completed: false
    });
    await visit(`/`);
    assert.dom('[data-test="emails"]').exists({ count: 3 });
  });

  test("Testing the delete function with 3 creates and two deletes", async function(assert) {
    // Create the
    server.create("todo", {
      dateMade: moment().subtract(1, "days"),
      dueDate: moment(),
      subject: "First Todo",
      message: "Message for the first todo",
      completed: false
    });
    const Todo2 = server.create("todo", {
      dateMade: moment().subtract(1, "days"),
      dueDate: moment(),
      subject: "First Todo",
      message: "Message for the first todo",
      completed: false
    });
    const Todo3 = server.create("todo", {
      dateMade: moment().subtract(1, "days"),
      dueDate: moment(),
      subject: "First Todo",
      message: "Message for the first todo",
      completed: false
    });

    await visit(`/todos/${Todo2.id}`);
    await click('[data-test="delete-button"]');
    await visit(`/todos/${Todo3.id}`);
    await click('[data-test="delete-button"]');

    assert.dom('[data-test="emails"]').exists({ count: 1 });
  });
});
