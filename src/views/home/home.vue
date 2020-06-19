<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="nav-center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommend="recommend"></home-recommend-view>
    <feature-view></feature-view>
    <tab-control class="tabControl" :titles="ti"></tab-control>

    <li v-for="item in 100">{{ item }}</li>
  </div>
</template>

<script>
import HomeSwiper from './childeComps/HomeSwiper.vue';
import HomeRecommendView from './childeComps/HomeRecommendView.vue';
import FeatureView from './childeComps/FeatureView.vue';
import tabControl from '../../components/content/tabControl/tabControl.vue';

import NavBar from 'components/common/navbar/NavBar.vue';
import { getHomeMultidata, getHomeGoods } from '../../network/home.js';

export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    tabControl
  },
  data() {
    return {
      banners: [],
      recommend: [],
      ti: ['流行', '新款', '精选'],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  methods: {
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
  }
};
</script>

<style>
.home {
  padding-top: 44px;
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
}
</style>
