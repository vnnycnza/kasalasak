import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import VueEllipseProgress from "vue-ellipse-progress";

import "./assets/styles/index.css";

Vue.config.productionTip = false;

Vue.use(VueEllipseProgress);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
