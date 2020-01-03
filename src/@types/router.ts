// 传入构造函数的options
export interface RouterOptions {
  routes?: Array<RouteConfig>;
}
// routes
export interface RouteConfig {
  path: string;
  component?: any;
}
export declare class VueRouter {
  constructor(options?: RouterOptions);
}

export interface Iinstall {
  (Vue: any): void;
  installed: boolean;
}
