<template>
  <div id="container">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item
        v-for="(item, index) in sortList"
        :key="index"
        :title="item.name"
        @click="side(item.id)"
      />
    </van-sidebar>
  </div>
</template> 

<script>
export default {
  props: ["sortList"],
  data() {
    return {
      activeKey: 0,
    };
  },
  methods: {
    side(id) {
      console.log(id);
      this.$emit("getsiseId", id);
    },
  },
};
</script>

<style lang="less" scoped>
#container {
  /deep/van-sidebar {
    height: 100%;
  }
}
</style>