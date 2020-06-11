<template>
  <div class="main">
    <div class="main-content">
      <el-backtop target=".main-content" :bottom="50" :visibility-height="50">
        <div class="dingbu">
          <i class="el-icon-top"></i>
        </div>
      </el-backtop>
      <div class="main-content-text">
        <div class="main-top">
          <div class="main-top-num">
            <div class>
              <div class="main-top-l">
                <i class="el-icon-user"></i>
              </div>
              <div class="main-top-r">
                <p class="main-top-size1">803</p>
                <p class="main-top-size2">新增用户</p>
              </div>
            </div>
            <div class>
              <div class="main-top-l">
                <i class="el-icon-user"></i>
              </div>
              <div class="main-top-r">
                <p class="main-top-size1">803</p>
                <p class="main-top-size2">新增用户</p>
              </div>
            </div>
            <div class>
              <div class="main-top-l">
                <i class="el-icon-user"></i>
              </div>
              <div class="main-top-r">
                <p class="main-top-size1">803</p>
                <p class="main-top-size2">新增用户</p>
              </div>
            </div>
            <div class>
              <div class="main-top-l">
                <i class="el-icon-user"></i>
              </div>
              <div class="main-top-r">
                <p class="main-top-size1">803</p>
                <p class="main-top-size2">新增用户</p>
              </div>
            </div>
            <div class>
              <div class="main-top-l">
                <i class="el-icon-user"></i>
              </div>
              <div class="main-top-r">
                <p class="main-top-size1">803</p>
                <p class="main-top-size2">新增用户</p>
              </div>
            </div>
            <div class>
              <div class="main-top-l">
                <i class="el-icon-user"></i>
              </div>
              <div class="main-top-r">
                <p class="main-top-size1">803</p>
                <p class="main-top-size2">新增用户</p>
              </div>
            </div>
          </div>
        </div>
        <div class="main-top-con">
          <div class="pie">
            <div :style="{width: '347px', height: '300px'}" ref="onechart"></div>
          </div>
          <div class="bar">
            <div :style="{width: '747px', height: '300px'}" ref="twochart"></div>
          </div>
        </div>
        <div class="line">
          <div :style="{width: '1200px', height: '375px'}" ref="threechart"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        option: {
          title: {
            text: "用户访问来源",
            left: "center"
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: "vertical",
            left: "left",
            data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
          },
          series: [
            {
              name: "series0",
              type: "pie",
              radius: "55%",
              center: ["50%", "60%"],
              data: [
                { value: 335, name: "直接访问", itemStyle: { color: "#2d8cf0" } },
                { value: 310, name: "邮件营销", itemStyle: { color: "#19be6b" } },
                { value: 234, name: "联盟广告", itemStyle: { color: "#ff9900" } },
                { value: 135, name: "视频广告", itemStyle: { color: "#e46cbb" } },
                { value: 1548, name: "搜索引擎", itemStyle: { color: "#9a66e4" } }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)"
                }
              }
            }
          ]
        },
        option1: {
          title: {
            text: "每周用户活跃量",
            left: "center"
          },
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            splitLine:{show:true}
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: [12000, 34000, 26000, 13000, 24000, 2000, 2000],
              type: "bar",
              itemStyle: {
                normal: {
                  color: "#2d8cf0"
                }
              }
            }
          ]
        },
        option3: {
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#6a7985"
              }
            }
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
            }
          ],
          yAxis: [
            {
              type: "value",
              min: 0,
              max: 2100,
              splitNumber: 7
            }
          ],
          series: [
            {
              name: "运营商/网络服务",
              type: "line",
              stack: "总量",
              areaStyle: {
                normal: {
                  color: "#74afd2"
                }
              },
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: "银行/证券",
              type: "line",
              stack: "总量",
              areaStyle: {
                normal: {
                  color: "#57c1ff"
                }
              },
              data: [257, 358, 278, 234, 290, 330, 310]
            },
            {
              name: "游戏/视频",
              type: "line",
              stack: "总量",
              areaStyle: {
                normal: {
                  color: "#545cc1"
                }
              },
              data: [379, 268, 354, 269, 310, 478, 358]
            },
            {
              name: "餐饮/外卖",
              type: "line",
              stack: "总量",
              areaStyle: {
                normal: {
                  color: "#7d52c1"
                }
              },
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: "快递/电商",
              type: "line",
              stack: "总量",
              label: {
                normal: {
                  show: true
                }
              },
              areaStyle: {
                normal: {
                  color: "#74afd2"
                }
              },
              data: [820, 645, 546, 745, 872, 624, 258]
            }
          ]
        }
      };
    },
    methods: {
      //饼图
      pie() {
        let oneChart = this.$echarts.init(this.$refs.onechart);
        oneChart.setOption(this.option);
      },
      //柱状图
      bar() {
        let twoChart = this.$echarts.init(this.$refs.twochart);
        twoChart.setOption(this.option1);
      },
      //折线图
      line() {
        let threeChart = this.$echarts.init(this.$refs.threechart);
        threeChart.setOption(this.option3);
      },
    },
    created() {
     
    },
    mounted() {
      this.pie();
      this.bar();
      this.line();
    }
  };
</script>
<style>
  .main {
    width: 100%;
    height: 93.7%;
  }

  .main-top::after,
  .main-top-con::after {
    content: "";
    display: block;
    overflow: hidden;
    visibility: hidden;
    height: 0;
    clear: both;
  }

  .main-top-num {
    display: flex;
    justify-content: space-between;
    /* flex-wrap:wrap; */
  }

  .main-top-num>div {
    width: 250px;
    height: 110px;
    border-radius: 4px;
    margin: 0 10px 10px 10px;
  }

  .main-top-num>div:nth-child(1) {
    margin-left: 0;
  }

  .main-content {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background-color: rgb(245, 247, 249);
  }

  .main-top-l {
    float: left;
    width: 36%;
    font-size: 28px;
    color: white;
    line-height: 110px;
    text-align: center;
    background-color: #2d8cf0;
  }

  .main-top-r {
    float: left;
    width: 64%;
    height: 110px;
    text-align: center;
    background-color: white;
    border-bottom: 1px solid rgb(222, 224, 226);
  }

  .main-top-size1 {
    font-size: 50px;
    height: 75px;
    padding-top: 10px;
  }

  .main-top-size2 {
    font-size: 14px;
    height: 20px;
  }

  .main-content-text {
    margin: 20px;
    overflow: hidden;
  }

  .pie {
    float: left;
    width: 32%;
    margin: 10px 20px 10px 0;
    background-color: white;
  }

  .pie>div {
    margin-left: 20px;
    margin-top: 20px;
  }

  .bar {
    float: left;
    width: 65.5%;
    margin-top: 10px;
    background-color: white;
  }

  .bar>div {
    margin-top: 20px;
    margin-left: 20px;
  }

  .dingbu {
    height: 100%;
    width: 100%;
    background-color: rgb(0, 21, 42);
    box-shadow: 0 0 6px rgba(0, 0, 0, .12);
    text-align: center;
    line-height: 40px;
    color: white;
    font-size: 20px;
    font-weight: bolder;
  }

  .line {
    width: 99%;
    margin-top: 10px;
    background-color: white;
  }
</style>