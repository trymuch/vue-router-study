<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
// resolve函数返回一个RouteLocation对象，其是路由地址的抽象
// resolve函数的参数是路由对象，必须是在路由规则中定义的路由对象
// 该函数的功能是将具体的路由对象解析为对应的URL地址
const routeLocation1 = router.resolve({ name: "productNameList", params: { productNameList: [] } });
console.log("routeLocation1", routeLocation1);
const routeLocation2 = router.resolve({ name: "productNameList", params: { productNameList: ["a", "b", "c"] } });
console.log("routeLocation2", routeLocation2);
const routeLocation3 = router.resolve({ name: "user", query: { name: "wzf", age: 20 } });
console.log("routeLocation3", routeLocation3);
console.log("currentRoute", router.currentRoute.value);
const currentLocation = router.resolve(router.currentRoute.value);
console.log("currentLocation", currentLocation);
</script>
<template>
    <div class="product">
        <div>我是产品product页面</div>
        <div>当前路由实例：{{ $route }}</div>
        <div>当前路由实例的params属性：{{ $route.params }}</div>
    </div>
</template>
<style lang="less" scoped></style>