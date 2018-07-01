// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入Element-UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 引入VUX
import { Group, Cell, Popup, Toast, ToastPlugin, Tab, TabItem, Tabbar, TabbarItem } from 'vux'
Vue.component(Cell.name, Cell)    // 这里是全局引用组件, 这一句相当于Vue.component('cell', Cell);
Vue.component(Group.name, Group)
Vue.component('popup', Popup)
Vue.component('toast', Toast)
Vue.use(ToastPlugin);  //plugin形式使用
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)

//引入css
import './assets/styles/reset.css'


Vue.config.productionTip = false

/* eslint-disable  no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
