import { install } from './install';
import { HTML5History } from './history/html5';
import History from './history/base';
import { RouterOptions } from './@types/router';
import { Route } from './route';
import { Matcher } from './util/matcher';
import Location from './util/location';

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
      history.transitionTo(new Location());
    }
  }

  match(
    location: Location,
  ): Route {
    // match符合location条件的route
    return this.matcher.match(location)
  }
}
