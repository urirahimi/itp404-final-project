import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    deleteEmail(email) {
      let confirmDelete = window.confirm("Are you sure you want to delete?");
      if (confirmDelete) {
        email.destroyRecord();
        this.transitionToRoute("index");
      }
    }
  }
});
