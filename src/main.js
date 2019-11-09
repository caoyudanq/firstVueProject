// 入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
    // import VueResource from 'vue-resource'
    // // 2.2 安装 vue-resource
    // Vue.use(VueResource)
import router from './router.js'


import { Header, Swipe, SwipeItem } from 'mint-ui'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

import app from './App.vue'
var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})