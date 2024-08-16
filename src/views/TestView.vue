<script setup>

</script>
<template>
    <div class="test">
        <div>我是test页面。</div>
        <div>当前（test页面）路由实例：{{ $route }}</div>
        <div>当前(test页面)路径地址：{{ $route.fullPath }}</div>
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>
<style lang="less" scoped></style>