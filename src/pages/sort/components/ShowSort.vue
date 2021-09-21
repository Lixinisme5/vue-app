<template>
  <div id="container">
    <img :src="sortShow.banner_url" alt="" />
    <van-divider>{{ sortShow.name }}</van-divider>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="(item, index) in sortShow.subCategoryList"
        :key="index"
        :icon="item.wap_banner_url"
        :text="item.name"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  props: ["sortShow"],
};
</script>

<style lang="less" scoped>
#container {
  img {
    width: 2.95rem;
  }
}
</style>