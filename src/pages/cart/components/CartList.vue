<template>
  <div id="container">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-checkbox-group v-model="result">
        <van-cell v-for="item in cartList" :key="item.goods_id">
          <div class="car">
            <van-checkbox
              @click="changeCheck"
              :name="item.goods_id"
            ></van-checkbox>
            <van-card
              :num="item.number"
              :price="item.retail_price"
              :title="item.goods_name"
              :thumb="item.list_pic_url"
            />
          </div>
        </van-cell>
      </van-checkbox-group>
    </van-list>
  </div>
</template>

<script>
import Bus from "../Bus";
export default {
  props: ["cartList"],
  data() {
    return {
      loading: false,
      finished: false,
      //!选中的值
      result: [],
      //! 价格
      priceAll: 0,
    };
  },
  mounted() {
    console.log("购物车", this.cartList);
    Bus.$on("checkAll", (val) => {
      // 绑定

      if (val) {
        this.result = [];
        let myprice = 0;
        // 全选
        this.cartList.map((item) => {
          this.result.push(item.goods_id);
          myprice += item.number * item.retail_price;
        });
        this.$emit("getMoney", myprice);
        this.priceAll = myprice;
      } else {
        this.result = [];
        this.$emit("getMoney", 0);
      }
    });
  },
  beforeDestroy() {
    // 销毁
    Bus.$off("checkAll", (val) => {
      this.result = [];
      if (val) {
        // 全选
        this.cartList.map((item) => {
          this.result.push(item.goods_id);
        });
        this.$emit("getMoney", myprice);
      } else {
        this.result = [];
        this.$emit("getMoney", 0);
      }
    });
  },
  methods: {
    onLoad() {},
    changeCheck() {
      this.cartList.map((item) => {
        if (this.result.includes(item.goods_id)) {
          this.priceAll += item.number * item.retail_price;
        }
      });
      console.log(this.priceAll);
      this.$emit("getMoney", this.priceAll);
      this.priceAll = 0;
      //! 触发全选
      if (this.result.length == this.cartList.length) {
        this.$emit("checkAll", true);
      } else {
        this.$emit("checkAll", false);
      }
    },
  },
};
</script>

<style lang="less" scoped>
#container {
  width: 100%;
  /deep/.van-list {
    .car {
      display: flex;
      .van-card {
        flex-grow: 1;
        background-color: #fff;
      }
    }
  }
}
</style>