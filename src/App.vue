<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/topic" icon="label-o">专题</van-tabbar-item>
      <van-tabbar-item to="/sort" icon="qr">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="logistics">购物车</van-tabbar-item>
      <van-tabbar-item to="/my" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  watch: {
    $route: {
      handler: "changActive",
      immediate: true,
    },
  },
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    changActive(router) {
      let act;
      switch (router.path) {
        case "/home":
          act = 0;
          break;
        case "/topic":
          act = 1;
          break;
        case "/sort":
          act = 2;
          break;
        case "/cart":
          act = 3;
          break;
        case "/my":
          act = 4;
          break;
      }
    },
  },
  computed: {
    // active: {
    //   get() {
    //     let act = 0;
    //     switch (this.$route.path) {
    //       case "/home":
    //         act = 0;
    //         break;
    //       case "/topic":
    //         act = 1;
    //         break;
    //       case "/sort":
    //         act = 2;
    //         break;
    //       case "/cart":
    //         act = 3;
    //         break;
    //       case "/my":
    //         act = 4;
    //         break;
    //     }
    //     return act;
    //   },
    //   set() {},
    // },
  },
};
</script>

<style lang="less">
@import url("./assets/style/reset.less");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #efefef;
  min-height: 100%;
}
html,
body {
  height: 100%;
  font-size: 100px;
  //! 1rem === 100px
}
</style>
