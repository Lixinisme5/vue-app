<template>
  <div id="container">
    <van-submit-bar :price="money" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import Bus from "../Bus";
export default {
  props: ["money"],
  data() {
    return {
      checked: false,
    };
  },
  watch: {
    checked: {
      handler: (check) => {
        Bus.$emit("checkAll", check);
      },
    },
  },
  methods: {
    mycheckAll(bool) {
      this.checked = bool;
    },
    onSubmit() {},
  },
};
</script>
<style lang="less" scoped>
#container {
  height: 100%;
  /deep/.van-submit-bar {
    position: fixed;
    bottom: 50px;
  }
}
</style>