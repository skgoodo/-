<template>
  <div class="breadcrumb">
    <el-button icon="el-icon-arrow-left" class="btn-con-l" plain></el-button>
    <div class="breadcrumb-content"></div>
    <el-button icon="el-icon-arrow-right" class="btn-con-r" plain></el-button>
    <el-dropdown>
      <span class="el-dropdown-link">
        <i class="el-icon-umpcuowu"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item >关闭所有</el-dropdown-item>
        <el-dropdown-item >关闭其他</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
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
  .el-dropdown{
  width: 32px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  background-color:#fff;
  text-align: center;
  line-height:38px;
  border:1px solid #DCDFE6;
  cursor: pointer;
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