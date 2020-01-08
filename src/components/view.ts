// 函数式组件，没有生命周期和响应式,所有的一切的一切都由第二个对象提供
export default {
  name: "RouterView",
  functional: true,
  props: {
    name: {
      type: String,
      default: "default"
    }
  },
  render(_c, functionalRenderContext) {
    const { props, children, parent, data } = functionalRenderContext;
    const h = parent.$createElement;
    // 关键是从当前的route里解析出组件
    // _router.history.current
    const route = parent.$route;
    // 这个是缓存
    const cache = parent._routerViewCache || (parent._routerViewCache = {});
    const matched = route.matched;
    const name = props.name;
    const component = (cache[name] = matched.components[name]);
    return h(component, data, children);
  }
};
