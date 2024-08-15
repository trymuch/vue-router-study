<script setup>
import Header from "@/components/Header.vue";
</script>
<template>
  <Header />
  <div class="about">
    <h1>这是about页面</h1>
    <div>当前路由对象：{{ $route }}</div>
    <div>当前的路由实例的路径：{{ $route.path }}</div>
  </div>
</template>

<style lang="less" scoped>
.about {
  width: 100%;
  height: 100%;
  padding: 20px;

  h1 {
    text-align: center;
    font-size: 36px;
  }
}
</style>
