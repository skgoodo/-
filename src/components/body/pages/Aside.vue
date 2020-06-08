<template>
  <div class="aside-l">
    <div class="logo">
      <img
        class="logo-img1"
        src="../../../assets/images/logo.jpg"
        alt
        v-show="!$store.state.isCollapse"
      />
      <img
        class="logo-img2"
        src="../../../assets/images/logo-2.jpg"
        alt
        v-show="$store.state.isCollapse"
      />
      <span></span>
    </div>
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#00152A"
      active-text-color="#fff"
      text-color="hsla(0,0%,100%,.7)"
      :collapse="$store.state.isCollapse"
      :router="true"
      unique-opened="true"
    >
      <el-menu-item index="1">
        <i class="el-icon-umpshuji2"></i>
        <span slot="title">{{$t('message.document')}}</span>
      </el-menu-item>
      <el-menu-item index="/join/join_page">
        <i class="el-icon-umpQQ"></i>
        <span slot="title">{{$t('message.group')}}</span>
      </el-menu-item>
      <el-submenu index="/components">
        <template slot="title">
          <i class="el-icon-umpzujian"></i>
          <span slot="title">{{$t('message.components')}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/components/tree_select_page">
            <i class="el-icon-umpxiala"></i>
            <span slot="title">{{$t('message.treeselector')}}</span>
          </el-menu-item>
          <el-menu-item index="/components/count_to_page">
            <i class="el-icon-umpzhexianshangsheng"></i>
            <span slot="title">{{$t('message.countto')}}</span>
          </el-menu-item>
          <el-menu-item index="/components/drag_list_page">
            <i class="el-icon-umpwuqiong"></i>
            <span slot="title">{{$t('message.draglist')}}</span>
          </el-menu-item>
          <el-menu-item index="/components/drag_drawer_page">
            <i class="el-icon-umpchouti"></i>
            <span slot="title">{{$t('message.draggabledrawer')}}</span>
          </el-menu-item>
          <el-menu-item index="/components/org_tree_page">
            <i class="el-icon-umpzuzhi"></i>
            <span slot="title">{{$t('message.orgtree')}}</span>
          </el-menu-item>
          <el-menu-item index="/components/tree_table_page">
            <i class="el-icon-umpfenxiang"></i>
            <span slot="title">{{$t('message.treetable')}}</span>
          </el-menu-item>
          <el-menu-item index="/components/cropper_page">
            <i class="el-icon-umpcaijian"></i>
            <span slot="title">{{$t('message.cropper')}}</span>
          </el-menu-item>
          <el-menu-item index="/components/tables_page">
            <i class="el-icon-umpbiaoge"></i>
            <span slot="title">{{$t('message.table')}}</span>
          </el-menu-item>
          <el-menu-item index="/components/split_pane_page">
            <i class="el-icon-umpdengyu"></i>
            <span slot="title">{{$t('message.splitpane')}}</span>
          </el-menu-item>
          <el-menu-item index="/components/markdown_page">
            <i class="el-icon-setting"></i>
            <span slot="title">{{$t('message.markdowneditor')}}</span>
          </el-menu-item>
          <el-menu-item index="/components/editor_page">
            <i class="el-icon-umpzhantie"></i>
            <span slot="title">{{$t('message.richtexteditor')}}</span>
          </el-menu-item>
          <el-menu-item index="/components/icons_page">
            <i class="el-icon-umpxiong"></i>
            <span slot="title">{{$t('message.customicon')}}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-umpshangchuanshuju"></i>
          <span slot="title">{{$t('message.update')}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/update/update_table_page">
            <i class="el-icon-umpwenjian"></i>
            <span slot="title">{{$t('message.updatecsv')}}</span>
          </el-menu-item>
          <el-menu-item index="/update/update_paste_page">
            <i class="el-icon-umpzhantie"></i>
            <span slot="title">{{$t('message.pastetabledata')}}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-umpzhuzhuangtu"></i>
          <span slot="title">{{$t('message.excel')}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/excel/upload-excel">
            <i class="el-icon-umpjiahao"></i>
            <span slot="title">{{$t('message.uploadexcel')}}</span>
          </el-menu-item>
          <el-menu-item index="/excel/export-excel">
            <i class="el-icon-umpdaochu"></i>
            <span slot="title">{{$t('message.exportexcel')}}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/tools_methods/tools_methods_page">
        <i class="el-icon-umpimage"></i>
        <span slot="title">{{$t('message.toolsmethods')}}</span>
      </el-menu-item>
      <el-menu-item index="/i18n/i18n_page">
        <i class="el-icon-umpxingqiu"></i>
        <span slot="title">{{$t('message.internationalization')}}</span>
      </el-menu-item>
      <el-menu-item index="/error_store/error_store_page">
        <i class="el-icon-umpV"></i>
        <span slot="title">{{$t('message.errorcollection')}}</span>
      </el-menu-item>
      <el-menu-item index="/directive/directive_page">
        <i class="el-icon-umpzhiling"></i>
        <span slot="title">{{$t('message.dirctive')}}</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-umpduojicaidan"></i>
          <span slot="title">{{$t('message.multilevel')}}</span>
        </template>
        <el-menu-item index="/multilevel/level_2_1">Level-2-1</el-menu-item>
        <el-submenu index="/multilevel/level_2_2">
          <span slot="title">Level-2-2</span>
          <el-menu-item index="/multilevel/level_2_2/level_2_2_1">Level-2-2-1</el-menu-item>
          <el-menu-item index="/multilevel/level_2_2/level_2_2_2">Level-2-2-1</el-menu-item>
        </el-submenu>
        <el-menu-item index="/multilevel/level_2_3">Level-2-3</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 256px;
  min-height: 400px;
  background-color: rgb(0, 21, 41);
}
.el-menu-vertical-demo {
  height: 90.7%;
  background-color: rgb(0, 21, 41);
}
.el-menu {
  border-right: 0 !important;
}
.el-menu-item {
  height: 48.8px;
  line-height: 48.8px;
}
.el-menu-item > span {
  font-size: 14px;
  color: #b3b9bf;
}
.el-menu-item [class^="el-icon-"] {
  font-size: 14px;
  color: #b3b9bf;
}
.el-submenu [class^="el-icon-"] {
  font-size: 14px;
  color: #b3b9bf;
}
.el-submenu__title {
  height: 48.8px;
  line-height: 48.8px;
}
.el-radio-group {
  display: block;
}

.aside-l {
  background-color: rgb(0, 21, 41);
  height: 100%;
}

aside.el-aside {
  text-align: left;
  line-height: 0;
}

aside.el-aside::-webkit-scrollbar {
  display: none;
}

.logo {
  height: 65px;
  text-align: center;
  line-height: 65px;
}

.logo > img {
  vertical-align: middle;
}

.logo .logo-img1 {
  width: 157px;
  height: 40px;
}

.logo .logo-img2 {
  width: 45px;
  height: 45px;
}

.logo > span {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
</style>