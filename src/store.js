import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse: false,
    arr2: [],
    arr3: JSON.parse(sessionStorage.getItem("daohang")|| '[]'),
    active: sessionStorage.getItem("active")||'/home/',
    // avtivehome:sessionStorage.getItem("activehome")
  },
  getters: {
  },
  mutations: {
    ChangeisCollapse(state) {
      state.isCollapse = !state.isCollapse
    },
    setBreadcrumb(state, payload) {
      state.arr2 = payload
    },
    //路由路径监测
    getpath(state, payload) {
      state.active = payload.path
      if (payload.path !== "/home/") {
        state.activehome = false
      } else {
        state.activehome = true
      }
      if (JSON.stringify(state.arr3).indexOf(JSON.stringify(payload)) == -1) {

        if (payload.path !== "/home/") {
          state.arr3.push(payload)
        }
      }
      sessionStorage.setItem("daohang", JSON.stringify(state.arr3))
      sessionStorage.setItem("active", payload.path)
    },
    closewindow(state, payload) {
      var index = 0
      for (var i in state.arr3) {
        if (state.arr3[i].path == payload) {
          index = i
          break
        }
      }
      state.arr3.splice(index, 1)
      sessionStorage.setItem("daohang", JSON.stringify(state.arr3))
    },
    closeall(state) {
      state.arr3 = []
      sessionStorage.removeItem("daohang")
    },
    closeother(state, payload) {
      var arr = state.arr3.filter(item => item.path === payload)
      state.arr3 = arr
      sessionStorage.setItem("daohang", JSON.stringify(state.arr3))

    },
    getshouye(state,payload){
      sessionStorage.setItem("active",payload)
    }
  },
  actions: {}
});
