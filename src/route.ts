import { Location } from "./@types/router";

// route
export class Route {
  path: String;
  constructor(location: Location) {
    this.path = location.path || "/";
  }
}
// the starting route that represents the initial state
export const START = new Route({
  path: "/"
});
