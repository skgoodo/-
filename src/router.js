import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode:"history",
  routes: [
    {
      path: "/home",
      component: ()=>import("@/components/body/pages/Index.vue")
    }
  ]
});
