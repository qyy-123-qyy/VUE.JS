<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
   <!-- 在index.js将mode改成history ,默认是hash-->
    <!-- <a href="/">首页</a>
    <a href="/page">page页面</a> -->
    
     <!-- 默认hash -->
    <!-- <a href="#/">首页</a>
    <a href="#/page">page页面</a> 
    -->
    <!-- <router-link to="/" exact>首页</router-link>
    <router-link to="/page">page</router-link>
    <router-link to="/work">work</router-link>
    <router-link to="/first">first</router-link> -->


    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
/* 给跳转到的页面加样式 */
/* 默认样式 */
.router-link-active{
  background-color: pink;
}
/* 全局激活样式在index.js里  linkExactActiveClass:'actives', */
.actives{
  font-size: 30px;
  font-weight: bold;
  background-color: powderblue;
  padding: 10px;
}
</style>
