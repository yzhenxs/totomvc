<template>
  <div id="app">
     <!-- 头部 -->
    <div class="header">头部

      <router-link to="/one">one</router-link>
      <router-link to="/two">two</router-link>
      <router-link to="/three">three</router-link>
    </div>
     <!-- 中间路由 -->
    <router-view></router-view>
     <!-- 底部 -->
    <div class="footer">底部</div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
@import '../static/css/style.css';
</style>
