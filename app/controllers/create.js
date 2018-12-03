import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    createEmail(e) {
      e.preventDefault();

      let todo = this.store.createRecord("todo", {
        to: this.to,
        from: this.from,
        subject: this.subject,
        message: this.message,
        starred: this.starred
      });

      todo.save().then(() => {
        this.transitionToRoute("index");
      });
    }
  }
});
