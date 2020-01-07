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
  apps: Array<any>;
  // beforeEach
  beforeHooks: Array<any>;

  constructor(options: RouterOptions) {
    this.options = options;
    this.history = new HTML5History(this);
    // 根据传入的routes，创建matcher
    this.matcher = new Matcher(options.routes, this);
  }

  init(app) {
    this.apps.push(app)
    const { history } = this;
    // 在这里跳走
    if (history instanceof HTML5History) {
      history.transitionTo(new Location());
    }
    // 注册cb
    history.registerCb((route: Route)=> {
      this.apps.forEach(app => {
        app._route = route
      })
    })
  }

  match(
    location: Location,
  ): Route {
    // match符合location条件的route
    return this.matcher.match(location)
  }

  // all hook register
  registerHook (list: Array<any>, fn: Function): Function {
    list.push(fn)
    return () => {
      const i = list.indexOf(fn)
      if (i > -1) list.splice(i, 1)
    }
  }

  beforeEach(fn) {
    return this.registerHook(this.beforeHooks, fn)
  }
}
