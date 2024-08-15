<script setup>

</script>
<template>
    <header>
        <nav>
            <RouterLink class="router-link" to="/">首页</RouterLink>
            <RouterLink class="router-link" to="/about">关于</RouterLink>
            <RouterLink class="router-link" to="/user">用户</RouterLink>
        </nav>
    </header>
</template>
<style lang="less" scoped>
header {
    height: 64px;
    position: relative;
    background-color: #333;

    nav {
        position: absolute;
        top: 50%;
        margin-top: -18px;

        .router-link {
            margin: 20px 0 20px 20px;
            font-size: 24px;
            line-height: 36px;
            color: #fff;

            &:hover {
                background-color: aqua;
            }
        }
    }

}
</style>