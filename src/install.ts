import { Iinstall } from "./@types/router";
import View from "./components/view";

export let _Vue;
export const install: Iinstall = Vue => {
  // 记录vue
  if (install.installed && _Vue === Vue) return;

  _Vue = Vue;

  // mixin
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router !== undefined) {
        // 注册和初始化
        this._routerRoot = this;
        this._router = this.$options.router;
        // 在这里执行Init
        this._router.init(this);
        // 这里是实现重新渲染的部分
        Vue.util.defineReactive(this, "_route", this._router.history.current);
        console.log(this);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
    }
  });

  // $router and $route
  Object.defineProperty(Vue.prototype, "$router", {
    get() {
      return this._routerRoot._router;
    }
  });

  Object.defineProperty(Vue.prototype, "$route", {
    get() {
      return this._routerRoot._route;
    }
  });
  // 注册组件
  Vue.component("RouterView", View);
};
install.installed = false;
