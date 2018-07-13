<template>
    <div id="newTradeChat">
        <header class="header card clear">
            <ul class="fl">
                <li class="fl">
                    <el-tooltip effect="dark" content="交易担保中" placement="right">
                        <img src="../assets/img/shield.png" alt="">
                    </el-tooltip><span>天堂硅谷金穗优选</span>
                </li>
                <li class="fl"><span>浙江天堂硅谷资产管理</span></li>
                <li class="fl"><strong>1.32亿</strong></li>
                <li class="fl"><span>50000</span></li>
                <li class="fl"><span>1.3</span></li>
                <li class="fl"><strong>5.8%</strong></li>
                <li class="fl">基金名称</li>
                <li class="fl">所属LP名称</li>
                <li class="fl">总金额</li>
                <li class="fl">数量</li>
                <li class="fl">单价</li>
                <li class="fl">预估年收益</li>
            </ul>
            <div class="fr" @click="openVideoDialog"><span>预估值：</span><strong>126万</strong></div>
        </header>
        <section class="section clear">
            <div class="left fl">
                <div class="card chart" ref="price"></div>
                <div class="card chart" ref="money"></div>
                <div class="card chart" ref="count"></div>
            </div>
            <div class="right fr">
                <div class="card">
                    <div class="steps fl">
                        <header>
                            <span>卖方LP：张世成</span>
                            <button type="button" @click="openChatDialog('LP','张世成')">洽&nbsp;&nbsp;&nbsp;谈</button>
                        </header>
                        <section>
                            <el-steps class="blue_steps" :active="4" align-center>
                                <el-step title="线上洽谈" description="2018.05.09"></el-step>
                                <el-step title="线下尽调" description="2018.05.09"></el-step>
                                <el-step title="上传尽调材料" description="2018.05.09"></el-step>
                                <el-step title="签订合同" description="2018.05.09"></el-step>
                            </el-steps>
                            <el-steps class="yellow_steps" :active="6" align-center>
                                <el-step title="线上洽谈" description="2018.05.09"></el-step>
                                <el-step title="线下洽谈" description="2018.05.09"></el-step>
                                <el-step title="线下尽调" description="2018.05.09"></el-step>
                                <el-step title="上传尽调材料" description="2018.05.09"></el-step>
                                <el-step title="签订合同" description="2018.05.09"></el-step>
                                <el-step title="银行转账" description="2018.05.09"></el-step>
                            </el-steps>
                            <el-steps class="yellow_steps" :active="6" align-center>
                                <el-step title="线上洽谈" description="2018.05.09"></el-step>
                                <el-step title="线下洽谈" description="2018.05.09"></el-step>
                                <el-step title="线下尽调" description="2018.05.09"></el-step>
                                <el-step title="上传尽调材料" description="2018.05.09"></el-step>
                                <el-step title="签订合同" description="2018.05.09"></el-step>
                                <el-step title="银行转账" description="2018.05.09"></el-step>
                            </el-steps>
                            <ul class="clear">
                                <li class="fl"><button type="button">注册</button></li>
                                <li class="fl"><img src="../assets/img/smartContract.png" alt=""></li>
                                <li class="fl"><img src="../assets/img/smartContract.png" alt=""></li>
                            </ul>
                            <ul class="clear"><li class="fl"><button type="button">融资</button></li></ul>
                            <ul class="clear"><li class="fl"><button type="button">融资</button></li></ul>
                        </section>
                    </div>
                    <div class="financing fr">
                        <h1>最新融资<span>2018.08.01 12:22:22</span></h1>
                        <img src="../assets/img/license.png" alt="">
                        <ul>
                            <li><strong>工商信息</strong></li>
                            <li>统一社会信用代码：913101180781002129</li>
                            <li>组织机构代码：078100212 </li>
                            <li>登记机关：青浦区市场监督管理局</li>
                        </ul>
                        <ul class="clear">
                            <li class="fl"><strong>哈希值：</strong><span>f224421398f0e74a0c0109057053d81423c38cd95c366170</span></li>
                            <li class="fl">业务类型：增值</li>
                            <li class="fl">增值类型：融资</li>
                            <li class="fl">交易发起方：XXXXXXXX</li>
                            <li class="fl">交易接收方：XXXXXXXXX</li>
                            <li class="fl">库存编码：2017021111</li>
                            <li class="fl">交易时间：2017-05-08 15:22</li>
                        </ul>
                    </div>
                </div>
                <div class="card">
                    <div class="steps fl">
                        <header>
                            <span>基金管理方GP:博时资本管理有限公司</span>
                            <button type="button" @click="openChatDialog('GP','博时资本管理有限公司')">洽&nbsp;&nbsp;&nbsp;谈</button>
                        </header>
                        <section>
                            <el-steps class="blue_steps" :active="4" align-center>
                                <el-step title="线上洽谈" description="2018.05.09"></el-step>
                                <el-step title="线下尽调" description="2018.05.09"></el-step>
                                <el-step title="上传尽调材料" description="2018.05.09"></el-step>
                                <el-step title="签订合同" description="2018.05.09"></el-step>
                            </el-steps>
                            <el-steps class="yellow_steps" :active="6" align-center>
                                <el-step title="线上洽谈" description="2018.05.09"></el-step>
                                <el-step title="线下洽谈" description="2018.05.09"></el-step>
                                <el-step title="线下尽调" description="2018.05.09"></el-step>
                                <el-step title="上传尽调材料" description="2018.05.09"></el-step>
                                <el-step title="签订合同" description="2018.05.09"></el-step>
                                <el-step title="银行转账" description="2018.05.09"></el-step>
                            </el-steps>
                            <el-steps class="yellow_steps" :active="6" align-center>
                                <el-step title="线上洽谈" description="2018.05.09"></el-step>
                                <el-step title="线下洽谈" description="2018.05.09"></el-step>
                                <el-step title="线下尽调" description="2018.05.09"></el-step>
                                <el-step title="上传尽调材料" description="2018.05.09"></el-step>
                                <el-step title="签订合同" description="2018.05.09"></el-step>
                                <el-step title="银行转账" description="2018.05.09"></el-step>
                            </el-steps>
                            <ul class="clear">
                                <li class="fl"><button type="button">注册</button></li>
                                <li class="fl"><img src="../assets/img/smartContract.png" alt=""></li>
                                <li class="fl"><img src="../assets/img/smartContract.png" alt=""></li>
                            </ul>
                            <ul class="clear"><li class="fl"><button type="button">融资</button></li></ul>
                            <ul class="clear"><li class="fl"><button type="button">融资</button></li></ul>
                        </section>
                    </div>
                    <div class="financing fr">
                        <h1>最新融资<span>2018.08.01 12:22:22</span></h1>
                        <img src="../assets/img/license.png" alt="">
                        <ul>
                            <li><strong>工商信息</strong></li>
                            <li>统一社会信用代码：913101180781002129</li>
                            <li>组织机构代码：078100212 </li>
                            <li>登记机关：青浦区市场监督管理局</li>
                        </ul>
                        <ul class="clear">
                            <li class="fl"><strong>哈希值：</strong><span>f224421398f0e74a0c0109057053d81423c38cd95c366170</span></li>
                            <li class="fl">业务类型：增值</li>
                            <li class="fl">增值类型：融资</li>
                            <li class="fl">交易发起方：XXXXXXXX</li>
                            <li class="fl">交易接收方：XXXXXXXXX</li>
                            <li class="fl">库存编码：2017021111</li>
                            <li class="fl">交易时间：2017-05-08 15:22</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <el-dialog
            class="chatDialog"
            :show-close="false"
            :close-on-press-escape="false"
            :append-to-body="false"
            :visible.sync="chatDialog">
            <div>
                <div v-if="dialogType === 'LP'" class="tradeBox card">
                    <span class="fl">交易数：</span>
                    <el-input class="fl" placeholder="请输入交易数" v-model="count" clearable></el-input>
                    <img class="fl" src="../assets/img/lock.png" alt="">
                    <span class="fl">单价：</span>
                    <el-input class="fl" placeholder="请输入单价" v-model="price" clearable></el-input>
                    <img class="fl" src="../assets/img/lock.png" alt="">
                    <p class="fl">总价值：<strong>{{count*price}}</strong>元</p>
                    <button class="fr" type="button" @click="openTradeDialog">交&nbsp;&nbsp;&nbsp;易</button>
                </div>
                <div class="chat card clear">
                    <div class="chatBox fl">
                        <div class="clear">
                            <div class="message fl">
                                <header>
                                    <img src="../assets/img/receiver.png" alt="">
                                    <span>{{dialogName}}</span>
                                </header>
                                <VuePerfectScrollbar class="chatRecord" v-scroll>
                                    <ul>
                                        <li class="clear" v-for="i in chatRecord">
                                            <img :class="i.isSelf ? 'fr' : 'fl'" src="../assets/img/sender.png" alt="">
                                            <div :class="i.isSelf ? 'fr' : 'fl'">
                                                <p>{{i.value}}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </VuePerfectScrollbar>
                            </div>
                            <div class="video fl">
                                <header>{{'正在和'+ dialogName +'视频中···'}}</header>
                                <section><img src="../assets/img/video.png" alt=""></section>
                                <footer><img src="../assets/img/my_video.png" alt=""></footer>
                            </div>
                        </div>
                        <div class="send">
                            <ul class="icon clear">
                                <li class="fl"><img src="../assets/img/A.png" alt=""></li>
                                <li class="fl"><img src="../assets/img/face.png" alt=""></li>
                                <li class="fl"><img src="../assets/img/shear.png" alt=""></li>
                                <li class="fl"><img src="../assets/img/icon.png" alt=""></li>
                                <li class="fl"><img src="../assets/img/file.png" alt=""></li>
                                <li class="fl"><img src="../assets/img/video_.png" alt=""></li>
                                <li class="fl"><img src="../assets/img/voice.png" alt=""></li>
                                <li class="fl"><img src="../assets/img/setting.png" alt=""></li>
                            </ul>
                            <section><el-input type="textarea" :rows="7" resize="none" placeholder="请输入内容" v-model="sendData"></el-input></section>
                            <footer><button type="button" @click="addChatRecord">发送</button></footer>
                        </div>
                    </div>
                    <div class="blockChain fr">
                        <header>沟通记录上链</header>
                        <section>
                            <ul>
                                <li>
                                    <h1>语音记录</h1>
                                    <p>2017-07-07 23:59:59</p>
                                    <p>哈希值：asdfaddgeg···</p>
                                </li>
                                <li>
                                    <h1>语音记录</h1>
                                    <p>2017-07-07 23:59:59</p>
                                    <p>哈希值：asdfaddgeg···</p>
                                </li>
                                <li>
                                    <h1>语音记录</h1>
                                    <p>2017-07-07 23:59:59</p>
                                    <p>哈希值：asdfaddgeg···</p>
                                </li>
                                <li>
                                    <h1>语音记录</h1>
                                    <p>2017-07-07 23:59:59</p>
                                    <p>哈希值：asdfaddgeg···</p>
                                </li>
                                <li>
                                    <h1>语音记录</h1>
                                    <p>2017-07-07 23:59:59</p>
                                    <p>哈希值：asdfaddgeg···</p>
                                </li>
                                <li>
                                    <h1>语音记录</h1>
                                    <p>2017-07-07 23:59:59</p>
                                    <p>哈希值：asdfaddgeg···</p>
                                </li>
                                <li>
                                    <h1>语音记录</h1>
                                    <p>2017-07-07 23:59:59</p>
                                    <p>哈希值：asdfaddgeg···</p>
                                </li>
                                <li>
                                    <h1>语音记录</h1>
                                    <p>2017-07-07 23:59:59</p>
                                    <p>哈希值：asdfaddgeg···</p>
                                </li>
                                <li>
                                    <h1>语音记录</h1>
                                    <p>2017-07-07 23:59:59</p>
                                    <p>哈希值：asdfaddgeg···</p>
                                </li>
                                <li>
                                    <h1>语音记录</h1>
                                    <p>2017-07-07 23:59:59</p>
                                    <p>哈希值：asdfaddgeg···</p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
            <TradeDialog @closeDialog="closeDialog" :tradeDialog="tradeDialog"/>
        </el-dialog>
        <el-dialog
            class="videoDialog"
            :show-close="false"
            :close-on-press-escape="false"
            :append-to-body="false"
            :before-close="handleClose"
            :visible.sync="videoDialog">
            <div>
                <h1>预估值：<span>126万</span></h1>
                <video src="../assets/mp4/demo.mp4" autoplay loop ref="videoDom"></video>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'
    import TradeDialog from '../components/TradeDialog'

    export default {
        name: "NewTradeChat",
        components: {VuePerfectScrollbar,TradeDialog},
        data() {
            return{
                sendData: '我对您公司的产品非常感兴趣!!',
                chatDialog: false,
                tradeDialog: false,
                chatRecord: [
                    {
                        isSelf: true,
                        value: '您好，想了解下您的基金情况，不知道能否抽空给我讲解下您的基金具体是干什么的，贵公司主要投资哪方面的基金，方便的话，我们还可以线下洽谈一下！'
                    },
                    {
                        isSelf: false,
                        value: '您好！'
                    },
                    {
                        isSelf: false,
                        value: '本基金主要是投资一些金融贷款项目'
                    },
                    {
                        isSelf: false,
                        value: '我先给您简单介绍一下公司情况吧'
                    }
                ],
                count: 100,
                price: 500,
                dialogType: '',
                dialogName: '',
                videoDialog: false
            }
        },
        methods: {
            priceLineChart() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.price);
                // 图表配置项
                let option = {
                    title: {
                        text: '基金最近交易单价趋势',
                        textStyle: {
                            color: '#333',
                            fontSize: 16
                        },
                        top: 10,
                        left: 10
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['基金单价'],
                        right: 10,
                        top: 10
                    },
                    grid: {
                        left: 10,
                        right: 20,
                        bottom: 10,
                        containLabel: true
                    },
                    xAxis:  {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    color: ['#fe6f67'],
                    series: [
                        {
                            name: '基金单价',
                            type: 'line',
                            data: [11, 11, 15, 13, 12, 13, 10],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'}
                                ]
                            }
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            moneyLineChart() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.money);
                // 图表配置项
                let option = {
                    title: {
                        text: '金额曲线图',
                        textStyle: {
                            color: '#333',
                            fontSize: 16
                        },
                        top: 10,
                        left: 10
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['发布总金额','成交总金额'],
                        right: 10,
                        top: 10
                    },
                    grid: {
                        left: 10,
                        right: 20,
                        bottom: 10,
                        containLabel: true
                    },
                    xAxis:  {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    color: ['#0acffe','#475dff'],
                    series: [
                        {
                            name: '发布总金额',
                            type: 'line',
                            data: [11, 11, 15, 13, 12, 13, 10],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'}
                                ]
                            }
                        },
                        {
                            name: '成交总金额',
                            type: 'line',
                            data: [1, 4, 2, 5, 3, 2, 0],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'}
                                ]
                            }
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            countLineChart() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.count);
                // 图表配置项
                let option = {
                    title: {
                        text: '数量曲线图',
                        textStyle: {
                            color: '#333',
                            fontSize: 16
                        },
                        top: 10,
                        left: 10
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['发布总数量','成交总数量'],
                        right: 10,
                        top: 10
                    },
                    grid: {
                        left: 10,
                        right: 20,
                        bottom: 10,
                        containLabel: true
                    },
                    xAxis:  {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    color: ['#e05111','#ef950e'],
                    series: [
                        {
                            name: '发布总数量',
                            type: 'line',
                            data: [11, 11, 15, 13, 12, 13, 10],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'}
                                ]
                            }
                        },
                        {
                            name: '成交总数量',
                            type: 'line',
                            data: [1, 4, 2, 5, 3, 2, 0],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'}
                                ]
                            }
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            addChatRecord() {
                this.chatRecord.push({
                    isSelf: true,
                    value: this.sendData
                });
                this.sendData = '';
            },
            openChatDialog(type,name) {
                this.chatDialog = true;
                this.dialogType = type;
                this.dialogName = name;
            },
            openTradeDialog() {
                this.tradeDialog = true;
            },
            closeDialog() {
                this.chatDialog = false;
                this.tradeDialog = false;
            },
            openVideoDialog() {
                this.videoDialog = true;
                this.$refs.videoDom.play();
            },
            handleClose() {
                this.$refs.videoDom.pause();
                this.videoDialog = false;
            }
        },
        mounted() {
            this.priceLineChart();
            this.moneyLineChart();
            this.countLineChart();
        }
    }
</script>

<style lang="scss" scoped>
    #newTradeChat{
        padding: 20px;
        .header{
            margin-bottom: 20px;
            ul{
                width: calc(100% - 260px);
                line-height: 51px;
                height: 102px;
                li{
                    text-align: center;
                    height: 51px;
                    strong{
                        font-size: 24px;
                        color: #fe6f67;
                        font-weight: normal;
                    }
                    span{
                        font-size: 24px;
                    }
                    &:nth-child(1){
                        font-size: 24px;
                        color: #d81e06;
                        img{
                            height: 40px;
                            margin-top: 5px;
                            margin-right: 10px;
                        }
                    }
                    &:nth-child(1),&:nth-child(7){
                        width: 25%;
                    }
                    &:nth-child(2),&:nth-child(8){
                        width: 25%;
                    }
                    &:nth-child(3),&:nth-child(9){
                        width: 12%;
                    }
                    &:nth-child(4),&:nth-child(10){
                        width: 13%;
                    }
                    &:nth-child(5),&:nth-child(11){
                        width: 12%;
                    }
                    &:nth-child(6),&:nth-child(12){
                        width: 13%;
                    }
                }
            }
            div{
                height: 102px;
                width: 260px;
                color: #fff;
                background-color: #fe6f67;
                line-height: 102px;
                text-align: center;
                strong{
                    font-size: 36px;
                    font-weight: normal;
                }
                span{
                    font-size: 18px;
                }
            }
        }
        .section{
            .left{
                width: 524px;
                .chart{
                    height: 266px;
                    &:nth-child(2){
                        margin: 21px 0;
                    }
                }
            }
            .right{
                width: 1335px;
                .card{
                    height: 391px;
                    padding: 10px;
                    &:last-child{
                        margin-top: 20px;
                    }
                    .steps{
                        width: 768px;
                        header{
                            height: 52px;
                            line-height: 52px;
                            font-size: 18px;
                            button{
                                width: 120px;
                                height: 36px;
                                line-height: 36px;
                                border-radius: 4px;
                                text-align: center;
                                color: #fff;
                                background: linear-gradient(to right, #0bcefe, #475dff);
                                cursor: pointer;
                                margin-left: 60px;
                            }
                        }
                        section{
                            background-color: #f9f9f9;
                            position: relative;
                            .el-steps{
                                padding-top: 22px;
                                padding-bottom: 22px;
                            }
                            ul{
                                position: absolute;
                                left: 20px;
                                li{
                                    width: 130px;
                                    height: 60px;
                                    line-height: 60px;
                                    button{
                                        width: 60px;
                                        height: 36px;
                                        line-height: 36px;
                                        border-radius: 4px;
                                        text-align: center;
                                        color: #fff;
                                        cursor: pointer;
                                    }
                                    &:first-child{
                                        margin-right: 140px;
                                    }
                                }
                                &:nth-child(4){
                                    top: 4px;
                                    li{
                                        button{
                                            background: linear-gradient(to right, #0bcefe, #475dff);
                                        }
                                    }
                                }
                                &:nth-child(5){
                                    top: 117px;
                                    li{
                                        button{
                                            background: linear-gradient(to right, #ddc096, #c39468);
                                        }
                                    }
                                }
                                &:nth-child(6){
                                    top: 230px;
                                    li{
                                        button{
                                            background: linear-gradient(to right, #ddc096, #c39468);
                                        }
                                    }
                                }
                            }
                        }
                    }
                    .financing{
                        margin-top: 52px;
                        width: 492px;
                        border: 2px solid #3c73ff;
                        border-radius: 6px;
                        padding: 0 14px;
                        position: relative;
                        h1{
                            height: 40px;
                            line-height: 40px;
                            color: #fe6f67;
                            font-size: 16px;
                        }
                        ul{
                            padding: 8px 0 8px 20px;
                            background-color: #f9f9f9;
                            margin-bottom: 10px;
                            li{
                                height: 30px;
                                line-height: 30px;
                                strong{
                                    font-size: 16px;
                                }
                            }
                            &:last-child{
                                li{
                                    width: 50%;
                                    &:nth-child(1){
                                        width: 100%;
                                    }
                                }
                            }
                        }
                        img{
                            position: absolute;
                            top: 40px;
                            right: 20px;
                        }
                    }
                }
            }
        }
        .chatDialog{
            .tradeBox{
                width: 1248px;
                height: 94px;
                line-height: 94px;
                padding: 0 20px;
                margin-bottom: 20px;
                .el-input{
                    width: 320px;
                }
                img{
                    margin: 35px 40px 35px 20px;
                }
                p{
                    height: 94px;
                    strong{
                        font-size: 24px;
                        color: #fe6f67;
                        font-weight: normal;
                        margin: 0 10px;
                    }
                }
                button{
                    width: 120px;
                    height: 40px;
                    line-height: 40px;
                    border-radius: 4px;
                    text-align: center;
                    color: #fff;
                    background: linear-gradient(to right, #0bcefe,#475dff);
                    margin-top: 27px;
                }
            }
            .chat{
                width: 1288px;
                height: 728px;
                .chatBox{
                    border: 2px solid #e9eaeb;
                    .message{
                        width: 670px;
                        height: 460px;
                        border-right: 2px solid #e9eaeb;
                        header{
                            padding: 0 10px;
                            height: 60px;
                            line-height: 60px;
                            border-bottom: 2px solid #e9eaeb;
                            font-size: 18px;
                            img{
                                margin-top: 5px;
                                margin-right: 10px;
                            }
                        }
                        .chatRecord{
                            margin: 10px;
                            overflow: hidden;
                            height: 378px;
                            ul{
                                li{
                                    div{
                                        max-width: 400px;
                                        margin: 0 20px;
                                        p{
                                            background-color: #eee;
                                            padding: 10px;
                                            line-height: 30px;
                                            border-radius: 10px;
                                        }
                                    }
                                    &:not(:last-child){
                                        margin-bottom: 10px;
                                    }
                                }
                            }
                        }
                    }
                    .video{
                        width: 456px;
                        height: 460px;
                        position: relative;
                        header{
                            padding: 0 10px;
                            height: 60px;
                            line-height: 60px;
                            border-bottom: 2px solid #e9eaeb;
                            font-size: 18px;
                        }
                        section{
                            img{
                                width: 456px;
                                height: 398px;
                            }
                        }
                        footer{
                            position: absolute;
                            bottom: 10px;
                            right: 10px;
                            width: 130px;
                            height: 130px;
                            border-radius: 6px;
                            overflow: hidden;
                        }
                    }
                    .send{
                        border-top: 2px solid #e9eaeb;
                        height: 262px;
                        ul{
                            height: 50px;
                            line-height: 50px;
                            li{
                                width: 50px;
                                text-align: center;
                                img{
                                    vertical-align: middle;
                                    cursor: pointer;
                                }
                            }
                        }
                        section{
                            height: 162px;
                            padding: 0 10px;
                            line-height: 30px;
                        }
                        footer{
                            text-align: right;
                            height: 50px;
                            line-height: 50px;
                            padding: 0 10px;
                            button{
                                width: 120px;
                                height: 36px;
                                line-height: 36px;
                                border-radius: 4px;
                                text-align: center;
                                color: #fff;
                                background: linear-gradient(to right, #0bcefe,#475dff);
                                cursor: pointer;
                            }
                        }
                    }
                }
                .blockChain{
                    width: 154px;
                    border: 2px solid #e9eaeb;
                    border-left: none;
                    height: 724px;
                    background: url('../assets/img/chain.png') no-repeat 10px 15px;
                    header{
                        height: 62px;
                        line-height: 62px;
                        text-align: center;
                        font-size: 18px;
                    }
                    section{
                        color: #fff;
                        height: 642px;
                        overflow: hidden;
                        margin: 10px 0;
                        ul{
                            width: 140px;
                            margin: auto;
                            li{
                                background: linear-gradient(to right, #ddc196,#c39469);
                                padding: 3px 0 4px 10px;
                                border-radius: 6px;
                                h1{
                                    font-size: 14px;
                                    height: 24px;
                                    line-height: 24px;
                                }
                                p{
                                    font-size: 12px;
                                    line-height: 16px;
                                }
                                &:not(:last-child){
                                    margin-bottom: 18px;
                                }
                            }
                        }
                    }
                }
            }
        }
        .videoDialog{
            h1{
                height: 100px;
                line-height: 100px;
                color: #fff;
                background-color: #fe6f67;
                text-align: center;
                span{
                    font-size: 36px;
                    font-weight: normal;
                }
            }
        }
    }
</style>

<style lang="scss">
    #newTradeChat{
        .blue_steps{
            padding-left: 50px;
            width: 520px;
            .el-step__title.is-finish{
                color: #4fc8ff;
                font-size: 14px;
                height: 30px;
                line-height: 30px;
            }
            .el-step__head.is-finish{
                border-color: #4fc8ff;
                color: #fff;
            }
            .el-step__description.is-finish{
                color: #4fc8ff;
            }
            .el-step__icon.is-text{
                background-color: #4fc8ff;
            }
        }
        .yellow_steps{
            padding-left: 50px;
            .el-step__title.is-finish,.el-step__title.is-wait{
                color: #d3b085;
                font-size: 14px;
                height: 30px;
                line-height: 30px;
            }
            .el-step__title.is-process{
                color: #3c73ff;
                font-size: 14px;
                height: 30px;
                line-height: 30px;
                font-weight: normal;
            }
            .el-step__head.is-finish,.el-step__head.is-wait{
                border-color: #d3b085;
                color: #fff;
            }
            .el-step__head.is-process{
                border-color: #3c73ff;
                color: #fff;
            }
            .el-step__description.is-finish,.el-step__description.is-wait{
                color: #d3b085;
            }
            .el-step__description.is-process{
                color: #3c73ff;
            }
            .el-step__icon.is-text{
                background-color: #d3b085;
            }
            .el-step__head.is-process .el-step__icon.is-text{
                background-color: #3c73ff;
            }
        }
        .chatDialog{
            .el-dialog{
                margin-top: 100px!important;
                margin-bottom: 20px;
                background-color: transparent;
                width: 1288px;
                .el-dialog__header{
                    display: none;
                }
                .el-dialog__body{
                    padding: 0;
                }
            }
        }
        .videoDialog{
            .el-dialog{
                background-color: transparent;
                width: 640px;
                .el-dialog__header{
                    display: none;
                }
                .el-dialog__body{
                    padding: 0;
                }
            }
        }
    }
    .el-tooltip__popper.is-dark{
        background-color: #d81e06!important;
    }
    .el-tooltip__popper .popper__arrow, .el-tooltip__popper .popper__arrow::after{
        border-right-color: #d81e06!important;
    }
</style>
