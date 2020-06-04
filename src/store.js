import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse:false
  },
  mutations: {
    hidden(state,payload){
      state.isCollapse=payload
    }
  },
  actions: {}
});
