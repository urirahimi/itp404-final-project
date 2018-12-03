import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    createTodo(e) {
      e.preventDefault();

      // Form Validation
      if (this.dateMade === "") {
        $("#dateMadeError").text("Input cannot be empty");
      } else if (this.dueDate === "") {
        $("#dueDateError").text("Input cannot be empty");
      } else if (this.subject === "") {
        $("#subjectError").text("Input cannot be empty");
      } else if (this.message === "") {
        $("#messageError").text("Input cannot be empty");
      } else {
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
  }
});
