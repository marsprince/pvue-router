// TODO: query support
// TODO: params support
// TODO: asyncComponents support
// TODO: base support
// TODO: name support
// TODO: props support

import Vue from "vue/dist/vue";
import VueRouter from "../src";
Vue.use(VueRouter);

const Foo = {
  template: "<div @click='onClick'>foo: {{$route.params.name}}</div>",
  methods: {
    onClick() {
      this.$router.push("/bar");
    }
  }
};
const Bar = {
  template: "<div @click='onClick'>bar: {{$route.params.name}}</div>",
  methods: {
    onClick() {
      this.$router.push("/foo");
    }
  }
};
const App = {
  template: '<div id="app"><router-view></router-view></div>'
};

const routes = [
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  render(h) {
    return h(App);
  },
  router
});
