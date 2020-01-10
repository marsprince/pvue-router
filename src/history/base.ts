import VueRouter from "../index";
import { Route, START } from "../route";
import Location from '../util/location';
import { runQueue } from '../util/queue';

// base history class
export default class History {
  // router构造函数
  router: VueRouter;
  // 当前的路由对象
  current: Route;
  // 下一步的路由对象
  next: Route;
  // cb，修改_route，触发组件更新
  cb: (route: Route) => void

  constructor(router: VueRouter) {
    // init
    this.router = router;
    // first route
    this.current = START;
  }

  transitionTo(location: Location, onComplete?: Function,) {
    // 获得和当前Location相匹配的route
    const route = this.router.match(location);
    this.confirmTransition(route, () => {
      this.updateRoute(route)
      // 自定义回调，比如changeState
      onComplete && onComplete(route)
    })
  }
  confirmTransition(route: Route, onComplete) {
    this.next = route
    // 这里值得学习，和KOA原理类似
    const queue = [this.router.beforeHooks]
    // run hook
    runQueue(queue, this.iterator, () => {
      onComplete(route)
    })
  }

  registerCb(cb) {
    this.cb = cb
  }

  // update component
  updateRoute(route: Route) {
    this.current = route;
    // when success
    this.cb && this.cb(route)
  }

  iterator(hook, next) {
    try {
      // all hook
      hook(this.next, this.current, (to: any) => {
        next(to)
      })
    } catch (e) {

    }
  }
}
