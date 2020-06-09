<template>
  <div class="header">
    <div class="header-rotate">
      <i
        @click="label"
        :class="[rotate? 'el-icon-umpchouti zhuan':'el-icon-umpchouti buzhuan']"
      ></i>
    </div>
    <div class="header-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">
          <i class="el-icon-house">{{$t('message.home')}}</i>
        </el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item,index) in arr2" :key="index">
          <i :class="item.icon">{{item.title}}</i>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header-content">
      <i :class="[screen?'el-icon-umpsuoxiao':'el-icon-umpfangda']" @click="fullScreen"></i>
      <i class="el-icon-umpV" @click="goerror"></i>
      <el-dropdown trigger="click" class="language" @command="handleCommand">
        <span class="el-dropdown-link">
          {{languages}}
          <i class="el-icon-umpunfold el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="cn">中文简体</el-dropdown-item>
          <el-dropdown-item command="fn">中文繁体</el-dropdown-item>
          <el-dropdown-item command="en">English</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown @command="gomessage">
        <span class="el-dropdown-link">
          <span class="header-content-avatar">
            <img src="../../../assets/images/avatar.png" alt />
          </span>
          <i class="el-icon-umpunfold el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="xiaoxi">消息中心</el-dropdown-item>
          <el-dropdown-item command="tuichu">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import screenfull from "screenfull";
import {mapState} from 'vuex';
export default {
  data() {
    return {
      rotate: false,
      screen: false,
      languages: "语言",
      lang: ""
    };
  },
  methods: {
    //缩小放大导航菜单
    label() {
      this.rotate = !this.rotate;
      this.$store.commit("ChangeisCollapse");
    },
    //全屏
    fullScreen() {
      screenfull.toggle();
      this.screen = !this.screen;
    },
    //切换语言
    handleCommand(command) {
      switch (command) {
        case "cn": {
          this.lang = "cn";
          this.$i18n.locale = this.lang;
          this.languages = "语言";
          break;
        }
        case "fn": {
          this.lang = "fn";
          this.$i18n.locale = this.lang;
          this.languages = "語言";
          break;
        }
        case "en": {
          this.lang = "en";
          this.$i18n.locale = this.lang;
          this.languages = "Lang";
          break;
        }
        default:
          break;
      }
    },
    //跳转错误日志
    goerror(){
      this.$router.push("/error_logger/error_logger_page")
    },
    
    gomessage(command){
      switch(command){
        //跳转信息中心
        case "xiaoxi":{
          this.$router.push("/message/message_page")
          break
        }
        //退出登录
        case "tuichu":{
          this.$router.push("/login")
          break
        }

      }
      
    }
  },
  computed:{
    ...mapState(['arr2'])
  }
};
</script>
<style scoped>
.el-breadcrumb {
  display: inline-block;
  margin-left: 40px;
}
.el-icon-umpfangda {
  margin-right: 15px;
  font-size: 17px;
}

.el-icon-umpsuoxiao {
  margin-right: 15px;
  font-size: 17px;
}

.el-icon-umpsantiaoxian {
  font-size: 26px;
  font-weight: bold;
}

.el-dropdown.language {
  margin-right: 10px;
  margin-left: 14px;
}

.el-icon-umpV {
  font-size: 20px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-house{
  font-size: 16px;
}
.header {
  height: 65px;
}
.el-icon-s-home {
  margin-right: 10px;
}
.header-rotate {
  margin-left: 6px;
}
.header-rotate,
.header-breadcrumb {
  float: left;
}

.header-content {
  float: right;
  margin-right: 20px;
  line-height: 65px;
}

.header-content-avatar {
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.header-content-avatar > img {
  width: 32px;
  height: 32px;
  vertical-align: middle;
  margin-top: -5px;
}

.zhuan {
  transform: rotate(90deg);
  transition: all 0.5s;
}

.buzhuan {
  transition: all 0.5s;
}
</style>