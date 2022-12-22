<template>
  <div class="app">
    <!-- <TopNav></TopNav> -->
    <!-- <Home></Home> -->
    <!-- <router-view></router-view> -->
    <!-- e码服务 -->
    <!-- <Emafuwu></Emafuwu> -->
    <!-- 奖补申报 -->
    <!-- <Jiangbushenbao></Jiangbushenbao> -->
    <!-- 解绑挂帅 -->
    <!-- <Jiebangguashuai></Jiebangguashuai> -->
    <!-- 求职招聘 -->
    <!-- <Qiuzhizhaopin></Qiuzhizhaopin> -->
    <!-- 微行金融 -->
    <!-- <Weihangjinrong></Weihangjinrong> -->
    <Form></Form>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import Home from "@/views/Home";
import Emafuwu from "@/pages/emafuwu";
import Jiangbushenbao from "@/pages/jiangbushenbao";
import Jiebangguashuai from "@/pages/jiebangguashuai";
import Qiuzhizhaopin from "@/pages/qiuzhizhaopin";
import Weihangjinrong from "@/pages/weihangjinrong";
import Form from "@/pages/form";
export default {
  name: "App",
  components: {
    Home,
    Emafuwu,
    Jiangbushenbao,
    Jiebangguashuai,
    Qiuzhizhaopin,
    Weihangjinrong,
    Form,
  },
};
</script>

<style>
.container {
  width: 90%;
  margin: 20px auto;
}
ul {
  padding: 0px;
  margin: 0px;
}
a {
  text-decoration: none;
}
.app {
  width: 100%;
  height: 100%;
}
</style>
