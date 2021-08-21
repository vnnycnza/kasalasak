import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import menu from "@/store/modules/menu";

export default new Vuex.Store({
  modules: {
    menu,
  },
});
