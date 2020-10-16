<template>
  <div class="CInfo" v-if="Object.keys(commentInfo).length!=0">
    <!-- 上 -->
    <div class="Cinfo-top">
      <div class="top-left">用户评价</div>
      <div class="top-right">更多</div>
    </div>
    <!-- 中 -->
    <div class="Cinfo-middle">
      <img :src="commentInfo.user.avatar"/>
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <!-- 下 -->
    <div class="Cinfo-bottom">
      <span>{{commentInfo.content}}</span>
      <div class="Cifo-style">
        <span>{{commentInfo.created|ShowData}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="Cinfo-imgs">
        <img v-for="item in commentInfo.images" :src="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object
    }
  },
  filters:{
    ShowData(value){
      const date=new Date(value*1000)
      return date
    }
  }
};
</script>

<style scoped>
.Cinfo{

}
.Cinfo-top{
  display: flex;
  font-size: 15px;
  margin: 20px 20px;
}
.Cinfo-top .top-left{
  flex: 1;
}
.Cinfo-top .top-right{
  flex: 1;
  text-align: right;
}
.Cinfo-middle{
  display: flex;
  align-items: center;
  margin: 0 14px;
  border-top: solid rgba(100,100,100,.3) 1px;
}
.Cinfo-middle img{
  margin: 10px 10px;
  height: 45px;
  width: 45px;
  border-radius: 50%;
}
.Cinfo-middle span{
  margin-left: 10px;
}
.Cinfo-bottom{
  margin:10px 20px ;
  font-size: 15px;
  color: #666666
}
.Cifo-style{
  margin: 6px 0;
  font-size: 10px;
}
.Cinfo-imgs{
  margin: 10px 0;
}
.Cinfo-imgs img{
  height: 100px;
  width: 100px;
}
</style>
