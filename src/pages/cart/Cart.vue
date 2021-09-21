<template>
  <div id="container">
    <!-- 无忧退货 -->
    <FreeReturn />
    <!-- 购物车list -->
    <CartList @checkAll="checkAll" :cartList="cartList" @getMoney="getMoney" />
    <!-- 提交订单 -->
    <Submit ref="order" :money="money" />
  </div>
</template>

<script>
import FreeReturn from "./components/FreeReturn.vue";
import CartList from "./components/CartList.vue";
import Submit from "./components/Submit.vue";
import { getCartApi } from "../../api/cart";
export default {
  components: {
    FreeReturn,
    CartList,
    Submit,
  },
  data() {
    return {
      cartList: [],
      money: 0,
    };
  },
  mounted() {
    this.getCart();
  },
  methods: {
    getMoney(val) {
      this.money = val * 100;
    },
    getCart() {
      getCartApi().then((res) => {
        // console.log("购物车的数据", res);
        if (res.errno == 0) {
          this.cartList = res.data.cartList;
          console.log("购物车的数据", this.cartList);
        }
      });
    },
    checkAll(bool) {
      //! 全选
      this.$refs.order.mycheckAll(bool);
    },
  },
};
</script>

<style lang="less" scoped>
// #container {
//   // height: calc(100vh - 50px);
// }
</style>