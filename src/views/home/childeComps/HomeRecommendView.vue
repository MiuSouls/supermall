<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
       <a :href="item.link">
         <img :src="item.image" />
         <dir>{{item.title}}</dir>
       </a>
     </div>
  </div>
</template>

<script>
export default{
	name:"HomeRecommendView",
  props:{
    recommend:{
      type:Array
    }
  }
}
</script>

<style scoped>
.recommend{
   display: flex;
   text-align: center;
   font-size: 13px;
   padding: 15px 0 15px 0;
   border-bottom:8px solid #eee;
}
.recommend-item{
  flex:1;
}
.recommend-item img{
  height: 65px;
}

</style>
