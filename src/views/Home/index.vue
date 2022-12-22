<template>
  <!-- 网站首页 -->
  <div class="home">
    <div class="container">
      <!-- 顶部 -->
      <div class="home-top">
        <!-- 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0 -->
        <el-row :gutter="20">
          <el-col :span="12">
            <!-- 轮播图 -->
            <div class="top-img">
              <el-carousel>
                <el-carousel-item v-for="item in 4" :key="item">
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="top-message">
              <!-- 导航菜单 -->
              <el-menu
                :default-active="defaultIndex"
                class="el-menu-demo"
                mode="horizontal"
              >
                <el-menu-item index="1" :class="{ active: defaultIndex == '1' }"
                  >人才政策</el-menu-item
                >
                <el-menu-item index="2" :class="{ active: defaultIndex == '2' }"
                  >技术需求</el-menu-item
                >
                <el-menu-item index="3" :class="{ active: defaultIndex == '3' }"
                  >新闻中心</el-menu-item
                >
                <el-menu-item index="4" :class="{ active: defaultIndex == '4' }"
                  >奖补申报</el-menu-item
                >
              </el-menu>
              <!-- 列表 -->
              <div class="news">
                <ul>
                  <li>
                    <span
                      >111111111111111111111111111111111111111111111111111111111111111111</span
                    >
                    <span>12.13</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>12/13</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>12/13</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>12/13</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>12/13</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>12/13</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>12/13</span>
                  </li>
                  <li>
                    <span>1</span>
                    <span>12/13</span>
                  </li>
                </ul>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 青山英才计划 -->
      <div class="qingshan">
        <div class="qingshan-top">
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="4"
              ><div class="title">
                "青山英才计划"
                <i></i>
              </div>
            </el-col>
            <el-col :span="4">
              <el-row type="flex" justify="end">
                <el-button type="primary" round
                  >加载更多 <i class="el-icon-right"></i
                ></el-button> </el-row
            ></el-col>
          </el-row>
        </div>
        <div class="qingshan-message">
          <div class="qingshan-message-left"></div>
          <div class="qingshan-message-right">
            <div class="item">
              <i class="el-icon-s-tools"></i>
              <p>高层次人才创新创业申报</p>
              <div class="item-check">
                &gt;&gt;&gt;&nbsp;查看&nbsp;&lt;&lt;&lt;
              </div>
            </div>
            <div class="item">
              <i class="el-icon-s-tools"></i>
              <p>机关事业单位引才申报</p>
              <div class="item-check">
                &gt;&gt;&gt;&nbsp;查看&nbsp;&lt;&lt;&lt;
              </div>
            </div>
            <div class="item">
              <i class="el-icon-s-tools"></i>
              <p>大学生人才申报</p>
              <div class="item-check">
                &gt;&gt;&gt;&nbsp;查看&nbsp;&lt;&lt;&lt;
              </div>
            </div>
            <div class="item">
              <i class="el-icon-s-tools"></i>
              <p>人才培育申报</p>
              <div class="item-check">
                &gt;&gt;&gt;&nbsp;查看&nbsp;&lt;&lt;&lt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 产学研服务平台 -->
      <div class="qingshan">
        <div class="qingshan-top" style="border-bottom: 2px solid #7367ed">
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="4"
              ><div class="title" style="background-color: #7367ed">
                "产学研服务平台"
                <i style="border-left: 30px solid #7367ed"></i>
              </div>
            </el-col>
            <el-col :span="4">
              <el-row type="flex" justify="end">
                <el-button
                  type="primary"
                  round
                  style="background-color: #ae87f3"
                  >加载更多 <i class="el-icon-right"></i
                ></el-button> </el-row
            ></el-col>
          </el-row>
        </div>
        <div class="qingshan-message" style="background-color: #eae6fd">
          <div class="qingshan-message-left"></div>
          <div class="qingshan-message-right">
            <div class="item">
              <i class="el-icon-s-tools"></i>
              <p>高层次人才创新创业申报</p>
              <div class="item-check" style="background-color: #9b80f3">
                &gt;&gt;&gt;&nbsp;查看&nbsp;&lt;&lt;&lt;
              </div>
            </div>
            <div class="item">
              <i class="el-icon-s-tools"></i>
              <p>高层次人才创新创业申报</p>
              <div class="item-check" style="background-color: #9b80f3">
                &gt;&gt;&gt;&nbsp;查看&nbsp;&lt;&lt;&lt;
              </div>
            </div>
            <div class="item">
              <i class="el-icon-s-tools"></i>
              <p>高层次人才创新创业申报</p>
              <div class="item-check" style="background-color: #9b80f3">
                &gt;&gt;&gt;&nbsp;查看&nbsp;&lt;&lt;&lt;
              </div>
            </div>
            <div class="item">
              <i class="el-icon-s-tools"></i>
              <p>高层次人才创新创业申报</p>
              <div class="item-check" style="background-color: #9b80f3">
                &gt;&gt;&gt;&nbsp;查看&nbsp;&lt;&lt;&lt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 图片 -->
      <div class="container-img">
        <div><img src="~@/image/bg.jpg" alt="" /></div>
        <div><img src="~@/image/bg.jpg" alt="" /></div>
        <div><img src="~@/image/bg.jpg" alt="" /></div>
      </div>
      <!-- 横线 -->
      <hr
        style="
          margin-top: 20px;
          border: none;
          height: 1px;
          background-color: #ccc;
        "
      />
      <!-- 对接页面 -->
      <div class="contact">
        <!-- 学信网 -->
        <div class="xuexin">
          <div class="icon">
            <i class="el-icon-s-help"></i>
          </div>
          <div class="message">
            <div class="message-top">
              <span>学信网对接</span>
              <el-button size="mini" class="btn"
                >访问<i class="el-icon-right"></i
              ></el-button>
            </div>
            <!-- 分割线 -->
            <!-- <hr /> -->
            <div class="message-bottom">抓取数据资源，充实人才数据库</div>
          </div>
        </div>
        <!-- 人设金保 -->
        <div class="xuexin">
          <div class="icon"><i class="el-icon-s-help"></i></div>
          <div class="message">
            <div class="message-top">
              <span>人设金保对接</span>
              <el-button size="mini" class="btn"
                >访问<i class="el-icon-right"></i
              ></el-button>
            </div>
            <!-- 分割线-->
            <!-- <hr /> -->
            <div class="message-bottom">身份核实、认定检验、信息入库</div>
          </div>
        </div>
        <!-- 第三方 -->
        <div class="xuexin">
          <div class="icon"><i class="el-icon-s-help"></i></div>
          <div class="message">
            <div class="message-top">
              <span>第三方对接</span>
              <el-button size="mini" class="btn"
                >访问<i class="el-icon-right"></i
              ></el-button>
            </div>
            <!-- 分割线-->
            <!-- <hr /> -->
            <div class="message-bottom">个税、公积金、住建等系统</div>
          </div>
        </div>
      </div>

      <!-- 横线 -->
      <hr
        style="
          margin-top: 20px;
          border: none;
          height: 1px;
          background-color: #ccc;
        "
      />
    </div>
    <!-- 分割线 -->
    <div class="split"></div>
    <div class="container">
      <!-- 数据可视化 -->
      <div class="echarts">
        <div class="echarts-title">
          <i class="el-icon-pie-chart"></i> 人才数据可视化
        </div>
        <div class="echarts-chart">
          <el-row :gutter="20">
            <el-col :span="12"><div class="chart-left">1</div></el-col>
            <el-col :span="12"><div class="chart-right">2</div></el-col>
          </el-row>
        </div>
      </div>
    </div>

    <!-- 分割线 -->
    <div class="split"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 默认激活
      defaultIndex: "1",
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  .container {
    // 主页顶部样式
    .home-top {
      width: 100%;
      height: 290px;
      overflow: hidden;
      .top-img {
        //  轮播图
        .el-carousel__item:nth-child(2n) {
          background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n + 1) {
          background-color: #d3dce6;
        }
        //
      }
      .top-message {
        .el-menu-demo {
          border-bottom: 2px solid blue;
          .el-menu-item {
            padding: 0 50px;
            height: 40px;
            line-height: 40px;
            font-size: 12px;
            color: blue;
            border-bottom: none;
            text-decoration: none;
          }
          .active {
            background-color: red;
          }
        }
        // 文本省略有问题
        .news {
          height: 290px;
          ul {
            list-style-position: inside;
            list-style-type: disc;
            overflow: hidden;
            li {
              float: left;
              width: 100%;
              height: 30px;
              line-height: 20px;
              border-bottom: 1px dashed #ccc;

              span:nth-child(1) {
                display: inline-block;
                width: 300px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
              span:nth-child(2) {
                float: right;
                font-size: 12px;
                color: #ccc;
              }
            }
          }
        }
      }
    }
    //青山英才计划样式
    .qingshan {
      width: 100%;
      height: 240px;

      margin-top: 20px;
      .qingshan-top {
        border-bottom: 2px solid blue;
        margin-bottom: 10px;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        .title {
          width: 150px;
          height: 100%;
          text-align: center;
          background-color: blue;
          position: relative;
          i {
            position: absolute;
            top: 0;
            right: -30px;
            width: 0;
            height: 0;
            border-left: 30px solid blue;
            border-top: 30px solid transparent;
            border-bottom: 30px solid transparent;
          }
        }

        // 加载更多按钮
        .el-button.is-round {
          padding: 5px 15px;
          margin-bottom: 5px;
        }
      }
      .qingshan-message {
        box-sizing: border-box;
        width: 100%;
        height: 200px;
        background-color: #deeefe;
        border: 1px solid;
        display: flex;
        .qingshan-message-left {
          width: 250px;
          height: 100%;
          background-color: yellow;
        }
        .qingshan-message-right {
          width: 100%;
          height: 180px;
          margin: 10px;
          display: flex;
          justify-content: space-around;
          .item {
            width: 20%;
            height: 100%;
            background-color: red;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            i {
              font-size: 60px;
              margin: 10px;
            }
            p {
              width: 100px;
              font-weight: 700;
              //设置文字的自动换行
              white-space: normal;
            }
            .item-check {
              width: 100%;
              height: 40px;
              color: #fff;
              line-height: 40px;
              cursor: pointer;
              background-color: skyblue;
            }
          }
        }
      }
    }

    // 照片
    .container-img {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      div {
        width: 400px;
        height: 100px;
        background-color: pink;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    // 对接
    .contact {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .xuexin {
        box-sizing: border-box;
        width: 400px;
        height: 130px;
        border: 1px solid #ccc;
        padding: 0 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          margin-right: 10px;
          width: 70px;
          height: 70px;
          line-height: 70px;
          border-radius: 50%;
          text-align: center;
          background-color: skyblue;
          i {
            font-size: 70px;
          }
        }
        .message {
          display: flex;
          flex-direction: column;

          .message-top {
            padding: 5px 0;

            border-bottom: 1px solid #ccc;
            // background-color: pink;
            span {
              color: skyblue;
              font-size: 20px;
            }
            .btn {
              float: right;
              margin-top: 2px;
              // color: white;
              padding: 5px 10px;
            }
          }
          .message-bottom {
            height: 30px;
            padding: 5px 0;
            color: #ccc;
          }
        }
      }
    }

    // 数据可视化
    .echarts {
      width: 100%;
      height: 400px;
      box-sizing: border-box;
      .echarts-title {
        height: 40px;
        text-align: center;
        font-weight: 700;
        i {
          margin: 0 10px;
        }
      }
      .echarts-chart {
        width: 100%;
        height: 360px;
        .chart-left {
          height: 360px;
          border-radius: 10px;
          background-color: pink;
        }
        .chart-right {
          height: 360px;
          border-radius: 10px;
          background-color: red;
        }
      }
    }
  }
  // 分割线
  .split {
    margin: 20px 0 0 0;
    width: 100%;
    height: 30px;
    background-color: #ccc;
  }
}
</style>