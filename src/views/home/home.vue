<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="nav-center">购物街</div></nav-bar>
    <tab-control class="tabControl1" :titles="ti" @tabClick="tabClick" ref="tabControl1" v-show="isTabFixed"></tab-control>

    <scroll class="content" ref="scroll" :probeType="3" :IsPullUp="true" @scroll="contentScroll" @PullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <home-recommend-view :recommend="recommend"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control class="tabControl2" :titles="ti" @tabClick="tabClick" ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top class="backtop" @click.native="backClick" v-show="!isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from './childeComps/HomeSwiper.vue';
import HomeRecommendView from './childeComps/HomeRecommendView.vue';
import FeatureView from './childeComps/FeatureView.vue';
import tabControl from '../../components/content/tabControl/tabControl.vue';
import GoodsList from '../../components/content/goods/GoodsList.vue';
import Scroll from '../../components/common/scroll/Scroll.vue';
import BackTop from '../../components/content/backTop/BackTop.vue';

import NavBar from 'components/common/navbar/NavBar.vue';
import { getHomeMultidata, getHomeGoods } from '../../network/home.js';
import { debounce } from '../../common/utils.js';

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
      currentType: 'pop',
      isShowBackTop: null,
      taboffsetTop: 0,
      isTabFixed: false,
      SaveY:0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },

  methods: {
    //返回顶部的方法
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },

    contentScroll(position) {
      //返回顶部按钮的监测
      this.isShowBackTop = position.y > -1000;
      // console.log("检测位置:"+position.y)
      // console.log("直接获取位置:"+this.$refs.scroll.bscroll.y)
      //菜单吸附位置的监测
      this.isTabFixed = position.y < -this.taboffsetTop;
    },

    //tabControl传入的值
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
      this.$refs.tabControl1.currentIndex=index;
      this.$refs.tabControl2.currentIndex=index;
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
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.list);
        })
        .catch(err => {
          console.log(err);
        });
      this.goods[type].page += 1;
    },

    //上拉加载更多数据
    loadMore() {
      this.getHomeGoods(this.currentType);
      console.log('下拉加载更多!');
    },

    swiperImageLoad() {
      this.taboffsetTop = this.$refs.tabControl2.$el.offsetTop;
    }
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  //监听是否离开当前页面
  // activated(){
  //   console.log("aaaa");
  //   this.$refs.scroll.scrollTo(0,this.SaveY,0)
  //   this.$refs.scroll.refresh()
  // },
  //监听是否离开当前页面
  // deactivated(){
  //       this.SaveY=this.$refs.scroll.bscroll.y;
  // },
  mounted() {
    // //监听GoodListitem中图片加载完成
    // this.$bus.$on('itemImageLoad', () => {
    //   this.$refs.scroll.refresh();
    // });

    //调用utils方法里面的防抖函数，防止频繁调用
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on('itemImageLoad', () => {
      refresh();
    });

    //监听轮播图的图片加载完成
  }
};
</script>

<style scoped>
.home {
  /* padding-top: 44px; */
  /*  height: 100vh;
  position: relative; */
}
.home-nav {
  background-color: var(--color-tint);
  text-align: center;
  color: #f6f6f6;

  /*  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10; */
}
.tabControl1 {
  /*  position: sticky;
  top: 44px;
  background-color: var(--color-background);
  z-index: 9; */
  position: relative;
  z-index: 9;
  background-color: #f6f6f6;
}
.content {
  overflow: scroll;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;

  /* background-color: #FFFFFF; */
}
</style>
