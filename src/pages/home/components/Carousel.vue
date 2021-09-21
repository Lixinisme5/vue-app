<template>
  <div id="container">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banner" :key="index">
        <img :src="item.image_url" alt="" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: ["banner"],
};
</script>

<style lang="less" scoped>
#container {
  //!解决加载高度塌陷问题
  height: 0;
  padding-bottom: 2rem;
  .my-swipe .van-swipe-item {
    width: 3.75rem;
    height: 2rem;
    img {
      width: 3.75rem;
      height: 2rem;
    }
  }
}
</style>