<template>
    <div class="aside-l">
        <div class="logo">
            <img class="logo-img1" src="../../../assets/images/logo.jpg" alt="" v-show="!$store.state.isCollapse">
            <img class="logo-img2" src="../../../assets/images/logo-2.jpg" alt="" v-show="$store.state.isCollapse">
            <span></span>
        </div>
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#00152A"
            active-text-color="#fff" text-color="hsla(0,0%,100%,.7)" :collapse="$store.state.isCollapse">
            <el-menu-item index="1">
                <i class="el-icon-reading"></i>
                <span slot="title">文档</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-setting"></i>
                <span slot="title">QQ群</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">组件</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="1-1">
                        <i class="el-icon-setting"></i>
                        <span slot="title">树状下拉选择器</span>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">数字渐变</span>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">拖拽列表</span>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">可抽动抽屉</span>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">组织结构树</span>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">树状表格</span>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">图片裁剪</span>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">多功能表格</span>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">分割窗口</span>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">Markdown编辑器</span>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">富文本编辑器</span>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">自定义图标</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">上传数据</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="2-1">
                        <i class="el-icon-setting"></i>
                        <span slot="title">上传CSV文件</span>
                    </el-menu-item>
                    <el-menu-item index="2-2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">粘贴表格数据</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">Excel</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">上传excel</span>
                    </el-menu-item>
                    <el-menu-item index="3-2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导出excel</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="1">
                <i class="el-icon-reading"></i>
                <span slot="title">工具函数</span>
            </el-menu-item>
            <el-menu-item index="1">
                <i class="el-icon-reading"></i>
                <span slot="title">i18n-多语言</span>
            </el-menu-item>
            <el-menu-item index="1">
                <i class="el-icon-reading"></i>
                <span slot="title">错误收集</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-reading"></i>
                <span slot="title">指令</span>
            </el-menu-item>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                    <el-menu-item index="4-1">Level-2-1</el-menu-item>  
                <el-submenu index="4-4">
                    <span slot="title">Level-2-2</span>
                    <el-menu-item index="4-4-1">Level-2-2-1</el-menu-item>
                    <el-menu-item index="4-4-1">Level-2-2-1</el-menu-item>
                </el-submenu>
                <el-menu-item index="4-1">Level-2-3</el-menu-item> 
            </el-submenu>
        </el-menu>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                // isCollapse: this.$store.state.isCollapse
            }
        }
    }
</script>
<style>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 260px;
        min-height: 400px;
        background-color: rgb(0, 21, 41);

    }
    .el-menu-vertical-demo{
        height: 90.7%;
        background-color: rgb(0, 21, 41);
    }
    .el-menu {
        border: none;
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

    .logo>img {
        vertical-align: middle
    }

    .logo .logo-img1 {
        width: 150px;
        height: 40px;
    }

    .logo .logo-img2 {
        width: 45px;
        height: 45px;
    }

    .logo>span {
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }
</style>