<script setup>

</script>
<template>
    <div class="not-found">
        <div>404</div>
        <div>页面找不到了!!</div>
    </div>
    <div>
        {{ $route.params }}
    </div>
</template>
<style lang="less" scoped>
.not-found {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        font-size: 42px;
        font-weight: 600;
    }
}
</style>