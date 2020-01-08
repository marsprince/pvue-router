// route
import Location from './util/location';
import { RouteRecord } from './util/routeRecord';

export class Route {
  path: String;
  // 匹配当前route的路由记录
  matched: RouteRecord;
  constructor(location: Location, record?: RouteRecord) {
    this.path = location.path || "/";
    this.matched = record
  }
}
// the starting route that represents the initial state
export const START = new Route(new Location());
