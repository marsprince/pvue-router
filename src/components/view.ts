// 函数式组件，没有生命周期和响应式,所有的东西都由第二个对象提供
export default {
  functional: true,
  render(_c, functionalRenderContext) {
    const { props, children, parent, data } = functionalRenderContext;
    const h = parent.$createElement;
    // 关键是确定组件
    // _router.history.current
    const route = parent.$route;
    const cache = parent._routerViewCache || (parent._routerViewCache = {});
    const matched = route.matched;
    const component = cache[name] = matched.components[name];
    return h(component, data, children);
  },
};
