import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/body/Login";
import Home from "@/components/body/pages/Index.vue";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/home",
      component: Home
    }
  ]
});
