// 传入构造函数的options
export interface RouterOptions {
  routes?: Array<RouteConfig>;
  base?: string
}
// routes
export interface RouteConfig {
  path: string;
  component?: any;
  components?: any;
}
export declare class VueRouter {
  constructor(options?: RouterOptions);
}

export interface Iinstall {
  (Vue: any): void;
  installed: boolean;
}
