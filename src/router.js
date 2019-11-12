import VueRouter from "vue-router";
import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainter from "./components/tabbar/MemberContainter.vue";
import SearchContainter from "./components/tabbar/SearchContainter.vue";
import ShopCarContainer from "./components/tabbar/ShopCarContainer.vue";
import NewsList from './components/news/newsList.vue';
import NewsInfo from './components/news/NewsInfo.vue';

// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: HomeContainer },
        { path: "/member", component: MemberContainter },
        { path: "/cart", component: ShopCarContainer },
        { path: "/search", component: SearchContainter },
        { path: "/home/newslist", component: NewsList},
        { path: "/home/newsinfo/:id", component: NewsInfo}
    ],
    linkActiveClass: "mui-active"
});

// 把路由对象暴露出去
export default router;