import {debounce} from './utils.js'

export const itemListenerMixin={
  data(){
    return{
      itemImgGoods:null,
    }
  },
  mounted(){
    const refresh=debounce(this.$refs.scroll.refresh,50);
    this.itemImgGoods = () => {
      refresh();
    }
    this.$bus.$on('itemImageLoad', this.itemImgGoods);
    // console.log("混入其中!")
  }
}
