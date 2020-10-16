<template>
  <div class="check">
    <img class="IsCC" :class="{ IsCheck: check }" src="~assets/images/cart/tick.svg" />
  </div>
</template>

<script>
export default {
  name: 'checkButton',
  props: {
    check: {
      type: Boolean,
      default:false
    }
  }
};
</script>

<style scoped>
.check img {
  border-radius: 50%;
  position: relative;
  left: 0;
  right: 0;
  top: 1px;
  bottom: 0;
}
.IsCC {
  border: solid #aaa 2px;
}
.IsCheck {
  background-color: red;
  border-color: red;
}
</style>
