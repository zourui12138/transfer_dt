<template>
    <div id="home" class="clear">
        <div class="left fl">
            <div class="left_top card">
                <div class="chart" ref="equity"></div>
                <div class="chart" ref="fund"></div>
            </div>
            <div class="left_bottom card">
                <header>最近交易</header>
                <section>
                    <ol class="clear">
                        <li class="fl">时间</li>
                        <li class="fl">金额(CNY)</li>
                        <li class="fl"></li>
                        <li class="fl">数量</li>
                    </ol>
                    <ul class="clear" v-for="i in leftBottomData">
                        <li class="fl">{{i.time}}</li>
                        <li class="fl">{{i.money}}</li>
                        <li class="fl"><span class="green">=></span></li>
                        <li class="fl">{{i.count}}</li>
                    </ul>
                </section>
            </div>
        </div>
        <div class="right fr">
            <el-carousel :interval="4000" trigger="click" height="300px">
                <el-carousel-item v-for="item in bannerImg" :key="item">
                    <img :src="item" alt="">
                </el-carousel-item>
            </el-carousel>
            <el-row class="transferList" :gutter="16">
                <el-col :span="6">
                    <div class="transfer_box card">
                        <h1>河北兴隆希力药业</h1>
                        <h2><span>100</span>万</h2>
                        <h3>可售份额<span>10%</span></h3>
                        <h4><button type="button">了解更多</button></h4>
                        <img src="../assets/img/label.png" alt="">
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="transfer_box card">
                        <h1>北京四海华辰科技有限公司</h1>
                        <h2><span>150</span>万</h2>
                        <h3>可售份额<span>17.5%</span></h3>
                        <h4><button type="button">了解更多</button></h4>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="transfer_box card">
                        <h1>丰裕5号</h1>
                        <h2><span>250</span>万</h2>
                        <h3>可售份额<span>15000</span>分</h3>
                        <h4><button type="button">了解更多</button></h4>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="transfer_box card">
                        <h1>昭融天风金泽价值优选1号</h1>
                        <h2><span>200</span>万</h2>
                        <h3>可售份额<span>35000</span>分</h3>
                        <h4><button type="button">了解更多</button></h4>
                    </div>
                </el-col>
            </el-row>
            <section class="content card">
                <el-tabs type="border-card">
                    <el-tab-pane label="基金">
                        <el-table header-cell-class-name="tableTitle" :data="fundTableData" style="width: 100%">
                            <el-table-column label="基金名称">
                                <template slot-scope="scope">
                                    <img :src="scope.row.logo" alt="">
                                    <span>{{scope.row.name}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="company" label="所属LP名称"></el-table-column>
                            <el-table-column width="140" prop="money" label="总金额"></el-table-column>
                            <el-table-column width="140" prop="count" label="数量"></el-table-column>
                            <el-table-column width="140" prop="price" label="单价"></el-table-column>
                            <el-table-column width="140" prop="earnings" label="预估年收益"></el-table-column>
                            <el-table-column width="100" label="操作">
                                <template slot-scope="scope">
                                    <el-button size="mini" type="danger" @click="toTradeChat">交易</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination>
                    </el-tab-pane>
                    <el-tab-pane label="股权">
                        <el-table header-cell-class-name="tableTitle" :data="equityTableData" style="width: 100%">
                            <el-table-column label="股权名称">
                                <template slot-scope="scope">
                                    <img :src="scope.row.logo" alt="">
                                    <span>{{scope.row.name}}</span>
                                </template>
                            </el-table-column>
                            <el-table-column prop="company" label="所属LP/GP名称"></el-table-column>
                            <el-table-column width="140" prop="money" label="总金额"></el-table-column>
                            <el-table-column width="140" prop="count" label="数量"></el-table-column>
                            <el-table-column width="140" prop="price" label="单价"></el-table-column>
                            <el-table-column width="140" prop="earnings" label="预估年收益"></el-table-column>
                            <el-table-column width="100" label="操作">
                                <template slot-scope="scope">
                                    <el-button size="mini" type="danger" @click="toTradeChat">交易</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                        <el-pagination class="page" background layout="prev, pager, next" :total="1000"></el-pagination>
                    </el-tab-pane>
                </el-tabs>
                <button type="button" @click="toRelease">发&nbsp;&nbsp;&nbsp;布</button>
            </section>
        </div>
    </div>
</template>

<script>
    import banner1 from '../assets/img/banner1.png'
    import banner2 from '../assets/img/banner2.png'
    import banner3 from '../assets/img/banner3.png'
    import logo1 from '../assets/img/company/logo1.png'
    import logo2 from '../assets/img/company/logo2.png'
    import logo3 from '../assets/img/company/logo3.png'
    import logo4 from '../assets/img/company/logo4.png'
    import logo5 from '../assets/img/company/logo5.png'
    import logo6 from '../assets/img/company/logo6.jpg'
    import logo7 from '../assets/img/company/logo7.jpg'
    import logo8 from '../assets/img/company/logo8.jpg'
    import logo9 from '../assets/img/company/logo9.jpg'
    import logo10 from '../assets/img/company/logo10.png'

    export default {
        name: "NewHome",
        data() {
            return{
                bannerImg: [banner1,banner2,banner3],
                equityTableData: [
                    {
                        name: '天瞳威视',
                        company: '苏州天瞳威视电子科技有限公司',
                        money: '1.42亿',
                        count: '12.3%',
                        price: '1.1',
                        earnings: '5.6%',
                        logo: logo6
                    },
                    {
                        name: '环葆嘉节能',
                        company: '广东环葆嘉节能科技有限公司',
                        money: '2.3亿',
                        count: '8.8%',
                        price: '1.5',
                        earnings: '4.75%',
                        logo: logo7
                    },
                    {
                        name: '核桃网络',
                        company: '成都核桃网络有限公司',
                        money: '1.8亿',
                        count: '9.8%',
                        price: '1.1',
                        earnings: '7.8%',
                        logo: logo8
                    },
                    {
                        name: '叠境数字',
                        company: '叠境数字科技（上海）有限公司',
                        money: '2.6亿',
                        count: '15%',
                        price: '1.1',
                        earnings: '7.6%',
                        logo: logo9
                    },
                    {
                        name: '智能硬件 ',
                        company: '利珀科技',
                        money: '500万',
                        count: '10%',
                        price: '1.1',
                        earnings: '5.6%',
                        logo: logo10
                    }
                ],
                fundTableData: [
                    {
                        name: '天堂硅谷金穗优选',
                        company: '浙江天堂硅谷资产管理',
                        money: '1.32亿',
                        count: '50000',
                        price: '1.3',
                        earnings: '5.8%',
                        logo: logo5
                    },
                    {
                        name: '金龙启航1号基金',
                        company: '北京源和资本管理',
                        money: '2亿',
                        count: '70000',
                        price: '1.1',
                        earnings: '5.6%',
                        logo: logo4
                    },
                    {
                        name: '信中利晨信成长',
                        company: '上海景旭创业投资',
                        money: '3亿',
                        count: '30000',
                        price: '1.3',
                        earnings: '5.8%',
                        logo: logo3
                    },
                    {
                        name: '尊方德-丰穗15号',
                        company: '尊方德投资管理',
                        money: '2.1亿',
                        count: '65000',
                        price: '1.1',
                        earnings: '5.6%',
                        logo: logo2
                    },
                    {
                        name: '经济创投3号 ',
                        company: '天诺资产管理',
                        money: '1.6亿',
                        count: '35000',
                        price: '1.1',
                        earnings: '5.6%',
                        logo: logo1
                    }
                ],
                leftBottomData: [
                    {
                        time: '2018-05-06',
                        money: '120万',
                        count: '25000份'
                    },
                    {
                        time: '2018-07-09',
                        money: '1220万',
                        count: '15000份'
                    },
                    {
                        time: '2018-01-16',
                        money: '420万',
                        count: '45000份'
                    },
                    {
                        time: '2018-05-06',
                        money: '620万',
                        count: '16.5%'
                    },
                    {
                        time: '2018-07-25',
                        money: '1120万',
                        count: '41000份'
                    },
                    {
                        time: '2018-02-11',
                        money: '3610万',
                        count: '17.5%'
                    },
                    {
                        time: '2018-03-01',
                        money: '120万',
                        count: '25000份'
                    },
                    {
                        time: '2018-02-07',
                        money: '420万',
                        count: '5.8%'
                    },
                    {
                        time: '2018-06-06',
                        money: '920万',
                        count: '32000份'
                    },
                    {
                        time: '2018-05-06',
                        money: '870万',
                        count: '55000份'
                    }
                ]
            }
        },
        methods: {
            equityLineChart() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.equity);
                // 图表配置项
                let option = {
                    title: {
                        text: '股权曲线图',
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
                        data:['成交总金额', '成交总数量'],
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
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    color: ['#0acffe','#475dff'],
                    series: [
                        {
                            name: '成交总金额',
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
                            type: 'bar',
                            barWidth: 30,
                            data: [1, 4, 2, 8, 3, 2, 7],
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
            fundLineChart() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.fund);
                // 图表配置项
                let option = {
                    title: {
                        text: '基金曲线图',
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
                        data:['成交总金额', '成交总数量'],
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
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    color: ['#e05111','#ef950e'],
                    series: [
                        {
                            name: '成交总金额',
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
                            type: 'bar',
                            barWidth: 30,
                            data: [1, 4, 2, 5, 3, 7, 6],
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
            toRelease() {
                this.$router.push({path:'/newRelease'});
            },
            toTradeChat() {
                this.$router.push({path:'/newTradeChat'});
            }
        },
        mounted() {
            this.fundLineChart();
            this.equityLineChart();
        }
    }
</script>

<style lang="scss" scoped>
    #home{
        padding: 20px;
        .left{
            width: 524px;
            .left_top{
                .chart{
                    height: 269px;
                }
            }
            .left_bottom{
                margin-top: 20px;
                padding: 0 20px 20px;
                header{
                    height: 57px;
                    line-height: 57px;
                }
                section{
                    li{
                        line-height: 30px;
                        height: 30px;
                        &:nth-child(1) {
                            width: 20%;
                            text-align: center;
                        }
                        &:nth-child(2) {
                            width: 30%;
                            text-align: right;
                        }
                        &:nth-child(3) {
                            width: 20%;
                            text-align: center;
                            span.green{
                                color: #43CB83;
                            }
                            span.yellow{
                                color: #F5A623;
                            }
                        }
                        &:nth-child(4) {
                            width: 30%;
                            text-align: center;
                        }
                    }
                    ol{
                        border-bottom: 1px solid #E7E7E7;
                        color: #CDCDCD;
                    }
                }
            }
        }
        .right{
            width: 1335px;
            .transferList{
                margin: 37px 0;
                .transfer_box{
                    text-align: center;
                    padding: 11px 0;
                    position: relative;
                    h1{
                        font-size: 18px;
                        height: 30px;
                        line-height: 30px;
                    }
                    h2{
                        color: #f06761;
                        height: 40px;
                        line-height: 40px;
                        span{
                            font-size: 36px;
                        }
                    }
                    h3{
                        height: 30px;
                        line-height: 30px;
                        span{
                            color: #4561ff;
                            margin-left: 4px;
                        }
                    }
                    h4{
                        button{
                            width: 120px;
                            height: 30px;
                            border-radius: 15px;
                            color: #fff;
                            background: linear-gradient(to right, #feb772,#fe7067);
                        }
                    }
                    img{
                        position: absolute;
                        top: 0;
                        left: 20px;
                    }
                }
            }
            .content{
                overflow: hidden;
                position: relative;
                img{
                    vertical-align: middle;
                    margin-right: 20px;
                    width: 80px;
                    height: 30px;
                }
                >button{
                    width: 120px;
                    height: 36px;
                    line-height: 36px;
                    border-radius: 4px;
                    text-align: center;
                    color: #fff;
                    background: linear-gradient(to right, #0bcefe, #475dff);
                    cursor: pointer;
                    position: absolute;
                    top: 5px;
                    right: 10px;
                }
            }
        }
    }
</style>

<style lang="scss">
    #home{
        .el-tabs__item{
            height: 46px;
            line-height: 46px;
            font-size: 16px;
            color: #333;
            padding: 0 43px;
        }
        .el-tabs--border-card{
            border: none;
            box-shadow: none;
        }
        .el-tabs--border-card > .el-tabs__header{
            border-color: #da3915;
            background-color: #fafafa;
        }
        .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active{
            color: #333;
            border-right-color: transparent;
            border-left-color: transparent;
        }
    }
</style>
