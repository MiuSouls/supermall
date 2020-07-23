<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link"></a>
        <img :src="item.image" @load="imageLoad"/>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index.js';
export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  data(){
    return{
      IsSwiper:false
    }
  },
  props: {
    banners: {
      type: Array
    }
  },
  methods:{
    imageLoad(){
      if(!this.IsSwiper){
          this.$emit('swiperImageLoad')
          this.IsSwiper=true;
      }
    }
  }
};
</script>

<style scoped></style>
