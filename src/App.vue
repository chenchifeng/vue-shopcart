<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
  // 引入组件
import AppFooter from '@/components/Footer'
export default {
  name: 'App',
  components: {
    AppFooter
  }
}
</script>

<style lang="less">
// 在这里引入的可以在其他子组件都能使用
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/close.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
