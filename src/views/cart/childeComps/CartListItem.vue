<template>
  <div class="Cart">
    <check-button  class="button" @click.native="SelectBtn" :check="product.check"></check-button>
    <div class="left ">
      <div class="left-img">
        <img :src="product.image" />
      </div>
      </div>
    <div class="right ">
      <div class="right-top display-flex">{{product.title}}</div>
      <div class="right-middle display-flex">{{product.desc}}</div>
      <div class="right-bottom display-flex">
        <span class="bottom-left display-flex">{{product.price}}</span>
        <span class="bottom-right display-flex">x{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import checkButton from '../../../components/content/checkButton/checkButton.vue'
export default{
	name:"CartListItem",
  props:{
    product:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{
      IsAll:true
    }
  },
  created() {
    console.log(this.product)
  },
  components:{
    checkButton,
  },
  methods:{
    SelectBtn(){
      //按钮选择状态
      this.product.check=!this.product.check

      if(this.IsAll){
        this.$bus.$emit('CheckSelectAll')
      }
      this.CheckIsNo()

    },
    CheckIsNo(){
      //单个点击的时候遍历是否都选择来觉得全选按钮
      let cList=this.$store.state.cartList;
      let IsNo=true
      for(let item of cList){
        if(item.check==false){
          IsNo=false
        }
      }
      if(IsNo){
        this.$bus.$emit('IsNo')
      }
    }

  },

}
</script>

<style scoped>
.Cart {
  display: flex;
  height: 100px;
  border-bottom: solid #666666 1px;
}
.button{
  /* width: 20px; */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left {
  flex: 3;
}
.left-img{
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left img {
  border-radius: 5%;
  width: 80px;
  height: 90px;
}
.right {
  flex: 6;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.right-top {
  margin-top: 6px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.right-middle {
  margin-bottom: 5px;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.right-bottom {
  display: flex;
}
.bottom-left {
  color: #da6c44;
  font-weight: bold;
}
.bottom-right {
  text-align: center;
}
.display-flex {
  flex: 1;
}
</style>
