import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    deleteTodo(todo) {
      let confirmDelete = window.confirm("Are you sure you want to delete?");
      if (confirmDelete) {
        todo.destroyRecord();
        this.transitionToRoute("index");
      }
    }
  }
});
