<template>
  <div class="breadcrumb">
    <el-button icon="el-icon-arrow-left" class="btn-con-l" plain></el-button>
    <div class="breadcrumb-content">
      <div class="breadcrumb-center">
        <span class="breadcrumb-a" @click="gohome">
          <span class="breadcrumb-yuan"></span>
          <span>首页</span>
        </span>
        <span class="breadcrumb-a"  v-for="(item,index) in arr3" :key="index">
          <span class="breadcrumb-yuan"></span>
          <span>{{item.title}}</span>
        </span>
      </div>
    </div>
    <el-button icon="el-icon-arrow-right" class="btn-con-r" plain></el-button>
    <el-dropdown>
      <span class="el-dropdown-link">
        <i class="el-icon-umpcuowu"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>关闭所有</el-dropdown-item>
        <el-dropdown-item>关闭其他</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
  import {mapState} from "vuex"
  export default{
    data(){
      return{
        
      }
    },
    methods:{
      gohome(){
        this.$router.push("/home")
      }
    },
    computed:{
        ...mapState(["arr3"])
  }
  }
</script>
<style scoped>
  .breadcrumb {
    height: 40px;
    position: relative;
  }

  .btn-con-l {
    width: 28px;
    height: 100%;
    position: absolute;
    top: 0;
    padding: 0;
    z-index: 10;
  }

  .btn-con-r {
    width: 28px;
    height: 100%;
    position: absolute;
    right: 33px;
    top: 0;
    padding: 0;
    z-index: 10;
  }

  .el-button {
    border-radius: 0;
  }

  .el-dropdown {
    width: 32px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #fff;
    text-align: center;
    line-height: 38px;
    border: 1px solid #DCDFE6;
    cursor: pointer;
  }

  .breadcrumb-center {
    padding: 5px 4px 0;
    display: inline-block;
    height: 37px;
  }

  .breadcrumb-a {
    display: inline-block;
    padding: 0 12px;
    background-color: white;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-right: 4px;
    cursor: pointer;
    
  }

  .breadcrumb-yuan {
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: #2d8cf0;
    border-radius: 50%;
    margin-right: 10px;
  }
  .breadcrumb-buyuan {
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: #e8eaec;
    border-radius: 50%;
    margin-right: 10px;
  }

  .breadcrumb-content {
    position: absolute;
    left: 28px;
    right: 61px;
    bottom: 0;
    top: 0;
    background-color: rgb(240, 240, 240);
    box-shadow: inset 0 0 3px 2px hsla(0, 0%, 39.2%, .1);
  }
</style>