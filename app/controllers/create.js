import Controller from "@ember/controller";
import moment from "moment";

export default Controller.extend({
  actions: {
    createTodo(e) {
      e.preventDefault();

      // Form Validation
      if (this.dueDate === "") {
        $("#dueDateError").text("Input cannot be empty");
      } else if (this.subject === "") {
        $("#subjectError").text("Input cannot be empty");
      } else if (this.message === "") {
        $("#messageError").text("Input cannot be empty");
      } else {
        let todo = this.store.createRecord("todo", {
          dateMade: moment().format("DD/MM/YYYY"),
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
