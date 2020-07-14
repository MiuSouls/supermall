<template>
  <div class="warpper" ref="warpper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
export default {
  name: 'Scroll',
  data() {
    return {
      bscroll: null
    };
  },
  methods: {
    //返回顶部的方法的封装
    scrollTo(x, y, time) {
      this.bscroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.bscroll.finishPullUp();
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    IsPullUp: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.bscroll = new Bscroll(this.$refs.warpper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.IsPullUp
    });

    this.bscroll.on('scroll', position => {
      this.$emit('scroll', position);
    }),
      this.bscroll.on('pullingUp', () => {
        this.$emit('PullingUp');
        this.finishPullUp();
      });
  }
};
</script>

<style scoped>
.warpper {
  overflow: scroll;
}
</style>
