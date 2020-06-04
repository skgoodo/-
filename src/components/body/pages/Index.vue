<template>
  <div class="home">
    <el-container>
      <el-aside width="">
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <Breadcrumb></Breadcrumb>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Header from "@/components/body/pages/Header.vue";
import Aside from "@/components/body/pages/Aside.vue";
import Breadcrumb from "@/components/body/pages/Breadcrumb.vue";
export default {
  components: {
    Header,
    Aside,
    Breadcrumb
  }
};
</script>
<style>
.el-header {
  background-color: #fff;
  color: #333;
  line-height: 65px;
  height: 65px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
element.style{
  height: 50px;
}
</style>