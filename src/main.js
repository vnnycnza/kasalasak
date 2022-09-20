import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";
import store from "./store";
import VueEllipseProgress from "vue-ellipse-progress";

import App from "./App.vue";
import Home from "./pages/Home.vue";
import Event from "./pages/Event.vue";
import Contact from "./pages/Contact.vue";
import Story from "./pages/Story.vue";
import Gallery from "./pages/Gallery.vue";
import Letter from "./pages/Letter.vue";
import Virtual from "./pages/Virtual.vue";
import Wedding from "./pages/Wedding.vue";

import "./assets/styles/index.css";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueEllipseProgress);
Vue.use(VueMeta);

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
    path: "/contact",
    component: Contact,
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
    path: "/virtual",
    component: Virtual,
  },
  {
    path: "/letter",
    component: Letter,
  },
  {
    path: "/wedding",
    component: Wedding,
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
