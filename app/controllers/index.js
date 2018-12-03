import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    deleteTodo(todo) {
      todo.destroyRecord();
    },
    toggleStarred(todo, newValue) {
      todo.set("starred", newValue);
      todo.save();
    }
  }
});
