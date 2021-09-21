<template>
  <div id="container">
    <van-grid column-num="5">
      <van-grid-item
        v-for="(item, index) in channel"
        :key="index"
        :icon="item.icon_url"
        :text="item.name"
      />
    </van-grid>
  </div>
</template>

<script>
export default {
  props: ["channel"],
};
</script>

<style>
</style>