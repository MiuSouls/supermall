<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners">
        <a :href="item.link"></a>
        <img :src="item.image" />
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
  props: {
    banners: {
      type: Array
    }
  }
};
</script>

<style scoped></style>
