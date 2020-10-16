<template>
  <div class="layout">
    <!-- top -->
    <div class="top">
     <nav-bar>
        <div class="nav-left" slot="nav-left" ><img src="../../assets/images/category/scan.png"/></div>
        <input class="nav-center" slot="nav-center" />
        <div class="nav-right" slot="nav-right"><img src="../../assets/images/category/news.png" ></div>
      </nav-bar>
    </div>

    <div class="middle">
      <!-- middle-left -->
      <scroll class="Cscroll middle-left">
        <div>
            <ul>
              <li v-for="(item, index) in list" :class="{IsSelect:IsNO==index}" @click="IsSeBttom(index)">
                <a>{{ item }}</a>
              </li>
             </ul>
        </div>
      </scroll>


      <!-- middle-right -->
      <scroll class="middle-right">
        <div>
          <goods-list :goods="goods"></goods-list>
        </div>
      </scroll>
    </div>

  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue';
import GoodsList from '../../components/content/goods/GoodsList.vue'
import {GetRecommend} from '../../network/detail.js'
import scroll from '../../components/common/scroll/Scroll.vue'
export default {
  name: 'category',
  components: {
    NavBar,
    GoodsList,
    scroll
  },
  data() {
    return {
      IsNO:0,
      goods:[],
      list: [
        '热门推荐',
        '潮流女装',
        '品牌男装',
        '内衣配饰',
        '家用电器',
        '电脑办公',
        '手机数码',
        '母婴频道',
        '图书',
        '家居家纺',
        '潮流女装',
        '品牌男装',
        '内衣配饰',
        '家用电器',
        '电脑办公',
        '手机数码',
        '母婴频道',
        '二手商品',
        '工业品',
        '生活旅游',
        '图文娱乐',
        '宠物生活',
        '礼品鲜花',
        '家具装束',
        '汽车生活',
        '家具厨具',
        '拍卖活动',
        '杂货用品'
      ]
    };
  },
  methods:{
    IsSeBttom(index){
      this.IsNO=index;
    }
  },
  created() {
    GetRecommend().then(res=>{
      // console.log(res)
      this.goods=res.data.list
    })
  }
};
</script>

<style scoped>
.layout{
  overflow: hidden;
}
.top{
  background-color:var(--color-tint);
  display: absolute;

}
.nav-left, .nav-right{
  text-align: center;
}
.nav-left img{
  height: 30px;
  width: 30px;
  vertical-align: middle;
}
.nav-right img{
  height: 30px;
  width: 30px;
  vertical-align: middle;
}
.nav-center{
  width: 100%;
}
.middle{
  display: flex;
  /* height: 100vh; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.middle-left{
  flex: 3;
  background-color: #e7e7e7;
}
.middle-left li{
  text-align: center;
  font-size: 14px;
  line-height: 30px;
}
.middle-right{
  flex: 6;
  background-color:#f3f3f3;
}
.IsSelect{
  background-color: #f3f3f3;
}
.Cscroll{

}
</style>
