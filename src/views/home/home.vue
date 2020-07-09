<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="nav-center">购物街</div></nav-bar>

    <scroll class="content" ref="scroll">
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend-view :recommend="recommend"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control class="tabControl" :titles="ti" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top class="backtop" @click.native="backClick"></back-top>



  </div>
</template>

<script>
import HomeSwiper from './childeComps/HomeSwiper.vue';
import HomeRecommendView from './childeComps/HomeRecommendView.vue';
import FeatureView from './childeComps/FeatureView.vue';
import tabControl from '../../components/content/tabControl/tabControl.vue';
import GoodsList from '../../components/content/goods/GoodsList.vue';
import Scroll from '../../components/common/scroll/Scroll.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'

import NavBar from 'components/common/navbar/NavBar.vue';
import { getHomeMultidata, getHomeGoods } from '../../network/home.js';

export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    tabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommend: [],
      ti: ['流行', '新款', '精选'],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType:'pop'
    };
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
    //返回顶部的方法
    backClick(){
      this.$refs.scroll.scrollTo(0,0,1000);
      // console.log("aaaaaa");
    },

    //tabControl传入的值
    tabClick(index){
      switch(index){
        case 0: this.currentType='pop'; break;
        case 1: this.currentType='new'; break;
        case 2: this.currentType='sell'; break;
      }
    },

    //请求轮播图和推荐的数据
    getHomeMultidata() {
      getHomeMultidata()
        .then(res => {
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
        .catch(err => {});
    },
    //请求TabControl的数据
    getHomeGoods(type) {
      const page=this.goods[type].page+1;
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.list)
        })
        .catch(err => {
          console.log(err);
        });
        this.goods[type].page+=1;
    }
  },

};
</script>

<style scoped>
.home {
  padding-top: 44px;
/*  height: 100vh;
  position: relative; */
}
.home-nav {
  background-color: var(--color-tint);
  text-align: center;
  color: #f6f6f6;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 10;
}
.tabControl {
  position: sticky;
  top: 44px;
  background-color: var(--color-background);
  z-index: 9;
}
.content{
  overflow: scroll;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;

}

</style>
