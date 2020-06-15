<template>
  <div class="home">
  <nav-bar class="home-nav"><div slot="nav-center">购物街</div></nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <home-recommend-view :recommend="recommend"></home-recommend-view>
  <feature-view></feature-view>
  <li v-for="item in 10">{{item}}</li>
  </div>
</template>

<script>
 import HomeSwiper from './childeComps/HomeSwiper.vue'
 import HomeRecommendView from './childeComps/HomeRecommendView.vue'
 import FeatureView from './childeComps/FeatureView.vue'

import NavBar from 'components/common/navbar/NavBar.vue'
 import {getHomeMultidata} from '../../network/home.js'

export default{
	name:"home",
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView
  },
  data(){
    return{
      banners:[],
      recommend:[]
    }
  },
  created(){
    getHomeMultidata()
    .then(res=>{
      this.banners=res.data.banner.list;
      this.recommend=res.data.recommend.list
      console.log(res);
    })
    .catch(err=>{

    })
  }
}
</script>

<style>
  .home{
    padding-top: 44px;
  }
  .home-nav{
    background-color:var(--color-tint);
    text-align: center;
    color: #F6F6F6;
   position: fixed;
    top:0;
    left: 0;
    right: 0;

    z-index: 10;
  }
</style>
