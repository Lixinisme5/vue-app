<template>
  <div id="container">
    <button @click="jumpToHome">回到首页</button>
  </div>
</template>

<script>
export default {
  methods: {
    jumpToHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scoped>
#container {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 2555, 0.8);
  z-index: 9999;
  button {
    position: absolute;
    top: 0.1rem;
    right: 0px;
    width: 0.6rem;
    height: 0.3rem;
    font-size: 0.14rem;
  }
}
</style>