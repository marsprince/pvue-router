import Vue from "vue/dist/vue";
import VueRouter from "../src";
Vue.use(VueRouter);

const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };
const App = {
  template: '<div id="app"><router-view></router-view></div>'
};

const routes = [
  { name: "foo", path: "/foo", component: Foo },
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
