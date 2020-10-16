<template>
  <div>
    <!-- 顶 -->
    <nav-bar class="bar">
      <!-- // 第一种写法: -->
      <div slot="nav-center">购物车({{ cartLength }})</div>
      <!-- // 第二种写法: -->
      <!-- <div slot="nav-center">购物车({{ length }})</div> -->

      <!-- 中 -->
    </nav-bar>
   <scroll class="content" ref="scroll">
      <cart-list></cart-list>
    </scroll>

    <!-- 下 -->
    <cart-button-bar></cart-button-bar>

  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue';
import CartList from './childeComps/CartList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import CartButtonBar from './childeComps/CartButtonBar.vue'

import {mapGetters} from 'vuex'

export default {
  name: 'cart',
  components: {
    NavBar,
    CartList,
    Scroll,
    CartButtonBar,

  },
  data() {
    return {
    };
  },
  computed:{
    ...mapGetters(
    // 第一种写法:
    ['cartLength']
    // 第二种写法:
    // {length:'cartLength'}
    )
  },
  methods:{

  },
  activated(){
    // this.$refs.scroll.refresh();
  },
};
</script>

<style scoped>
.bar {
  background-color: var(--color-tint);
  text-align: center;
  color: #fff;
}
.content{
  position: absolute;
  top: 44px;
  bottom: 81px;
  left: 0;
  right: 0;
}
</style>
