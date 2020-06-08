import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/body/pages/Index.vue";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: () => import("@/components/body/pages/Index.vue"),
      children: [
        {
          path: "/",
          component: () => import("@/components/body/pages/Main.vue")
        },
      ]
    },
    {
      path: "/join",
      component: () => import("@/components/body/pages/Index.vue"),
      children: [
        {
          path: "join_page",
          component: () => import("@/components/body/pages/join/join_page.vue"),
        }
      ]
    },
    {
      path: "/components",
      component: () => import("@/components/body/pages/Index.vue"),
      children: [
        {
          path: "tree_select_page",
          component: () => import("@/components/body/pages/component/tree_select_page")
        },
        {
          path: "tree_select_page",
          component: () => import("@/components/body/pages/component/tree_select_page")
        },
        {
          path: "count_to_page",
          component: () => import("@/components/body/pages/component/count_to_page")
        },
        {
          path: "drag_list_page",
          component: () => import("@/components/body/pages/component/drag_list_page")
        },
        {
          path: "drag_drawer_page",
          component: () => import("@/components/body/pages/component/drag_drawer_page")
        },
        {
          path: "org_tree_page",
          component: () => import("@/components/body/pages/component/org_tree_page")
        },
        {
          path: "tree_table_page",
          component: () => import("@/components/body/pages/component/tree_table_page")
        },
        {
          path: "cropper_page",
          component: () => import("@/components/body/pages/component/cropper_page")
        },
        {
          path: "tables_page",
          component: () => import("@/components/body/pages/component/tables_page")
        },
        {
          path: "split_pane_page",
          component: () => import("@/components/body/pages/component/split_pane_page")
        },
        {
          path: "markdown_page",
          component: () => import("@/components/body/pages/component/markdown_page")
        },
        {
          path: "editor_page",
          component: () => import("@/components/body/pages/component/editor_page")
        },
        {
          path: "icons_page",
          component: () => import("@/components/body/pages/component/icons_page")
        },
      ]
    },
    {
      path: "/update",
      component: () => import("@/components/body/pages/Index.vue"),
      children: [
        {
          path: "update_table_page",
          component: () => import("@/components/body/pages/update/update_table_page.vue"),
        },
        {
          path: "update_paste_page",
          component: () => import("@/components/body/pages/update/update_paste_page.vue"),
        },
      ]
    },
    {
      path: "/excel",
      component: () => import("@/components/body/pages/Index.vue"),
      children: [
        {
          path: "upload-excel",
          component: () => import("@/components/body/pages/excel/upload-excel.vue"),
        },
        {
          path: "export-excel",
          component: () => import("@/components/body/pages/excel/export-excel.vue"),
        },
      ]
    },
    {
      path: "/tools_methods",
      component: () => import("@/components/body/pages/Index.vue"),
      children: [
        {
          path: "tools_methods_page",
          component: () => import("@/components/body/pages/tools_methods/tools_methods_page.vue"),
        }
      ]
    },
    {
      path: "/i18n",
      component: () => import("@/components/body/pages/Index.vue"),
      children: [
        {
          path: "i18n_page",
          component: () => import("@/components/body/pages/lang/i18n_page.vue"),
        }
      ]
    },
    {
      path: "/error_store",
      component: () => import("@/components/body/pages/Index.vue"),
      children: [
        {
          path: "error_store_page",
          component: () => import("@/components/body/pages/error_store/error_store_page.vue"),
        }
      ]
    },
    {
      path: "/directive",
      component: () => import("@/components/body/pages/Index.vue"),
      children: [
        {
          path: "directive_page",
          component: () => import("@/components/body/pages/directive/directive_page.vue"),
        }
      ]
    },
    {
      path: "/multilevel",
      component: () => import("@/components/body/pages/Index.vue"),
      children: [
        {
          path: "level_2_1",
          component: () => import("@/components/body/pages/multilevel/level_2_1.vue"),
        },
        {
          path: "level_2_2/level_2_2_1",
          component: () => import("@/components/body/pages/multilevel/level_2_2_1.vue"),
        },
        {
          path: "level_2_2/level_2_2_2",
          component: () => import("@/components/body/pages/multilevel/level_2_2_2.vue"),
        },
        {
          path: "level_2_3",
          component: () => import("@/components/body/pages/multilevel/level_2_3.vue"),
        }
      ]
    },
  ]
});
