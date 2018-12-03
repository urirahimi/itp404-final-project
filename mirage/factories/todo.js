import { Factory, faker } from "ember-cli-mirage";

export default Factory.extend({
  id() {
    return faker.random.uuid();
  },
  dateMade() {
    return faker.date.past();
  },
  dueDate() {
    return faker.date.future();
  },
  subject() {
    return faker.lorem.paragraph();
  },
  message() {
    return faker.lorem.paragraphs();
  },
  completed() {
    return false;
  }
});
