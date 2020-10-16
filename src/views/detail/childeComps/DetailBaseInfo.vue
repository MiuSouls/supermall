<template>
  <div v-if="Object.keys(detailContent).length != 0" class="base-info">
    <div class="info-title">
      <span>{{ detailContent.title }}</span>
    </div>
    <div class="info-price">
      <span class="n-price">{{ detailContent.realPrice }}</span>
      <span class="o-price">{{ detailContent.oldPrice }}</span>
      <span v-if="detailContent.discount" class="discount">{{ detailContent.discount }}</span>
    </div>
    <div class="info-other">
      <span class="info-other-item">{{ detailContent.columns[0] }}</span>
      <span class="info-other-item">{{ detailContent.columns[1] }}</span>
      <span class="info-other-item">{{ detailContent.services[detailContent.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in detailContent.services.length - 1">
        <img :src="detailContent.services[index - 1].icon" />
        <span>{{ detailContent.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    detailContent: {
      type: Object
    }
  },
  mounted() {}
};
</script>

<style scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.info-title {
  color: #222;
}
.info-price {
  margin-top: 10px;
}
.info-price .n-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.info-price .o-price {
  font-size: 13px;
  margin-left: 10px;
  text-decoration: line-through;
}
.discount {
  background-color: var(--color-high-text);
  font-size: 14px;
  width: 250px;
  height: 150px;
  margin: 20px;
  border-radius: 25px;
  color: #f6f6f6;
}
.info-other {
  display: flex;
  margin-top: 23px;
  margin-left: 0;
  margin-right: 0;
  font-size: 13px;
  text-align: center;
}
.info-other span {
  text-align: left;
  flex: 1;
}

.info-other-item + .info-other-item {
  margin-left: 75px;
}
.info-service {
  margin-top: 18px;
  display: flex;
  overflow: hidden;
}
.info-service-item {
  flex: 1;
  font-size: 14px;
}
.info-service-item img {
  height: 13px;
  width: 13px;
}
</style>
