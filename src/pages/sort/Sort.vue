<template>
  <div id="container">
    <!-- 搜索 -->
    <Search />

    <!-- 分类 -->
    <div class="content">
      <!-- 侧边导航 -->
      <div class="left">
        <Sidebar :sortList="sortList" @getsiseId="getsiseId" />
      </div>
      <!-- 显示分类 -->
      <div class="right">
        <ShowSort :sortShow="sortShow" />
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@c/Search.vue";
import Sidebar from "./components/Sidebar.vue";
import ShowSort from "./components/ShowSort.vue";
import { getSortApi } from "../../api/sort";
import { getsiseIdApi } from "../../api/sort";
export default {
  components: {
    Search,
    Sidebar,
    ShowSort,
  },
  data() {
    return {
      sortList: [],
      sortShow: {},
    };
  },
  mounted() {
    //首屏
    this.getSort();
  },
  methods: {
    getsiseId(id) {
      getsiseIdApi({ id: id }).then((res) => {
        console.log("id返回的数据", res.data);
        if (res.errno === 0) {
          this.sortShow = res.data.currentCategory;
        }
      });
    },
    getSort() {
      getSortApi().then((res) => {
        console.log(res.data);
        if (res.errno === 0) {
          this.sortList = res.data.categoryList;
          console.log("分类列表的数据", res.data.categoryList);
          this.sortShow = res.data.currentCategory;
          console.log("分类内容的数据", res.data.currentCategory);
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
#container {
  height: 100%;
  .content {
    display: flex;
    height: calc(100vh - 54px - 50px);
    .left {
      height: 100%;
      width: 80px;
      background-color: #f7f8fa;
    }
    .right {
      width: calc(100vh - 80px);
      background-color: #fff;
      /deep/.van-divider {
        font-weight: bold;
        color: #000;
        ::after {
          border: 5px solid #000;
        }
      }
    }
  }
}
</style>