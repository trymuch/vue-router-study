<script setup>
import Header from "@/components/Header.vue";
</script>
<template>
    <Header />
    <div class="user">
        <div>这是User页面</div>
        <div>当前路由对象：{{ $route }}</div>
        <div>当前路由对象的参数params：{{ $route.params }}</div>
        <div>当前路由对象的查询字符串对象query：{{ $route.query }}</div>
    </div>
</template>
<style lang="less" scoped></style>