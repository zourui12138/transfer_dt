<template>
    <div id="app">
        <header class="header clear">
            <img class="fl" src="./assets/img/logo.png" alt="" @click="toHome">
            <el-input class="fr" placeholder="请输入内容" suffix-icon="el-icon-search" v-model="searchKey"></el-input>
        </header>
        <VuePerfectScrollbar class="section" v-scroll><router-view/></VuePerfectScrollbar>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: 'App',
        components: {VuePerfectScrollbar},
        data() {
            return{
                searchKey: ''
            }
        },
        methods: {
            toHome() {
                this.$router.push({path: '/newHome'});
            }
        }
    }
</script>

<style lang="scss">
    @import "./assets/css/base";
    .tableTitle{
        color: #333;
        padding: 7px 0!important;
    }
    // Pagination
    .page{
        text-align: right;
        padding: 0;
        margin-top: 24px;
    }
</style>

<style lang="scss" scoped>
    #app{
        height: 100%;
        .header{
            height: 70px;
            line-height: 70px;
            background-color: #fff;
            padding: 0 100px;
            img{
                margin-top: 11px;
            }
            .el-input{
                width: 320px;
            }
        }
        .section{
            height: calc(100% - 70px);
        }
    }
</style>
