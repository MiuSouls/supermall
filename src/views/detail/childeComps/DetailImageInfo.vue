<template>
  <div class="CommentInfo" v-if="Object.keys(detailInfo).length != 0">
    <div class="CommentInfo-span">{{ detailInfo.desc }}</div>
    <div>{{ detailInfo.detailImage[0].key }}</div>
    <div class="CommentInfo-img" v-for="item in detailInfo.detailImage[0].list"><img :src="item"   @load="imgLoad"/></div>
    <!-- <img :src="detailInfo.detailImage[0].list[0]" /> -->
  </div>
</template>

<script>
export default {
  name: 'DetailImageInfo',
  props: {
    detailInfo: {
      type: Object
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    };
  },

  methods: {
    imgLoad() {
      if (++this.counter === this.imagesLength) {
        this.$emit('imageLoad');
      }
    },
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detailInfo.detailImage[0].list.length;
    }
  }
};
</script>

<style scoped>
.CommentInfo {
}
.CommentInfo-span {
  margin: 10px 10px;
}
.CommentInfo-img img {
  width: 100%;
  height: 100%;
}
</style>
