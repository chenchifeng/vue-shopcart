<!-- 模板页面 -->
<template>
  <div class="home">
    <tab>
      <tab-item selected @on-item-click="onItemClick">已发货</tab-item>
      <tab-item @on-item-click="onItemClick">未发货</tab-item>
      <tab-item @on-item-click="onItemClick">全部订单</tab-item>
  </tab>
    <el-button type="primary" @click="showMsg('你好啊!')">点击我吧</el-button>
    <group>
      <cell title="这是订单" value="value"></cell>
    </group>
  </div>
</template>

<!-- JS模块对象 -->
<script>

export default {
  name: 'Order',
  data() {
    return {}
  },
  methods: {
    showMsg (msg, type='text', position='middle') {
      this.$vux.toast.show({
        type: type,
        text: msg,
        position: position,
        time: 1000
      })
    },
    onItemClick (index) {
      console.log('on item click:', index)
    }
  },
  computed: {

  },
  components: {
  }
}
</script>

<!-- 样式, scoped代表样式只针对当前组件的模板页面 -->
<style scoped>

</style>
