<template>
  <div>
    <router-view></router-view>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
  import MainTabbar from './components/content/maintarbar/MainTarBar.vue'
export default {
  name: 'App',
  components:{
    MainTabbar
  }

}
</script>

<style>
	@import url("assets/css/base.css");
</style>
