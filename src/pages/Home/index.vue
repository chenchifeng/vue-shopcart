<!-- 模板页面 -->
<template>
  <div class="home">
    <el-button type="primary" @click="showMsg('你好啊!')">点击我吧</el-button>
    <group>
      <cell title="这是首页" value="value"></cell>
    </group>
  </div>
</template>

<!-- JS模块对象 -->
<script>

export default {
  name: 'HelloWorld',
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
