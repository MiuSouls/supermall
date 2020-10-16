<template>
  <div class="warpper" ref="warpper">
    <div class="content">
      <slot>
        
      </slot>
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
    //上拉加载更多
    finishPullUp() {
      this.bscroll.finishPullUp();
    },
    //刷新
    refresh() {
      // this.scroll&&this.scroll.refresh()
      this.bscroll.refresh();
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
    // 发送上下滚动的位置信息事件
    this.bscroll.on('scroll', position => {
      this.$emit('scroll', position);
    }),
    // 发送下拉加载更多信息的事件
    this.bscroll.on('pullingUp', () => {
      this.$emit('PullingUp');
      //允许多次使用下拉加载
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
