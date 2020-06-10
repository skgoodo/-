import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path:"/login",
      component:()=>import("@/components/body/Login.vue")
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
          meta:{title:'QQ群',icon:"el-icon-umpQQ"},
        }
      ]
    },
    {
      path: "/components",
      component: () => import("@/components/body/pages/Index.vue"),
      meta:{title:'组件',icon:"el-icon-umpzujian"},
      children: [
        {
          path: "tree_select_page",
          component: () => import("@/components/body/pages/component/tree_select_page"),
          meta:{title:'树状下拉选择器',icon:"el-icon-umpxiala"},
        },
        {
          path: "count_to_page",
          component: () => import("@/components/body/pages/component/count_to_page"),
          meta:{title:"数字渐变",icon:"el-icon-umpzhexianshangsheng"},
        },
        {
          path: "drag_list_page",
          component: () => import("@/components/body/pages/component/drag_list_page"),
          meta:{title:'拖拽列表',icon:"el-icon-umpwuqiong"},
        },
        {
          path: "drag_drawer_page",
          component: () => import("@/components/body/pages/component/drag_drawer_page"),
          meta:{title:'可抽动抽屉',icon:"el-icon-umpchouti"},
        },
        {
          path: "org_tree_page",
          component: () => import("@/components/body/pages/component/org_tree_page"),
          meta:{title:'组织结构树',icon:"el-icon-umpzuzhi"},
        },
        {
          path: "tree_table_page",
          component: () => import("@/components/body/pages/component/tree_table_page"),
          meta:{title:'树状表格',icon:"el-icon-umpfenxiang"},
        },
        {
          path: "cropper_page",
          component: () => import("@/components/body/pages/component/cropper_page"),
          meta:{title:'图片裁剪',icon:"el-icon-umpcaijian"},
        },
        {
          path: "tables_page",
          component: () => import("@/components/body/pages/component/tables_page"),
          meta:{title:'多功能表格',icon:"el-icon-umpbiaoge"},
        },
        {
          path: "split_pane_page",
          component: () => import("@/components/body/pages/component/split_pane_page"),
          meta:{title:'分割窗口',icon:"el-icon-umpdengyu"},
        },
        {
          path: "markdown_page",
          component: () => import("@/components/body/pages/component/markdown_page"),
          meta:{title:'Markdown编辑器',icon:"el-icon-setting"},
        },
        {
          path: "editor_page",
          component: () => import("@/components/body/pages/component/editor_page"),
          meta:{title:'富文本编辑器',icon:"el-icon-umpzhantie"},
        },
        {
          path: "icons_page",
          component: () => import("@/components/body/pages/component/icons_page"),
          meta:{title:'自定义图标',icon:"el-icon-umpxiong"},
        },
      ]
    },
    {
      path: "/update",
      component: () => import("@/components/body/pages/Index.vue"),
      meta:{title:'上传数据',icon:"el-icon-umpshangchuanshuju"},
      children: [
        {
          path: "update_table_page",
          component: () => import("@/components/body/pages/update/update_table_page.vue"),
          meta:{title:'上传CSV文件',icon:"el-icon-umpwenjian"},
        },
        {
          path: "update_paste_page",
          component: () => import("@/components/body/pages/update/update_paste_page.vue"),
          meta:{title:'粘贴表格数据',icon:"el-icon-umpzhantie"},
        },
      ]
    },
    {
      path: "/excel",
      component: () => import("@/components/body/pages/Index.vue"),
      meta:{title:'Excel',icon:"el-icon-umpzhuzhuangtu"},
      children: [
        {
          path: "upload-excel",
          component: () => import("@/components/body/pages/excel/upload-excel.vue"),
          meta:{title:'上传excel',icon:"el-icon-umpjiahao"},
        },
        {
          path: "export-excel",
          component: () => import("@/components/body/pages/excel/export-excel.vue"),
          meta:{title:'导出excel',icon:"el-icon-umpdaochu"},
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
          meta:{title:'工具函数',icon:"el-icon-umpimage"},
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
          meta:{title:'i18n-多语言',icon:"el-icon-umpxingqiu"},
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
          meta:{title:'错误收集',icon:"el-icon-umpV"},
        },
      ]
    },
    {
      path: "/directive",
      component: () => import("@/components/body/pages/Index.vue"),
      children: [
        {
          path: "directive_page",
          component: () => import("@/components/body/pages/directive/directive_page.vue"),
          meta:{title:'指令',icon:"el-icon-umpzhiling"},
        }
      ]
    },
    {
      path: "/multilevel",
      component: () => import("@/components/body/pages/Index.vue"),
      meta:{title:'多级菜单',icon:"el-icon-umpduojicaidan"},
      children: [
        {
          path: "level_2_1",
          component: () => import("@/components/body/pages/multilevel/level_2_1.vue"),
          meta:{title:'level_2_1',icon:""},
        },
        {
          path: "level_2_2/level_2_2_1",
          component: () => import("@/components/body/pages/multilevel/level_2_2_1.vue"),
          meta:{title:'level_2_2/level_2_2_1',icon:""},
        },
        {
          path: "level_2_2/level_2_2_2",
          component: () => import("@/components/body/pages/multilevel/level_2_2_2.vue"),
          meta:{title:'level_2_2/level_2_2_2',icon:""},
        },
        {
          path: "level_2_3",
          component: () => import("@/components/body/pages/multilevel/level_2_3.vue"),
          meta:{title:'level_2_3',icon:""},
        }
      ]
    },
    {
      path: "/error_logger",
      component: () => import("@/components/body/pages/Index.vue"),
      children: [
        {
          path: "error_logger_page",
          component: () => import("@/components/body/pages/error_logger/error_logger_page.vue"),
          meta:{title:'错误日志',icon:"el-icon-umpV"},
        }
      ]
    },
    {
      path: "/message",
      component: () => import("@/components/body/pages/Index.vue"),
      children: [
        {
          path: "message_page",
          component: () => import("@/components/body/pages/message/message_page.vue"),
          meta:{title:'消息中心',icon:"el-icon-message-solid"},
        }
      ]
    },
  ]
});
