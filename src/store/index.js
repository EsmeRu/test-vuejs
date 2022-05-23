import { createStore } from "vuex";

export default createStore({
  state: {
    formData: [],
  },
  mutations: {
    updateFormData(state, info) {
      state.formData.push(info);
    },
  },
  actions: {
    actionUpdateFormData({ commit }, info) {
      commit("updateFormData", info);
    },
  },
  modules: {},
});
