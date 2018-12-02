import { module, test } from "qunit";
import { visit, currentURL, click, fillIn } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import setupMirage from "ember-cli-mirage/test-support/setup-mirage";

module("Acceptance | emails", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("visiting /emails", async function(assert) {
    await visit("/");

    assert.equal(currentURL(), "/");
  });

  test("Test 2 starred, 3 unstarred emails", async function(assert) {
    await visit("/");

    assert.equal(currentURL(), "/");
  });

  test("viewing a single email ", async function(assert) {
    const email = server.create("email", {
      from: "Uri",
      to: "David",
      subject: "Sorry",
      message: "for late assignment",
      starred: false
    });

    await visit(`/emails/${email.id}`);

    assert.dom('[data-test="from"]').hasText("Uri");
    assert.dom('[data-test="to"]').hasText("David");
    assert.dom('[data-test="subject"]').hasText("Sorry");
    assert.dom('[data-test="message"]').hasText("for late assignment");
  });

  test("Creating two starred and 3 unstarred and verify they're there", async function(assert) {
    const email1 = server.create("email", {
      from: "Uri",
      to: "David",
      subject: "Sorry",
      message: "for late assignment",
      starred: true
    });

    const email2 = server.create("email", {
      from: "Uri",
      to: "David",
      subject: "Sorry",
      message: "for late assignment",
      starred: true
    });

    const email3 = server.create("email", {
      from: "Uri",
      to: "David",
      subject: "Sorry",
      message: "for late assignment",
      starred: false
    });

    const email4 = server.create("email", {
      from: "Uri",
      to: "David",
      subject: "Sorry",
      message: "for late assignment",
      starred: false
    });

    const email5 = server.create("email", {
      from: "Uri",
      to: "David",
      subject: "Sorry",
      message: "for late assignment",
      starred: false
    });
    // Visit and assert you're on the right path
    await visit("/");
    assert.equal(currentURL(), "/");

    assert.dom('[data-test="email.starred"]').exists({ count: 2 });
    assert.dom('[data-test="email.unstarred"]').exists({ count: 3 });
  });

  test("Delete a single email ", async function(assert) {
    const email1 = server.create("email", {
      from: "Uri",
      to: "David",
      subject: "Sorry",
      message: "for late assignment",
      starred: false
    });

    const email2 = server.create("email", {
      from: "Uri",
      to: "David",
      subject: "Sorry",
      message: "for late assignment",
      starred: false
    });
    await visit(`/emails/${email2.id}`);
    await click('[data-test="delete-button"]');
    assert.dom('[data-test="email.unstarred"]').exists({ count: 1 });
  });

  test("Creating a single email ", async function(assert) {
    await visit("/emails/compose");
    await fillIn("#from", "Uri");
    await fillIn("#to", "David");
    await fillIn("#subject", "Sorry");
    await fillIn("#message", "For lateness!");
    await click("#send");
    assert.dom('[data-test="email.unstarred"]').exists({ count: 1 });
    assert.equal(currentURL(), "/");
  });
});
