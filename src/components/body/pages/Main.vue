<template>
    <div class="main">
        <div class="main-content">
            <div class="main-content-text">
                <div class="main-top">
                    <div>
                        <i class="el-icon-user"></i>
                        <div class="xinzeng">
                            <span class="num">803</span>
                            <br>
                            <span>新增用户</span>
                        </div>
                    </div>
                    <div>
                        <i class="el-icon-help"></i>
                        <div class="xinzeng">
                            <span class="num">232</span>
                            <br>
                            <span>累计点击</span>
                        </div>
                    </div>
                    <div>
                        <i class="el-icon-umpwenhao"></i>
                        <div class="xinzeng">
                            <span class="num">142</span>
                            <br>
                            <span>新增问答</span>
                        </div>
                    </div>
                    <div>
                        <i class="el-icon-umpfenxiang"></i>
                        <div class="xinzeng">
                            <span class="num">657</span>
                            <br>
                            <span>分享统计</span>
                        </div>
                    </div>
                    <div>
                        <i class="el-icon-umpmobile-interact"></i>
                        <div class="xinzeng">
                            <span class="num">12</span>
                            <br>
                            <span>新增互动</span>
                        </div>
                    </div>
                    <div>
                        <i class="el-icon-umpditucopy"></i>
                        <div class="xinzeng">
                            <span class="num">13</span>
                            <br>
                            <span>新增页面</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div :style="{width: '600px', height: '350px'}" ref="onechart"></div>
                    <div :style="{width: '500px', height: '350px'}" ref="twochart"></div>
                    <div :style="{width: '1100px', height: '400px'}" ref="threechart"></div>
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
                        text: '用户访问来源',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{a} <br/>{b} : {c} ({d}%)'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                    },
                    series: [
                        {
                            name: 'series0',
                            type: 'pie',
                            radius: '55%',
                            center: ['50%', '60%'],
                            data: [
                                { value: 335, name: '直接访问' },
                                { value: 310, name: '邮件营销' },
                                { value: 234, name: '联盟广告' },
                                { value: 135, name: '视频广告' },
                                { value: 1548, name: '搜索引擎' }
                            ],
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                },
                option1: {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(220, 220, 220, 0.8)'
                        }
                    }]
                },
                option3: {
                    title: {
                        text: '堆叠区域图'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                   
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '视频广告',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name: '直接访问',
                            type: 'line',
                            stack: '总量',
                            areaStyle: {},
                            data: [320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name: '搜索引擎',
                            type: 'line',
                            stack: '总量',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top'
                                }
                            },
                            areaStyle: {},
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                }
            }
        },
        methods: {
            pie() {
                let oneChart = this.$echarts.init(this.$refs.onechart)
                oneChart.setOption(this.option)
            },
            bar() {
                let twoChart = this.$echarts.init(this.$refs.twochart)
                twoChart.setOption(this.option1)
            },
            line(){
                let threeChart=this.$echarts.init(this.$refs.threechart)
                threeChart.setOption(this.option3)
            }
        },
        mounted() {
            this.pie();
            this.bar();
            this.line();
        }

    }
</script>
<style>
    .main {
        width: 100%;
        height: 93.7%;
    }
    .main-top::after {
        content: "";
        display: block;
        overflow:hidden;
        visibility:hidden;
        height: 0;
        clear: both;
    }
    .main-top>div {
        float: left;
        width: 160px;
        height: 110px;
        padding: 0 10px 10px 10px;
        text-align: center;

    }

    .main-top div i {
        font-size: 36px;
        display: inline-block;
        width: 55px;
        height: 110px;
        margin-top: -10px;
        vertical-align: middle;
        background-color: skyblue;
    }

    .xinzeng {
        display: inline-block;
        width: 100px;
        vertical-align: middle;
        background-color: #fff;
    }

    .num {
        font-size: 50px;
    }

    .main-content {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        background-color: rgb(245, 247, 249);
    }

    .main-content-text {
        margin: 20px;
        overflow: hidden;
    }
</style>