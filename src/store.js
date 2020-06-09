import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse:false,
    arr2:[],
    arr3:[]
  },
  getters:{
  },
  mutations: {
    ChangeisCollapse(state){
      state.isCollapse=!state.isCollapse
    },
    setBreadcrumb(state,payload){
      state.arr2=payload
    },
    getpath(state,payload){
      state.arr3=payload
    },
  },
  actions: {}
});
