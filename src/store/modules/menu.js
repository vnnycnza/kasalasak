const state = {
  showMenu: false,
};

const getters = {
  getShowMenu: (state) => state.showMenu,
};

const mutations = {
  SET_SHOW_MENU(state, payload) {
    console.log("was this called", payload);
    state.showMenu = payload;
  },
};

export default {
  state,
  getters,
  actions: {},
  mutations,
};
