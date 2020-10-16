<template>
  <div class="shop-info" v-if="Object.keys(shopData).length != 0">
    <!-- top -->
    <div class="shop-top">
      <img :src="shopData.logo" />
      <span>{{ shopData.name }}</span>
    </div>
    <!-- middle -->
    <div class="shop-middle">
      <div class="shop-middle-left shop-middle-item">
        <div class="info-sells">
          <div class="sells-count">{{ shopData.sells | sellCountFilter }}</div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">{{ shopData.goodsCount }}</div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-right shop-middle-item">
        <table>
          <tr v-for="item in shopData.score">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-Is': item.isBetter }">{{ item.score }}</td>
          <td>
              <span class="better" :class="{ 'better-Is': item.isBetter }">{{ item.isBetter ? '高' : '低' }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <!-- bottom -->
    <div class="shop-bottom"><div class="enter-shop">进店逛逛</div></div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopData: {
      type: Object
    }
  },
  filters: {
    sellCountFilter(num) {
      if (num < 10000) return num;
      return (num / 10000).toFixed(1) + '万';
    }
  }
};
</script>

<style scoped>
.shop-top {
  align-items: center;
  margin: 20px 30px;
  display: flex;
}
.shop-top img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: #666666 solid 1px;
}
.shop-top span {
  margin: 10px 0px 0 20px;
  font-size: 15px;
}
.shop-middle {
  margin-top: 15px;
  display: flex;
  align-items: center;
}
.shop-middle-item {
  flex: 1;
}
.shop-middle-left {
  display: flex;
  justify-content: space-evenly;
  color: #333;
  text-align: center;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.sells-count,
.goods-count {
  font-size: 15px;
}
.sells-text,
.goods-text {
  font-size: 14px;
  margin-top: 16px;
}

.shop-middle-right {
  display: flex;
  font-size: 13px;
}
.shop-middle-right table {
  margin-left: 30px;
  width: 160px;
}
.shop-middle-right table td {
  padding: 5px 0;
}
.score {
  color: #5ea732;
}
.score-Is {
  color: #f13e3a;
}
.better {
  color: #f6f6f6;
  background-color: #5ea732;
}
.better-Is {
  background-color: #f13e3a;
}
.shop-bottom {
  text-align: center;
  margin-top: 10px;
}
.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>

<!-- <template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shopData.logo">
      <span class="title">{{shopData.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shopData.sells | sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shopData.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shopData.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
   <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
	export default {
		name: "DetailShopInfo",
    props: {
		  shopData: {
		    type: Object,
        default() {
		      return {}
        }
      }
    },
    filters: {
      sellCountFilter: function (value) {
        if (value < 10000) return value;
        return (value/10000).toFixed(1) + '万'
      }
    }
	}
</script>

<style scoped>
  .shop-info {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .shop-top {
    line-height: 45px;
    /* 让元素垂直中心对齐 */
    display: flex;
    align-items: center;
  }

  .shop-top img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.1);
  }

  .shop-top .title {
    margin-left: 10px;
    vertical-align: center;
  }

  .shop-middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
  }

  .shop-middle-item {
    flex: 1;
  }

  .shop-middle-left {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
  }

  .sells-count, .goods-count {
    font-size: 18px;
  }

  .sells-text, .goods-text {
    margin-top: 10px;
    font-size: 12px;
  }

  .shop-middle-right {
    font-size: 13px;
    color: #333;
  }

  .shop-middle-right table {
    width: 120px;
    margin-left: 30px;
  }

  .shop-middle-right table td {
    padding: 5px 0;
  }

  .shop-middle-right .score {
    color: #5ea732;
  }

  .shop-middle-right .score-better {
    color: #f13e3a;
  }

  .shop-middle-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .shop-middle-right .better-more span {
    background-color: #f13e3a;
  }

  .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }

  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>
 -->
