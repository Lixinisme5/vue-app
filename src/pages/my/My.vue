<template>
  <div id="container">
    <div class="header">
      <van-image round width="0.7rem" height="0.7rem" :src="src" />
      <div class="right">
        <span @click="login">{{ user }}</span>
        <van-icon @click="logout" :name="islogin ? 'cross' : 'arrow'" />
      </div>
    </div>
    <van-overlay z-index="999" :show="show" @click="close">
      <div class="wrapper" @click.stop>
        <div class="block">
          <van-form @submit="onSubmit">
            <van-field
              v-model="username"
              name="用户名"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px">
              <van-button round block type="info" native-type="submit"
                >提交</van-button
              >
            </div>
          </van-form>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import logo from "../../assets/tx.jpeg";
import { loginApi } from "../../api/my";
import { setCookie, getCookie, removeCookie } from "../../utils/cookieUtils";
export default {
  mounted() {
    let token = getCookie("token");
    if (token) {
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo) {
        this.src = userInfo.avatar;
        this.user = userInfo.username;
        this.login = true;
      } else {
        // this.$toast.fail("请先登录");
      }
    }
  },
  data() {
    return {
      src: logo,
      islogin: false,
      show: false,
      username: "",
      password: "",
      user: "点击登录",
    };
  },
  computed: {},
  methods: {
    logout() {
      removeCookie("token");
      this.$router.go(0); //go   -1 后退   0 刷行  1 前进
      localStorage.clear();
    },
    login() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
    onSubmit(values) {
      // console.log("submit", values);
      loginApi({ username: this.username, pwd: this.password }).then((res) => {
        console.log(res);
        if (res.errno === 0) {
          setCookie("token", res.data.token);
          localStorage.setItem("userInfo", JSON.stringify(res.data.userInfo));
          this.show = false;

          this.src = res.data.userInfo.avatar;
          this.user = res.data.userInfo.username;
          this.login = true;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
#container {
  font-size: 0.16rem;
  .header {
    display: flex;
    width: 100%;
    height: 110px;
    background-color: #333;
    align-items: center;
    .van-image {
      margin-left: 20px;
    }
    .right {
      flex-grow: 1;
      width: auto;
      margin-left: 10px;
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .block {
      width: 90%;
      height: 220px;
      background-color: #fff;
      .van-form {
        margin-top: 20px;
      }
    }
  }
}
</style>