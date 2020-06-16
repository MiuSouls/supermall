<template>
  <div class="tabControl">
    <div v-for="(item,index) in titles"  class="tabControl-item"
        :class="{active:index===currentIndex}" 
        @click="itemChlick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default{
	name:"tabControl",
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex:0
    }
  },
  methods:{
    itemChlick(index){
      this.currentIndex=index;
    }
  }
}
</script>

<style scoped>
  .tabControl{
    display: flex;
    font-size: 15px;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
  .tabControl-item{
    flex: 1;
  }
  .tabControl-item span{
    padding: 4px;
  }
  .active{
    color:var(--color-high-text)
  }
  .active span{
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
