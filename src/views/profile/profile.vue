<template>
  <div class="conte">
      <div class="us1">
        <span class="us1-t">我的档案</span>
        <div class="us1-b">
          <div  class="us1-b-left"><img src="../../assets/images/profile/avatar.svg"/></div>
          <div class="us1-b-middle">
            <div class="us1-t1">登录/注册</div>
            <div class="us1-t2">暂无绑定手机号</div>
          </div>
          <div class="us1-b-right"><img src="../../assets/images/profile/more.svg"/></div>
        </div>
      </div>
      <div class="us2">
        <div class="us2-left">
          <span class="spanColor">0.00</span><span>元</span>
          <div>我的余额</div>
        </div>
        <div class="us2-middle">
          <span class="spanColor">0</span><span>个</span>
          <div>我的优惠</div>
        </div>
        <div class="us2-right">
          <span class="spanColor">0</span><span>分</span>
          <div>我的积分</div>
        </div>
      </div>
      <div class="us3">
        <div>
          <img src="../../assets/images/profile/message.svg"/>
          <span>我的消息</span>
        </div>
        <div>
          <img src="../../assets/images/profile/pointer.svg"/>
          <span>积分商城</span>
        </div>
        <div>
          <img src="../../assets/images/profile/vip.svg"/>
          <span>会员卡</span>
        </div>
      </div>
      <div class="us4">
        <div>
          <img src="../../assets/images/profile/cart.svg"/>
          <span>我的购物车</span>
        </div>
        <div>
          <img src="../../assets/images/profile/shopping.svg"/>
          <span>下载购物</span>
        </div>
      </div>
  </div>
</template>

<script>
export default{
	name:"profile",

}
</script>

<style scoped>
 .conte{
    font-size: 13px;
 }
 .us1{
  height: 100px;
  text-align: center;
  background-color:var(--color-tint);
 }
 .us1-t{
  line-height: 40px;
  height: 30px;
  color: #E7E7E7;
  font-size: 17px;
 }
 .us1-b{
  display: flex;
  height: 70px;
 }
 .us1-b-left img{
   margin:0 10px;
   height: 55px;
   width: 55px;
   flex:3
 }
 .us1-b-middle{
   flex:5;
   margin:13px 0 0 10px;
   color: #E7E7E7;
   text-align: left;
 }
 .us1-b-right img{
   display:inline;
   height: 30px;
   width: 30px;
   flex:3;
   margin-top: 10px;
 }
 .us2{
  height: 70px;
  display: flex;
  text-align: center;
  background-color:#F6F6F6;
  box-shadow:0px 15px  rgba(100,100,100,0.2);
 }
 .us2-left{
   flex: 1;
   padding-top: 20px;
   border-right: rgba(100,100,100,0.2) 2px solid;
 }
.us2-middle{
  flex: 1;
  padding-top: 20px;
  border-right: rgba(100,100,100,0.2) 2px solid;
}
.us2-right{
  flex: 1;
  padding-top: 20px;
}
.spanColor{
  color: #FF5777;
  font-size: 19px;
}
 .us3{
  padding-top: 5px;
  margin-top: 15px;
  height: 100px;
  text-align: left;
  line-height: 30px;
  background-color:#F6F6F6;
  box-shadow:0px 15px  rgba(100,100,100,0.2);
 }
 .us3 div{
   border-bottom: rgba(100,100,100,0.2) 1px solid;
 }
 .us3 img, .us4 img{
   width: 20px;
   height: 20px;
   margin:0 10px 0 10px;
   vertical-align: middle;
 }
 .us3 span{
   vertical-align: middle;
   font-size: 12px;
 }
 .us4{
  margin-top: 30px;
  height: 80px;
  text-align: left;
  line-height: 30px;
  position: absolute;
  top: 270px;
  bottom: 0;
  left: 0;
  right: 0;
 }
</style>
