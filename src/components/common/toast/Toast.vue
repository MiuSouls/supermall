<template>
  <div class="toast">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default{
	name:"Toast",
  props:{
    message:{
      type:String,
      default:""
    }
  }

}
</script>

<style scoped>
.toast{
  position: fixed;
/*  top: 50%;
  left: 50%; */
  top: 50vh;
  left: 50vw;
  transform:translate(-50%,-50%);
  padding: 6px;

  color: #EEEEEE;
  background-color: rgb(0,0,0,.6);
}
</style>
