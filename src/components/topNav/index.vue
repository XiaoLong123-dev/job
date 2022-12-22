<template>
  <!-- 头部组件 -->
  <div class="topnav">
    <div class="top">
      <!-- 导航栏 -->
      <el-row>
        <el-col :span="21">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            router
          >
            <el-menu-item index="/" :class="{ active: activeIndex == '/' }"
              >网站首页</el-menu-item
            >

            <el-menu-item
              index="/shujuku"
              :class="{ active: activeIndex == '/shujuku' }"
            >
              全息数据库
            </el-menu-item>
            <el-menu-item index="3" :class="{ active: activeIndex == '3' }"
              >嘉山英才计划</el-menu-item
            >
            <el-menu-item index="4" :class="{ active: activeIndex == '4' }"
              >产学研服务</el-menu-item
            >
            <el-menu-item index="5" :class="{ active: activeIndex == '5' }"
              >数据共享对接</el-menu-item
            >
            <el-menu-item index="6" :class="{ active: activeIndex == '6' }"
              >数据可视化</el-menu-item
            >
          </el-menu>
        </el-col>
        <el-col :span="3">
          <el-row type="flex" justify="end">
            <div class="login">
              <el-button type="primary" size="small" round>登录</el-button>
              <el-button type="" size="small" round>注册</el-button>
            </div>
          </el-row></el-col
        >
      </el-row>
    </div>
    <!-- 搜索框 -->
    <div class="title">
      <el-input placeholder="请输入内容" v-model="data" class="search">
        <template slot="append">搜索</template>
      </el-input>
      <!-- <div class="search"> -->
      <!-- <el-input placeholder="请输入内容" v-model="data">
          <template slot="append" style="background-color: red">搜索</template>
        </el-input> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      activeIndex: "/",
      data: "1",
    };
  },
  methods: {
    // 菜单激活的回调
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.activeIndex = key;
    },
  },
};
</script>

<style lang="less" scoped>
.topnav {
  background-color: #1764cc;
  .top {
    width: 90%;
    margin: 0 auto;
    height: 60px;
    line-height: 60px;
    overflow: hidden;
    .el-menu-demo {
      background-color: #1764cc;

      .el-menu-item {
        color: #fff;
        padding: 0 50px;
        border-bottom: none;
        text-decoration: none;
        &:hover {
          background-color: #1764cc;
        }
      }
      .active {
        background-color: red;
      }
    }
  }
  .title {
    width: 100%;
    height: 200px;
    background-color: #2576fc;
    position: relative;
    .search {
      position: absolute;
      top: 80px;
      right: 70px;
      width: 500px;
      // height: 35px;
      // line-height: 35px;
      border-radius: 25px;
      background-color: #fff;
      overflow: hidden;
    }
  }
}
</style>