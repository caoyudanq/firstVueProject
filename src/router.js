import VueRouter from "vue-router";
import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainter from "./components/tabbar/MemberContainter.vue";
import SearchContainter from "./components/tabbar/SearchContainter.vue";
import ShopCarContainer from "./components/tabbar/ShopCarContainer.vue";

// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: HomeContainer },
        { path: "/member", component: MemberContainter },
        { path: "/cart", component: ShopCarContainer },
        { path: "/search", component: SearchContainter }
    ],
    linkActiveClass: "mui-active"
});

// 把路由对象暴露出去
export default router;