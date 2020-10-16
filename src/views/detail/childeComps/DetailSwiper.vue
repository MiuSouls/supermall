<template>
  <div>
    <swiper>
      <swiper-item class="detail-Swiperitem" v-for="item in topItems">
        <img :src="item"/>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper/index.js';
export default{
	name:"DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props:{
    topItems:{
      type:Array
    }
  }
}
</script>

<style scoped>
 .detail-Swiperitem{
    height: 300px;
    overflow:hidden;  
 }
</style>
