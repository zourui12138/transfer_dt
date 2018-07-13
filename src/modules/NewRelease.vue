<template>
    <div id="newRelease">
        <div class="caption">填写转让基本信息</div>
        <header class="card clear">
            <div class="fl">
                <div class="title clear">
                    <span class="fl">交易标题</span>
                    <el-input class="fl" placeholder="请输入名称" v-model="tradeTitle"></el-input>
                </div>
                <div class="transfer clear">
                    <span class="fl">我想转让</span>
                    <el-autocomplete
                        class="fl"
                        v-model="transferName"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入内容">
                        <el-select v-model="transferType" slot="prepend" placeholder="请选择">
                            <el-option label="基金" value="基金"></el-option>
                            <el-option label="股权" value="股权"></el-option>
                        </el-select>
                    </el-autocomplete>
                    <el-input class="fl" placeholder="请输入价值" v-model="transferMoney"></el-input>
                    <p class="fl">系统自动为你估值：<strong>{{transferMoney ? 4*transferMoney+'0.25' : 0}}</strong><span>万元</span></p>
                </div>
                <div class="requirements clear">
                    <span class="fl">转让要求</span>
                    <el-checkbox-group class="fl" v-model="requirementsList">
                        <el-checkbox label="资深LP可投"></el-checkbox>
                        <el-checkbox label="VIP LP可投"></el-checkbox>
                        <el-checkbox label="合规LP可投"></el-checkbox>
                        <el-checkbox label="资深GP可投"></el-checkbox>
                        <el-checkbox label="VIP GP可投"></el-checkbox>
                        <el-checkbox label="合规GP可投"></el-checkbox>
                        <el-checkbox label="有行业经验要求"></el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
            <footer class="fr">
                <h1><strong>目前系统为您预估的单价为：</strong><span>{{transferMoney ? 4 : 0}}</span>元</h1>
                <h1><strong>最近一个月平均单价为：</strong><span>{{transferMoney ? 5 : 0}}</span>元</h1>
            </footer>
        </header>
        <div class="caption">填写交易详细信息</div>
        <section class="card clear">
            <div class="left fl">
                <h4>帮助</h4>
                <!--<el-tree-->
                    <!--:data="treeData"-->
                    <!--:props="defaultProps"-->
                    <!--accordion-->
                    <!--:default-expand-all="false"-->
                    <!--node-key="id">-->
                    <!--<div class="custom-tree-node" slot-scope="{ node, data }">-->
                        <!--<h1 v-if="node.level === 1">{{ node.label }}</h1>-->
                        <!--<h2 v-if="node.level === 2">{{ node.label }}</h2>-->
                        <!--<h3 v-if="node.level === 3">{{ node.label }}</h3>-->
                    <!--</div>-->
                <!--</el-tree>-->
                <div class="problem card">
                    <h1><i class="el-icon-question"></i>常见问题</h1>
                    <div>
                        <p><span>如何使用德同转让平台？</span></p>
                        <p><span>如何购买基金？</span></p>
                        <p><span>如何购买股权？</span></p>
                        <p><span>如何转让基金？</span></p>
                        <p><span>如何转让股权？</span></p>
                        <p><span>为什么价格比交易所高？</span></p>
                        <p><span>什么是浮动价格机制？</span></p>
                        <p><span>如何获得投元？</span></p>
                        <p><span>什么是投元？</span></p>
                        <p><span>如何发布项目？</span></p>
                        <p><span>怎样获取更高权限？</span></p>
                        <p><span>如何发布线下活动？</span></p>
                        <p><span>怎么分享投资经验？</span></p>
                        <p><span>如何关注项目、基金？</span></p>
                        <p><span>怎么查看投元交易记录？</span></p>
                        <p><span>怎样提高企业信誉？</span></p>
                        <p><span>怎样提高企业信用？</span></p>
                        <p><span>怎样提高企业估值？</span></p>
                    </div>
                </div>
            </div>
            <div class="right fr">
                <h1>交易要求：</h1>
                <el-input type="textarea" :rows="7" resize="none" placeholder="请输入内容" v-model="requirements"></el-input>
                <h2>交易说明：</h2>
                <el-input type="textarea" :rows="7" resize="none" placeholder="请输入内容" v-model="Description"></el-input>
                <h2>交易备注：</h2>
                <el-input type="textarea" :rows="7" resize="none" placeholder="请输入内容" v-model="remark"></el-input>
                <h3><button type="button" @click="toHome">发&nbsp;&nbsp;&nbsp;布</button></h3>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "NewRelease",
        data() {
            return{
                tradeTitle:'',
                transferName: '',
                transferType: '股权',
                transferMoney: '',
                requirementsList: [],
                restaurants: [],
                requirements: 'CalmCar Vision System，是一套基于“深度学习技术”的人工智能视觉系统，能够全面认知复杂路况，精准感知、预测车辆行驶过程中的交通情况，实现驾驶场景实时理解、驾驶行为实时分析，具备车辆行人检测与追踪、行车线检测、交通灯识别以及道路标识牌识别等功能。公司的技术核心就是CalmCar技术做视觉＋硬件软件算法，主打汽车安全环境感知，主要做与大型车辆生产厂家的合作。',
                Description: 'CalmCar基于NVIDIA Jetson构建，使用深度学习算法和CalmCar神经网络进行特征提取和识别。2017年，CalmCar成为英伟达Inception Program的合作伙伴，同时被选为2017 GTC(GPU技术大会)十个AI现场演示者之一。CalmCar Vision System，是一套基于“深度学习技术”的人工智能视觉系统，能够全面认知复杂路况，精准感知、预测车辆行驶过程中的交通情况，实现驾驶场景实时理解、驾驶行为实时分析，具备车辆行人检测与追踪、行车线检测、交通灯识别以及道路标识牌识别等功能。',
                remark: '核心团队由欧美海归硕博士组成，均拥有海外Tier1汽车主动安全电子、机器视觉、大数据等行业多年工作经验。CalmCar基于NVIDIA Jetson构建,使用深度学习算法和CalmCar神经网络进行特征提取和识别。',
                treeData: [
                    {
                        label: '交易问题',
                        level: 1,
                        children: [
                            {
                                label: '1、交易要求',
                                level: 2,
                                children: [
                                    {
                                        level: 3,
                                        label: '交易要求是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                                    }
                                ]
                            },
                            {
                                label: '2、交易要求',
                                level: 2,
                                children: [
                                    {
                                        level: 3,
                                        label: '交易要求是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                                    }
                                ]
                            },
                            {
                                label: '3、交易要求',
                                level: 2,
                                children: [
                                    {
                                        level: 3,
                                        label: '交易要求是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                                    }
                                ]
                            }
                        ],
                    },
                    {
                        label: '交易问题',
                        children: [
                            {
                                label: '1、交易要求',
                                children: [
                                    {
                                        label: '交易要求是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                                    }
                                ]
                            },
                            {
                                label: '2、交易要求',
                                children: [
                                    {
                                        label: '交易要求是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: '交易问题',
                        children: [
                            {
                                label: '1、交易要求',
                                children: [
                                    {
                                        label: '交易要求是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                                    }
                                ]
                            },
                            {
                                label: '2、交易要求',
                                children: [
                                    {
                                        label: '交易要求是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                                    }
                                ]
                            },
                            {
                                label: '3、交易要求',
                                children: [
                                    {
                                        label: '交易要求是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                                    }
                                ]
                            },
                            {
                                label: '4、交易要求',
                                children: [
                                    {
                                        label: '交易要求是xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods: {
            querySearch(queryString, cb) {
                let restaurants = this.restaurants;
                let results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            loadAll() {
                return [
                    { "value": "天瞳威视" },
                    { "value": "环葆嘉节能" }
                ];
            },
            toHome() {
                this.$router.push('/newHome');
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    }
</script>

<style lang="scss" scoped>
    #newRelease{
        padding: 20px;
        .caption{
            height: 30px;
            line-height: 30px;
            padding-left: 20px;
            background-color: #4fc8ff;
            color: #fff;
        }
        header{
            padding: 20px 0 20px 30px;
            margin-bottom: 20px;
            .title{
                height: 50px;
                line-height: 50px;
                .el-input{
                    width: 1200px;
                    margin-left: 20px;
                }
            }
            .transfer{
                height: 50px;
                line-height: 50px;
                .el-select{
                    width: 130px;
                }
                .el-input{
                    width: 320px;
                }
                p{
                    margin-left: 20px;
                    height: 50px;
                    strong{
                        font-size: 36px;
                        color: #fe6f67;
                        margin: 0 10px;
                        vertical-align: baseline;
                    }
                    span{
                        color: #fe6f67;
                    }
                }
            }
            .requirements{
                height: 50px;
                line-height: 50px;
                .el-checkbox-group{
                    margin-left: 20px;
                }
            }
            footer{
                width: 440px;
                height: 100px;
                padding: 25px 0;
                text-align: center;
                color: #fff;
                background-color: #fe6f67;
                h1{
                    font-size: 16px;
                    height: 50px;
                    line-height: 50px;
                    strong{
                        font-weight: normal;
                        display: inline-block;
                        width: 220px;
                        text-align: left;
                    }
                    span{
                        font-size: 36px;
                        margin-right: 10px;
                    }
                }
            }
        }
        section{
            padding: 0 620px 0 20px;
            .left{
                width: 220px;
                h4{
                    height: 40px;
                    line-height: 40px;
                    font-size: 16px;
                    text-align: center;
                    background-color: #e7e7e7;
                    margin: 16px 0;
                }
                .custom-tree-node{
                    width: 100%;
                    h1{
                        width: calc(100% - 40px);
                        color: #fff;
                        font-size: 16px;
                        background-color: #4fc8ff;
                        padding: 0 20px;
                    }
                    h2{
                        background-color: #e7e7e7;
                        font-size: 16px;
                        padding: 0 20px;
                    }
                    h3{
                        padding: 0 20px;
                        font-size: 16px;
                        white-space: normal;
                        word-break: break-all;
                    }
                }
                .problem{
                    padding: 0 15px 20px;
                    h1{
                        height: 50px;
                        line-height: 50px;
                        font-size: 18px;
                        i{
                            margin-right: 4px;
                        }
                    }
                    div{
                        p{
                            line-height: 30px;
                            color: #43CB83;
                            font-size: 14px;
                            padding-left: 10px;
                            span{
                                cursor: pointer;
                                &:hover{
                                    color: #2a985e;
                                }
                            }
                        }
                    }
                }
            }
            .right{
                width: 1000px;
                h1,h2{
                    height: 46px;
                    line-height: 46px;
                    font-size: 16px;
                }
                h2{
                    margin-top: 10px;
                }
                h3{
                    text-align: right;
                    height: 56px;
                    line-height: 56px;
                    button{
                        width: 120px;
                        height: 36px;
                        line-height: 36px;
                        border-radius: 4px;
                        text-align: center;
                        color: #fff;
                        background: linear-gradient(to right, #0bcefe,#475dff);
                    }
                }
            }
        }
    }
</style>

<style lang="scss">
    #newRelease{
        .el-input-group{
            margin: 5px 20px;
            width: 630px;
        }
        .el-textarea__inner{
            background-color: #e7e7e7;
        }
        .el-tree-node__content{
            padding: 0!important;
            line-height: 40px;
            margin-bottom: 4px;
            font-size: 16px;
            height: auto!important;
            > .el-tree-node__expand-icon{
                display: none;
            }
        }
    }
</style>
