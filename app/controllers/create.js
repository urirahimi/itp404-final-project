import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    createTodo(e) {
      e.preventDefault();

      let todo = this.store.createRecord("todo", {
        dateMade: this.dateMade,
        dueDate: this.dueDate,
        subject: this.subject,
        message: this.message,
        completed: this.completed
      });

      todo.save().then(() => {
        this.transitionToRoute("index");
      });
    }
  }
});
