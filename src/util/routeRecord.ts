import { RouteConfig } from "../@types/router";

export class RouteRecord {
  path: string;
  components: any;

  constructor(routeConfig: RouteConfig) {
    this.path = routeConfig.path;
    this.components = routeConfig.components || {
      default: routeConfig.component
    };
  }
}
