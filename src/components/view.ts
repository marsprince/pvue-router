// 函数式组件，没有生命周期和响应式
export default {
  functional: true,
  render(_c, functionalRenderContext) {
    const { props, children, parent, data } = functionalRenderContext;
  }
};
