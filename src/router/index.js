import Vue from 'vue'
import Router from 'vue-router'
// 德同转让平台
import NewHome from '../modules/NewHome'
import NewRelease from '../modules/NewRelease'
import NewTradeChat from '../modules/NewTradeChat'

Vue.use(Router);

export default new Router({
    routes: [
        // 重定向
        {
            path: '/',
            redirect: '/newHome'
        },
        // 德同转让平台
        {
            path: '/newHome',
            name: 'newHome',
            component: NewHome
        },
        {
            path: '/newRelease',
            name: 'newRelease',
            component: NewRelease
        },
        {
            path: '/newTradeChat',
            name: 'newTradeChat',
            component: NewTradeChat
        }
    ]
});
