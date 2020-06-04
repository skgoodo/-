<template>
    <div class="header">
        <i class="el-icon-s-fold" @click="label"></i>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">
                <i class="el-icon-s-home"></i>
                <span>首页</span>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                isCollapse: false
            }
        },
        methods: {
            label() {
                this.isCollapse = !this.isCollapse
                this.$store.commit("hidden", this.isCollapse)
            }
        }
    }
</script>
<style>
    .el-breadcrumb {
        display: inline-block;
        margin-left: 40px;
    }
</style>