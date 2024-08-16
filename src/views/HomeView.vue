<script setup>
import Header from "@/components/Header.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const productName = "产品1";
const productNameList = ["产品1", "产品2", "产品3"];
const handleToProduct = () => {
  router.push({
    name: "productName",
    params: { productName }
  });
};
const handleToProductList = () => {
  router.push(
    {
      name: "productNameList",
      params: { productNameList }
    }
  );
}
const handleBack2History = () => {
  router.go(-2);
}
</script>
<template>
  <Header />
  <div class="home">
    <h1>这是home页面</h1>
    <div>当前路由对象：{{ $route }}</div>
    <div>当前的路由实例的路径：{{ $route.path }}</div>
    <button @click="handleToProduct">跳转到单个productName页面</button>
    <button @click="handleToProductList">跳转到productNameList页面</button>
    <button @click="handleBack2History">后退2个历史记录</button>
  </div>
</template>
<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 20px;

  h1 {
    text-align: center;
    font-size: 36px;
  }
}
</style>