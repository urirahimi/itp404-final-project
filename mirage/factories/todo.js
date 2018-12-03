import { Factory, faker } from "ember-cli-mirage";

export default Factory.extend({
  id() {
    return faker.random.uuid();
  },
  from() {
    return faker.internet.email();
  },
  to() {
    return faker.internet.email();
  },
  subject() {
    return faker.lorem.paragraph();
  },
  message() {
    return faker.lorem.paragraphs();
  },
  starred() {
    return false;
  }
});
