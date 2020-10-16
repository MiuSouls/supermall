<template>
  <div class="bottom-bar">
    <!-- left -->
    <div class="left">
      <div class="left-bar">
        <img  class="left-img" src="~assets/images/detail/kf.png"/>
        <div>客服</div>
      </div>
      <div class="left-bar">
         <img class="left-img" src="~assets/images/detail/dp.png"/>
        <div>店铺</div>
      </div>
      <div class="left-bar">
         <img class="left-img" src="~assets/images/detail/sc.png"/>
        <div>收藏</div>
      </div>
    </div>
    <!-- right -->
    <div class="bar-right">
      <div class="right-gwc" @click="AddCart">加入购物车</div>
      <div class="right-gm">购买</div>
    </div>
  </div>
</template>

<script>
export default{
	name:"DetailBottomBar",
  methods:{
    AddCart(){
      this.$emit("AddShoppingCart")
    }
  }

}
</script>

<style scoped>
  .bottom-bar{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    display: flex;
    text-align: center;
  }
  .left{
    flex: 1;
    display: flex;
    font-size: 14px;
    background-color: #EEEEEE;
  }
  .left-bar{
    margin-top: 3px;
    flex: 1;
  }
  .left-img{
    height: 25px;
    width: 25px;
  }
  .bar-right{
    flex: 1;
    display: flex;
    font-size: 14px;
    line-height: 49px;
  }
  .right-gwc{
    flex: 1;
    background-color: #fff737;
    text-align: center;
    color: #666;

  }
  .right-gm{
    flex: 1;
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
