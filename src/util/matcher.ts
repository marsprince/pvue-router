import { RouteConfig, VueRouter } from "../@types/router";
import { createRouteMap } from "./index";
import Location from "./location";
import { Route } from "./route";

// matcher 只有两个方法  match,addRoutes
export class Matcher {
  private routes: Array<RouteConfig>;
  private router: VueRouter;
  private pathList;
  private pathMap;
  private nameMap;

  constructor(routes: Array<RouteConfig>, router: VueRouter) {
    this.routes = routes;
    this.router = router;
    const { pathList, pathMap, nameMap } = createRouteMap(routes);
    this.pathList = pathList;
    this.pathMap = pathMap;
    this.nameMap = nameMap;
  }

  // raw => routeRecord
  match(location: Location): Route {
    const { pathList, pathMap } = this;
    // 格式化移出
    if (location.path) {
      location.params = {};
      // 循环所有path
      for (let i = 0; i < pathList.length; i++) {
        const path = pathList[i];
        const record = pathMap[path];
        if (this.matchRoute(record, location)) {
          return this.createRoute(record, location);
        }
      }
    }
  }

  // an function to call createRouteMap
  addRoutes(routes) {
    createRouteMap(routes, this.pathList, this.pathMap, this.nameMap);
  }

  // routeRecord => route
  private createRoute(record, location) {
    return new Route(location, record);
  }

  private matchRoute(record, location) {
    return record.path === location.path;
  }
}
