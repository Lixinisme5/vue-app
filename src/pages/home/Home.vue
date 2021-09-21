<template>
  <div id="container">
    <!-- 搜索 -->
    <Search />
    <!-- 轮播 -->
    <Carousel :banner="banner" />
    <!-- icon -->
    <Icon :channel="channel" />
    <!-- 品牌制造 -->
    <!-- 新品首发 -->
    <!-- 人气推荐 -->
    <!-- 专题精选 -->
    <!-- 产品列表 -->

    <!-- 搜索跳转 -->
    <transition name="van-slide-right">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Search from "@c/Search.vue";
import Carousel from "./components/Carousel.vue";
import Icon from "./components/Icon.vue";
import { getDateApi } from "../../api/home";
export default {
  components: {
    Search,
    Carousel,
    Icon,
  },
  data() {
    return {
      banner: "",
      channel: "",
    };
  },
  mounted() {
    //todo 首屏
    this.getDate();
  },
  methods: {
    getDate() {
      getDateApi().then((res) => {
        if (res.errno === 0) {
          this.banner = res.data.banner;
          console.log("首页返回的数据", res.data);
          this.channel = res.data.channel;
        }
      });
    },
  },
};
</script>

<style>
</style>