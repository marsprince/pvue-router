import { RouteConfig } from '../@types/router';

export class RouteRecord {
  path: string;

  constructor(routeConfig: RouteConfig) {
    this.path = routeConfig.path;
  }
}