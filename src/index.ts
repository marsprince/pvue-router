import { install } from "./install";
import { HTML5History } from "./history/html5";
import { RouterOptions } from "./@types/router";
import { Route } from "./route";
import { Matcher } from "./util/matcher";
import Location, { LocationConfig, normalizeLocation } from "./util/location";

export default class VueRouter {
  static install = install;
  history: HTML5History;
  options: any;
  matcher: Matcher;
  apps: Array<any> = [];
  // beforeEach
  beforeHooks: Array<any>;
  base: string;

  constructor(options: RouterOptions) {
    this.options = options;
    this.history = new HTML5History(this);
    // 根据传入的routes，创建matcher
    this.matcher = new Matcher(options.routes, this);
    this.base = options.base || "/";
  }

  init(app) {
    this.apps.push(app);
    const { history } = this;
    // 在这里跳走到到一个页面
    if (history instanceof HTML5History) {
      history.transitionTo(new Location());
    }
    // 注册cb，改变组件，重新渲染
    history.registerCb(this.render());
  }

  render() {
    return (route: Route) => {
      this.apps.forEach(app => {
        app._route = route;
      });
    };
  }

  match(location: Location): Route {
    // match符合location条件的route
    return this.matcher.match(location);
  }

  // all hook register, such as beforeEach...
  registerHook(list: Array<any>, fn: Function): Function {
    list.push(fn);
    return () => {
      const i = list.indexOf(fn);
      if (i > -1) list.splice(i, 1);
    };
  }

  beforeEach(fn) {
    return this.registerHook(this.beforeHooks, fn);
  }

  // push to a location
  push(rawLocation: LocationConfig) {
    const location = normalizeLocation(rawLocation);
    this.history.push(location);
  }

  go() {}
}
