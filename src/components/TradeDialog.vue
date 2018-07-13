<template>
    <el-dialog
        id="tradeDialog"
        append-to-body
        :show-close="false"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
        :visible.sync="tradeDialog">
        <div class="dialogContainer">
            <header>智能合约执行中</header>
            <section class="transfer clear">
                <h1 class="fl"><img src="../assets/img/components/gear.png" alt=""></h1>
                <div><h2><img src="../assets/img/components/transfer_icon.png" alt=""><img src="../assets/img/components/transfer_icon.png" alt=""><img src="../assets/img/components/transfer_icon.png" alt=""></h2></div>
                <h1 class="fr"><img src="../assets/img/components/gear.png" alt=""></h1>
            </section>
            <section class="forRMB clear">
                <h1 class="fl"><img src="../assets/img/components/gear.png" alt=""></h1>
                <div><h2><img src="../assets/img/components/forRMB_icon.png" alt=""><img src="../assets/img/components/forRMB_icon.png" alt=""><img src="../assets/img/components/forRMB_icon.png" alt=""></h2></div>
                <h1 class="fr"><img src="../assets/img/components/gear.png" alt=""></h1>
            </section>
            <section class="onChain clear">
                <h1 class="fl"><img src="../assets/img/components/gear.png" alt=""></h1>
                <div><h2><img src="../assets/img/components/onChain_icon.png" alt=""><img src="../assets/img/components/onChain_icon.png" alt=""><img src="../assets/img/components/onChain_icon.png" alt=""></h2></div>
                <h1 class="fr"><img src="../assets/img/components/gear.png" alt=""></h1>
            </section>
            <footer>
                <div>
                    <p>银行账户正在转账...</p>
                    <p>账户51030102102301转账10000元到账户5132012565125363...</p>
                    <p>正在进行投元交易...</p>
                    <p>xxxx账户交易10000投元到xxxxx账户...</p>
                    <p>合同上链，上链时间：2018-07-08 12:22</p>
                    <p>哈希值：f224421398f0e74a0c0109057053d81423c38c</p>
                </div>
            </footer>
            <h3><button type="button" @click="closeDialog">确&nbsp;&nbsp;&nbsp;认</button></h3>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "TradeDialog",
        props: ['tradeDialog'],
        methods: {
            closeDialog() {
                this.$emit('closeDialog');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @function imgUrl($name){
        @return '../assets/img/components/'+$name;
    }
    @keyframes move {
        to{
            transform: translateX(332px);
        }
    }
    @keyframes rotateAnimate {
        to{
            transform:rotate(360deg);
        }
    }
    @keyframes moveTop {
        0%{
            top: 0;
        }
        33%{
            top: 0;
        }
        34%{
            top: -80px;
        }
        66%{
            top: -80px;
        }
        67%{
            top: -160px;
        }
        100%{
            top: -160px;
        }
    }
    @keyframes show {
        to{
            visibility: visible;
        }
    }
    #tradeDialog{
        .dialogContainer{
            width: 1010px;
            height: 741px;
            padding: 0 152px;
            background: url(imgUrl('dialog_bg.png')) no-repeat center;
            position: relative;
            header{
                text-align: center;
                color: #7adeff;
                line-height: 56px;
                height: 56px;
                padding-top: 83px;
                font-size: 30px;
            }
            section{
                padding: 0 20px;
                position: absolute;
                top: 200px;
                width: 1010px;
                visibility: hidden;
                animation-name: show;
                animation-duration: 2s;
                animation-timing-function: linear;
                h1{
                    img{
                        transform:rotate(0);
                        animation-name: rotateAnimate;
                        animation-duration: 2s;
                        animation-iteration-count: infinite;
                        animation-timing-function: linear;
                    }
                }
                div{
                    position: absolute;
                    top: 58px;
                    left: 0;
                    right: 0;
                    width: 332px;
                    margin: auto;
                    overflow: hidden;
                    h2{
                        width: 498px;
                        transform: translateX(-498px);
                        animation-name: move;
                        animation-duration: 3s;
                        animation-iteration-count: infinite;
                        animation-timing-function: linear;
                    }
                }
                &.transfer{
                    h1{
                        background: url(imgUrl('transfer.png')) no-repeat center;
                    }
                }
                &.forRMB{
                    animation-delay: 2s;
                    h1{
                        background: url(imgUrl('forRMB.png')) no-repeat center;
                    }
                    h1:last-child{
                        background: url(imgUrl('forRMB_.png')) no-repeat center;
                    }
                }
                &.onChain{
                    animation-delay: 4s;
                    animation-fill-mode: forwards;
                    h1{
                        background: url(imgUrl('onChain.png')) no-repeat center;
                    }
                    h1:last-child{
                        background: url(imgUrl('onChain_.png')) no-repeat center;
                    }
                }
            }
            footer{
                width: 910px;
                height: 80px;
                overflow: hidden;
                margin: 369px auto 0;
                padding: 0 50px;
                background: linear-gradient(to bottom, #003957,#006796);
                border-radius: 6px;
                border: 1px solid #007099;
                position: relative;
                div{
                    position: absolute;
                    top: 0;
                    left: 50px;
                    animation-name: moveTop;
                    animation-duration: 6s;
                    animation-timing-function: linear;
                    animation-fill-mode: forwards;
                    p{
                        color: #c6edfa;
                        font-size: 16px;
                        line-height: 40px;
                        overflow: hidden;
                        height: 40px;
                    }
                }
            }
            h3{
                text-align: center;
                margin-top: 20px;
                visibility: hidden;
                animation-name: show;
                animation-duration: 1s;
                animation-timing-function: linear;
                animation-delay: 7s;
                animation-fill-mode: forwards;
                button{
                    width: 120px;
                    height: 36px;
                    background: linear-gradient(to bottom, #003957,#006796);
                    border-radius: 6px;
                    border: 1px solid #007099;
                    color: #c6edfa;
                    font-size: 16px;
                    cursor: pointer;
                }
            }
        }
    }
</style>

<style lang="scss">
    #tradeDialog{
        .el-dialog{
            background-color: transparent;
            width: 1314px;
            .el-dialog__header{
                display: none;
            }
            .el-dialog__body{
                padding: 0;
            }
        }
    }
</style>
