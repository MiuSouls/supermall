<template>
  <div class="cart-bar">
    <check-button class="check-btn" @click.native="SelectAllBtn" :check="IsSelectAll"/>
    <span>全选</span>
    <span class="cart-money">合计:{{totalPrice}}</span>
    <div class="cart-submit">去结算({{ totalNumber }})</div>
  </div>
</template>

<script>
  import checkButton from '../../../components/content/checkButton/checkButton.vue'

export default {
  name: 'CartButtonBar',

  components:{
    checkButton,
  },
  computed:{
    //合计商品的钱
    totalPrice(){
      let money=0;
      let cList=this.$store.state.cartList;
      for(let item of cList){
        if(item.check==true){
          money+=parseInt(item.price.substring(1,item.price.length)*item.count)
        }
      }
      return money.toFixed(2);
    },
    // 结算数量
    totalNumber(){
      let Lnum=0;
      let cList=this.$store.state.cartList;
      for(let item of cList){
        if(item.check==true){
          Lnum++
        }
      }
      return Lnum;
    },
    IsSelectAll(){
      let cList=this.$store.state.cartList;
      if(cList.length===0) return false
      return !cList.find(item=>!item.check)
    }
  },
  methods:{
    SelectAllBtn(){
      let cList=this.$store.state.cartList;
       if(this.IsSelectAll){
          for(let item of cList){
            item.check=false;
          }
       }else{
          for(let item of cList){
            item.check=true;
          }
       }
    }
  },
};
</script>

<style scoped>
.cart-bar {
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: #dedede;
  border-top: #aaa 1px solid;
  height: 32px;
  font-size: 15px;
  display: flex;
  align-items: center;
}
.check-btn{
  display:inline;
  margin:0 7px 0 12px;
}
.cart-money{
  margin-left:25px;
  flex: 1;
}
.cart-submit{
  text-align: center;
  line-height: 30px;
  display: inline;
  background-color: #ff790c;
  width: 100px;
  height: 32px;
}
</style>
