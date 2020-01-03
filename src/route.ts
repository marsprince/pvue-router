// route
import Location from './util/location';
import { RouteRecord } from './util/routeRecord';

export class Route {
  path: String;
  constructor(location: Location, record?: RouteRecord) {
    this.path = location.path || "/";
  }
}
// the starting route that represents the initial state
export const START = new Route(new Location());
