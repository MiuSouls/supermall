<template>
  <div class="warpper" ref="warpper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'
export default{
	name:"Scroll",
  data(){
    return{
      bscroll:null
    }
  },
  mounted() {
      this.bscroll=new Bscroll(this.$refs.warpper,{
        click:true
    })
  },
  methods:{
    scrollTo(x,y,time){
      this.bscroll.scrollTo(x,y,time);
    }
  }
}
</script>

<style scoped>
  .warpper{
    overflow: scroll;
  }
</style>
