import DS from "ember-data";

export default DS.Model.extend({
  dateMade: DS.attr("string"),
  dueDate: DS.attr("string"),
  subject: DS.attr("string"),
  message: DS.attr("string"),
  completed: DS.attr("boolean")
});
