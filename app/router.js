import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("todo", { path: "/todos/:id" });
  this.route("create", { path: "/todos/compose" });
  this.route("sent");
  this.route("trash");
});

export default Router;
