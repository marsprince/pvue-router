import VueRouter from "../index";
import { Route, START } from "../route";
import { Location } from "../@types/router";

// base history class
export default class History {
  // router构造函数
  router: VueRouter;
  // 当前的路由对象
  current: Route;

  constructor(router: VueRouter) {
    // init
    this.router = router;
    // first route
    this.current = START;
  }

  transitionTo(location: Location) {
    // 获得和当前Location相匹配的route
    const route = this.router.match(location, this.current);
  }
}
