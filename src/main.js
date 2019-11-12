// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
    // import VueResource from 'vue-resource'
    // // 2.2 安装 vue-resource
    // Vue.use(VueResource)
import router from './router.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005/';

import { Header, Swipe, SwipeItem, Button} from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import moment from 'moment'//格式化时间的插件


Vue.filter('dataFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
})

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

import app from './App.vue'
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})