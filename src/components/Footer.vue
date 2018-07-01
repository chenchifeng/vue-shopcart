<template>    
    <tabbar>
        <tabbar-item selected link="/home">
        <img slot="icon" src="@/assets/logo.png">
        <span slot="label">点餐</span>
        </tabbar-item>
        <tabbar-item link="/order" badge="2">
        <img slot="icon" src="@/assets/logo.png">
        <span slot="label">订单</span>
        </tabbar-item>
        <tabbar-item link="/my" show-dot>
        <img slot="icon" src="@/assets/logo.png">
        <span slot="label">我的</span>
        </tabbar-item>
    </tabbar>
</template>

<script>
    export default {
        name: 'AppFooter'
    }
</script>

<style>

</style>
