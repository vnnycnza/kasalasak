import Vue from "vue";
import VueRouter from "vue-router";
import store from "./store";
import VueEllipseProgress from "vue-ellipse-progress";

import App from "./App.vue";
import Home from "./pages/Home.vue";
import Event from "./pages/Event.vue";
import Rsvp from "./pages/Rsvp.vue";
import Story from "./pages/Story.vue";
import Zoom from "./pages/Zoom.vue";
import Gallery from "./pages/Gallery.vue";

import "./assets/styles/index.css";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueEllipseProgress);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/event",
    component: Event,
  },
  {
    path: "/rsvp",
    component: Rsvp,
  },
  {
    path: "/story",
    component: Story,
  },
  {
    path: "/gallery",
    component: Gallery,
  },
  {
    path: "/zoom",
    component: Zoom,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
