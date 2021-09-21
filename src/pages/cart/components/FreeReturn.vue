<template>
  <div id="container">
    <van-row>
      <van-col span="8">
        <van-icon name="passed" />
        <span>30天无忧退货</span>
      </van-col>
      <van-col span="8">
        <van-icon name="passed" />
        <span>48小时快速退费</span>
      </van-col>
      <van-col span="8">
        <van-icon name="passed" />
        <span>满88元免邮费</span>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#container {
  height: 30px;
  line-height: 30px;
  background-color: #ddd;
  font-size: 0.14rem;
  /deep/.van-col {
    text-align: center;
    .van-icon {
      color: red;
    }
  }
}
</style>