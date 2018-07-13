// 作者：小丶张学友
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;
// 按需加载element-ui
import {
    Button, Input, Select, Option, Autocomplete, CheckboxGroup, Checkbox,
    Carousel, CarouselItem,
    Tabs, TabPane, Tooltip, Dialog,
    Table, TableColumn, Pagination,
    Row, Col, Steps, Step, Tree
} from 'element-ui';
// 表单元素
Vue.use(Button);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Autocomplete);
Vue.use(CheckboxGroup);
Vue.use(Checkbox);
// 走马灯
Vue.use(Carousel);
Vue.use(CarouselItem);
// 页签
Vue.use(Tabs);
Vue.use(TabPane);
// 文字提示
Vue.use(Tooltip);
// 弹框dialog
Vue.use(Dialog);
// Table
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
// layout布局
Vue.use(Row);
Vue.use(Col);
// step步骤条
Vue.use(Steps);
Vue.use(Step);
// 树形
Vue.use(Tree);

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

// 滚动插件指令之每次加载都回到页面顶部
Vue.directive('scroll', {
    // 当组件完成一次更新时调用 还有其它的钩子函数 自行选择合适的
    componentUpdated:  (el) => {el.scrollTop = 0;}
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
