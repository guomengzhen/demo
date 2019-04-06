import VueRouter from 'vue-router'

// 引入路由组件
import HomeContainer from "../components/tabbar/HomeContainer.vue";
import MemberContainer from "../components/tabbar/MemberContainer.vue";
import ShopcarContainer from "../components/tabbar/ShopcarContainer.vue";
import SearchContainer from "../components/tabbar/SearchContainer.vue";


var router = new VueRouter({
  routes: [
    { path: "/home", component: HomeContainer },
    { path: "/member", component: MemberContainer },
        { path: "/shopcar", component: ShopcarContainer },
        { path: "/search", component: SearchContainer }
  ],
  linkActiveClass: "mui-active"
});

export default router