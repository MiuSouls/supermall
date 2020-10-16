<template>
  <div class="detail">
    <!-- 顶头菜单 -->
    <nav-bar>
      <div class="detail-left" slot="nav-left" @click="backClick"><img src="../../assets/images/common/back.svg" /></div>
      <div class="detail-center" slot="nav-center">
        <div class="detail-center-item" v-for="(item, index) in detailName" :class="{ action: currentIndex == index }" @click="titleClick(index)">{{ item }}</div>
      </div>
    </nav-bar>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <!-- 顶上的滚动图片 -->
      <div><detail-swiper :topItems="topItem" ref="baseinfo"></detail-swiper></div>
      <!-- 详细信息 -->
      <detail-base-info class="detail-base-info" :detailContent="detailContent"></detail-base-info>
      <!-- 商家信息 -->
      <detail-shop-info :shopData="detailshopInfo"></detail-shop-info>
      <!-- 商品详细图片 -->
      <detail-image-info :detailInfo="detailInfo" @imageLoad="imageLoad" ></detail-image-info>
      <!-- 数据信息 -->
      <detail-param-info :goodsParam="goodsParam" ref="baseinfo"></detail-param-info>
      <!-- 商品的评论 -->
      <detail-comment-info :commentInfo="commentInfo" ref="shopinfo"></detail-comment-info>
      <!-- 详情页推荐商品 -->
      <goods-list :goods="reCommend" ref="goodsinfo"></goods-list>
    </scroll>
    <detail-bottom-bar @AddShoppingCart="AddShoppingCart"></detail-bottom-bar>
    <div>aaaa</div>
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
    <toast :message="ToastData" v-show="IsToast"></toast>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue';
import DetailSwiper from './childeComps/DetailSwiper.vue';
import DetailBaseInfo from './childeComps/DetailBaseInfo.vue';
import DetailShopInfo from './childeComps/DetailShopInfo.vue';
import DetailImageInfo from './childeComps/DetailImageInfo.vue';
import DetailParamInfo from './childeComps/DetailParamInfo.vue';
import DetailCommentInfo from './childeComps/DetailCommentInfo.vue';
import GoodsList from '../../components/content/goods/GoodsList.vue'
import DetailBottomBar from './childeComps/DetailBottomBar.vue'

import Scroll from '../../components/common/scroll/Scroll.vue';
import BackTop from '../../components/content/backTop/BackTop.vue'
import Toast from '../../components/common/toast/Toast.vue'

import { Getdetail, DetailContent, ShopInfomation, GoodsParam, GetRecommend } from '../../network/detail.js';
import {debounce} from '../../common/utils.js'
import {itemListenerMixin} from '../../common/mixin.js'
export default {
  name: 'detail',
  components: {
    NavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailImageInfo,
    Scroll,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    BackTop,
    Toast
  },
  mixins:[itemListenerMixin],
  data() {
    return {
      detailName: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0,
      topItem: [],
      iid: null,
      detailContent: {},
      detailshopInfo: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      reCommend:[],
      // itemImgGoods:null,
      scrollY:[],
      getThemeTopY:null,
      isShowBackTop:false,
      ToastData:"",
      IsToast:false,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$refs.scroll.scrollTo(0,-this.scrollY[index],500)
    },
    backClick() {
      // console.log(this.$route.params.iid);
      this.$router.back();
    },
    //商品详情图片最后一张加载完之后回调刷新拿到新的高度
    imageLoad() {
      this.$refs.scroll.refresh();
      //获取位置
      this.getThemeTopY();
    },
    contentScroll(position){
      const positionY=-position.y
      //标题和内容的联动
      if(this.currentIndex!=0&&(positionY>this.scrollY[0]&&positionY<this.scrollY[1])){
        // console.log("位置0")
        this.currentIndex=0
      }else if(this.currentIndex!=1&&(positionY>this.scrollY[1]&&positionY<this.scrollY[2])){
        // console.log("位置1")
        this.currentIndex=1
      }else if(this.currentIndex!=2&&(positionY>this.scrollY[2]&&positionY<this.scrollY[3])){
        // console.log("位置2")
        this.currentIndex=2
      }else if(this.currentIndex!=3&&(positionY>this.scrollY[3])){
        // console.log("位置3")
        this.currentIndex=3
      }
      //根据位置确定返回顶部按钮显示和隐藏
      if(positionY>1000){
        this.isShowBackTop=true;
      }else{
        this.isShowBackTop=false;
      }

    },
    //返回顶部按钮
    backTop(){
      this.$refs.scroll.scrollTo(0,0,1000);
    },
    //添加购物车
    AddShoppingCart(){
      const product={};
      product.image=this.topItem[0];
      product.title=this.detailContent.title;
      product.desc=this.detailContent.desc;
      product.price=this.detailContent.oldPrice;
      product.iid=this.iid;
      product.check=true;
      //添加
      this.$store.dispatch("addCart",product).then(res=>{
        // console.log(res)
        console.log(NavBar.$el)
        this.ToastData=res
        this.IsToast=true
        setTimeout(()=>{
          this.IsToast=false
        },2000)
      })


    }

  },
  created() {
    //请求顶头图片数据
    this.iid = this.$route.params.iid;
    Getdetail(this.iid).then(res => {
      const da = res.result;
      // console.log(res);
      this.topItem = da.itemInfo.topImages;

      //请求详情数据
      this.detailContent = new DetailContent(da.itemInfo, da.shopInfo.services, da.columns);
      // console.log(this.detailContent)
      //请求商家信息
      this.detailshopInfo = new ShopInfomation(da.shopInfo);
      // console.log(this.detailshopInfo);
      //获取商品图信息的列表
      this.detailInfo = da.detailInfo;
      // console.log(this.detailInfo);
      //数据信息
      this.goodsParam = new GoodsParam(da.itemParams.info, da.itemParams.rule);
      // console.log(this.goodsParam)
      //商品的评论
      if (da.rate.cRate != 0) {
        this.commentInfo = da.rate.list[0];
      }
      // console.log(this.commentInfo);
      //详情页推荐
      GetRecommend().then(res => {
        this.reCommend=res.data.list;
        // console.log(res);
        // console.log(this.reCommend);
      });
    });

    //给getThemeTopY赋值
    this.getThemeTopY=debounce(()=>{
        this.scrollY.push(0);
        this.scrollY.push(this.$refs.baseinfo.$el.offsetTop);
        this.scrollY.push(this.$refs.shopinfo.$el.offsetTop);
        this.scrollY.push(this.$refs.goodsinfo.$el.offsetTop);
      },200)
  },
  mounted(){
  //(已混入)
    // const refresh=debounce(this.$refs.scroll.refresh,50);
    // this.itemImgGoods = () => {
    //   refresh();
    // }
    // this.$bus.$on('itemImageLoad', this.itemImgGoods);
  }
}
</script>

<style scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-left img {
  height: 18px;
  width: 18px;
  position: fixed;
  left: 15px;
  top: 14px;
}
.detail-center {
  display: flex;
}
.detail-center-item {
  flex: 1;
  font-size: 15px;
}
.action {
  color: var(--color-high-text);
}
.content {
  height: calc(100vh - 93px);
}
</style>
