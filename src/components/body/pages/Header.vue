<template>
  <div class="header">
    <div class="header-rotate">
      <i
        @click="label"
        :class="[rotate? 'el-icon-umpsantiaoxian zhuan':'el-icon-umpsantiaoxian buzhuan']"
      ></i>
    </div>
    <div class="header-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">
          <i class="el-icon-s-home"></i>
          <span>首页</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-content">
      <i class="el-icon-umpfangda"></i>
      <i class="el-icon-umpV"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rotate: false
    };
  },
  methods: {
    //缩小放大导航栏
    label() {
      this.rotate = !this.rotate;
      this.$store.commit("ChangeisCollapse");
    }
  }
};
</script>
<style scoped>
.el-breadcrumb {
  display: inline-block;
  margin-left: 40px;
}
.el-icon-umpsantiaoxian {
  font-size: 26px;
  font-weight: bold;
}
.header-rotate,
.header-breadcrumb {
  float: left;
}
.header-content {
  float: right;
  margin-right: 20px;
}
.zhuan {
  transform: rotate(90deg);
  transition: all 0.5s;
}
.buzhuan {
  transition: all 0.5s;
}
</style>