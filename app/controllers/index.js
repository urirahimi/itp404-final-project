import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    deleteEmail(email) {
      email.destroyRecord();
    },
    toggleStarred(email, newValue) {
      email.set("starred", newValue);
      email.save();
    }
  }
});
