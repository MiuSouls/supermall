<template>
  <div class="info" v-if="Object.keys(goodsParam).length!=0">
    <table v-for="taT in goodsParam.sizes">
      <tr v-for="trT in taT">
        <td v-for="tdT in trT">{{ tdT }}</td>
      </tr>
    </table>
    <table>
      <tr v-for="trB in goodsParam.infos">
        <td class="info-key">{{ trB.key }}</td>
        <td class="info-value">{{ trB.value }}</td>
      </tr>
    </table>
   <div class="info-img" v-if="goodsParam.image.length !== 0">
      <img :src="goodsParam.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfos',
  props: {
    goodsParam: {
      type: Object
    }
  }
};
</script>


<style scoped>
.info{
  font-size: 15px;
  margin: 10px;
}
.info table{
  border-collapse: collapse;
  width: 100%;
}
.info table tr{
  height: 40px;
}
.info table tr td{
  border-bottom: 1px solid rgba(100,100,100,.3);
}
.info-key{
  width: 95px;
}
.info-value{
  color: var(--color-high-text);
}
</style>
