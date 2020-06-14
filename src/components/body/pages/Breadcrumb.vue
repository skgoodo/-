<template>
  <div class="breadcrumb">
    <el-button icon="el-icon-arrow-left" class="btn-con-l" plain @click="hualeft"></el-button>
    <div class="breadcrumb-content" ref="yidong">
      <div class="breadcrumb-center">
        <span class="breadcrumb-a" @click="gohome">
          <span :class="[$store.state.active==='/home/'?yuan:buyuan]"></span>
          <span style="font-size: 14px;">首页</span>
        </span>
        <span class="breadcrumb-a" v-for="(item,index) in arr3" :key="index">
          <span :class="[$store.state.active===item.path?yuan:buyuan]"></span>
          <span @click="toroute(item)" style="font-size: 14px;">{{item.title}}</span>
          <i class="el-icon-close" @click="closewindow(item.path)"></i>
        </span>
      </div>
    </div>
    <el-button icon="el-icon-arrow-right" class="btn-con-r" plain @click="huaright"></el-button>
    <el-dropdown @command="closeall">
      <span class="el-dropdown-link">
        <i class="el-icon-umpcuowu"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        <el-dropdown-item command="other">关闭其他</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      active: "",
      yuan: "breadcrumb-yuan",
      buyuan: "breadcrumb-buyuan"
    };
  },
  mounted() {
    this.$refs.yidong.addEventListener("mousewheel", this.wheel);
  },
  methods: {
    //返回首页
    gohome() {
      this.$router.push("/home");
    },
    //切换指定窗口
    toroute(item) {
      this.$router.push(item.path);
      this.active = item.title;
    },
    //关闭指定窗口
    closewindow(path) {
      var index = 0;
      // console.log(this.arr3)
      for (var i in this.arr3) {
        if (this.arr3[i].path == path) {
          index = i - 1;
          break;
        }
      }
      if (index == -1) {
        this.$router.push("/home");
      } else {
        this.$router.push(this.arr3[index].path);
      }
      this.$store.commit("closewindow", path);
    },
    //关闭所有或其他窗口
    closeall(command) {
      switch (command) {
        case "all": {
          this.$store.commit("closeall");
          this.$router.push("/home");
        }
        case "other": {
          this.$store.commit("closeother", this.$route.path);
        }
      }
    },
    //滚轮滑动
    wheel(e) {
      var scroll_width = 100;
      if (e.wheelDelta > 0) {
        this.$refs.yidong.scrollLeft -= scroll_width;
      } else {
        this.$refs.yidong.scrollLeft += scroll_width;
      }
    },
    //向左滑动
    hualeft() {
      var scroll_width = 100;
      this.$refs.yidong.scrollLeft -= scroll_width;
    },
    //向右滑动
    huaright() {
      var scroll_width = 100;
      this.$refs.yidong.scrollLeft += scroll_width;
    }
  },
  computed: {
    ...mapState(["arr3"])
  }
};
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
  border: 1px solid #dcdfe6;
  cursor: pointer;
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

.el-icon-close {
  margin-left: 5px;
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
.breadcrumb-center {
  padding: 5px 4px 0;
  display: inline-block;
  height: 37px;
  overflow: auto;
}
.breadcrumb-content {
  overflow: hidden;
  white-space: nowrap;
  position: absolute;
  left: 28px;
  right: 61px;
  bottom: 0;
  top: 0;
  background-color: rgb(240, 240, 240);
  box-shadow: inset 0 0 3px 2px hsla(0, 0%, 39.2%, 0.1);
}
</style>