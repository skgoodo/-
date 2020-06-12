<template>
    <div class="join">
        <div class="join-con">
            <div class="join-head">
                <p>社区</p>
            </div>
            <div class="join-body">
                <div class="join-col">
                    <img src="https://file.iviewui.com/admin-dist/img/icon-qr-qq-wechat.5d82191e.png" alt=""
                        class="group">
                    <div>
                        <p>QQ群号: 621780943</p>

                    </div>
                </div>
                <div class="join-r">
                    <div>
                        <a href="https://zhuanlan.zhihu.com/feview" target="_blank"
                            class="ivu-btn ivu-btn-default ivu-btn-large">
                            <!---->
                            <!----> <span><img
                                    src="https://file.iviewui.com/admin-dist/img/icon-social-zhihu.1dc5a4ff.svg"
                                    class="join-page-other-icon">
                                iView 知乎专栏
                            </span></a>
                        <a href="https://juejin.im/user/56fe494539b0570054f2e032" target="_blank"
                            class="ivu-btn ivu-btn-default ivu-btn-large">
                            <!---->
                            <!----> <span><img
                                    src="https://file.iviewui.com/admin-dist/img/icon-social-juejin.b034525e.svg"
                                    class="join-page-other-icon">
                                掘金
                            </span></a>
                        <a href="https://live.bilibili.com/1353202" target="_blank"
                            class="ivu-btn ivu-btn-default ivu-btn-large">
                            <!---->
                            <!----> <span><img
                                    src="https://file.iviewui.com/admin-dist/img/icon-social-bilibili.2054f5af.svg"
                                    class="join-page-other-icon">
                                活动直播间
                            </span></a>
                        <a href="https://twitter.com/iViewUI" target="_blank"
                            class="ivu-btn ivu-btn-default ivu-btn-large">
                            <!---->
                            <!----> <span><img
                                    src="https://file.iviewui.com/admin-dist/img/icon-social-twitter.5db80e81.svg"
                                    class="join-page-other-icon">
                                Twitter
                            </span></a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .join {
        padding: 20px;
    }

    .join-body::after,
    .join-con::after {
        content: "";
        display: block;
        overflow: hidden;
        visibility: hidden;
        height: 0;
        clear: both;
    }

    .join-con {
        background-color: white;
    }

    .join-head {
        border-bottom: 1px solid #e8eaec;
        padding: 14px 16px;
        line-height: 1;
    }

    .join-head p {
        display: inline-block;
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #17233d;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .join-body {
        padding: 16px;
    }

    .join-col {
        width: 41.6%;
        padding: 0 16px 0 0;
        float: left;
    }

    .join-r {
        width: 55%;

        float: right;
    }

    .group {
        width: 100%;
    }

    .join-r img {
        width: 20px;
        height: 20px;
    }

    .ivn-btn-large {
        padding: 6px 15px 6px 15px;
        font-size: 14px;
        border-radius: 4px;
        border: 1px solid transparent;
        font-weight: 400;
        text-align: center;
        white-space: nowrap;
        border-color: #dcdee2;
        text-decoration: none;
    }
</style>