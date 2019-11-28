import { install } from './install';
import { HTML5History } from './history/html5';
import History from './history/base';
import { RawLocation, RouterOptions } from './@types/router';
import { Route } from './route';
import { Matcher } from './matcher';

export default class VueRouter {
  static install = install;
  history: History;
  options: any;
  matcher: Matcher;

  constructor(options: RouterOptions) {
    this.options = options;
    this.history = new HTML5History(this);
    // 根据传入的routes，创建matcher
    this.matcher = new Matcher(options.routes, this);
  }

  init() {
    const { history } = this;
    // 在这里跳走
    if (history instanceof HTML5History) {
      history.transitionTo(history.getCurrentLocation());
    }
  }

  match(
    location: RawLocation,
  ): Route {
    // match符合location条件的route

  }
}
