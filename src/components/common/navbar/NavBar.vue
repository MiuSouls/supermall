<template>
  <div class="nav-bar">
    <div class="nav-left"><slot name="nav-left"></slot></div>
    <div class="nav-center"><slot name="nav-center"></slot></div>
    <div class="nav-right"><slot name="nav-right"></slot></div>
  </div>
</template>

<script>
export default{
	name:"NavBar"

}
</script>

<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
  }
  .nav-right,.nav-left{
    width: 60px;
    /* background-color: #42B983; */
  }
  .nav-center{
    flex: 1;
    /* background-color: #FF5777; */
  }
</style>
