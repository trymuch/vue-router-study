import { createRouter, createWebHistory } from "vue-router";

// 制定路由规则
// 路由规则列表是有路由对象组成的数组
// 路由对象有path,name,component,params,query等字段组成
// 路由对象的name属性值最好是唯一的，目的是方便命名路由导航，确保路由守卫正确工作，可读性高且易于维护
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/user/:id?",
    name: "user",
    component: () => import("@/views/UserView.vue"),
  },
  {
    path: "/user/:id/post/:postId",
    name: "userPost",
    component: () => import("@/views/UserView.vue"),
  },
  {
    path: "/:orderId(\\d+)",
    name: "orderId",
    component: () => import("@/views/OrderView.vue"),
  },
  {
    path: "/:productName",
    name: "productName",
    component: () => import("@/views/ProductView.vue"),
  },
  {
    path: "/:productNameList*",
    name: "productNameList",
    component: () => import("@/views/ProductView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/NotFoundView.vue"),
  },
];

// 定义路由器对象
// 通过createRouter函数定义
const router = createRouter({
  routes,
  history: createWebHistory(),
});

// ES模块导入对象
export default router;