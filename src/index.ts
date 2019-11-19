import { install } from "./install";
import { HTML5History } from "./history/html5";
import History from "./history/base";

export default class VueRouter {
  static install = install;
  history: History;

  constructor() {
    this.history = new HTML5History(this);
  }

  init() {}
  match() {}
}
