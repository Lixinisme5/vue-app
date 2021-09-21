<template>
  <div id="container">
    <van-search
      v-model="search"
      :disabled="true"
      placeholder="请输入搜索关键词"
      @click="jumpToChild"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    jumpToChild() {
      this.$router.push("/home/searchchild");
    },
  },
};
</script>

<style lang="less" scoped>
#container {
  /deep/.van-search__content {
    border-radius: 10px;
  }
}
</style>