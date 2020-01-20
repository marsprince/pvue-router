// route
import Location from "./location";
import { RouteRecord } from "./routeRecord";

export class Route {
  path: string;
  // 匹配当前route的路由记录
  matched: RouteRecord;
  // fullPath = base + query
  fullPath: string;
  params?: object;
  constructor(location: Location, record?: RouteRecord) {
    this.path = location.path || "/";
    this.matched = record;
    this.fullPath = this.path
    this.params = location.params || {}
  }
}
// the starting route that represents the initial state
export const START = new Route(new Location());
