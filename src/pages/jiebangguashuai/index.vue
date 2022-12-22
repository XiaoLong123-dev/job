<template>
  <div class="main">
    <div class="w">
      <!-- 左边 -->
      <div class="left">
        <a href="#">
          <div class="left-top">
            <h3>企业张榜</h3>
            <p class="desc">全市企业可申报发布重大技术需求和难题</p>
          </div></a
        >
        <div class="title">
          <div class="content">
            <h3>企业张榜名单</h3>
            <a href="#"
              >查看更多
              <img
                src="	https://www.czrc.gov.cn/czrc/DFS/template/42/images/gd_03.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <ul class="left-list">
          <li>
            <div class="list-top">
              <h3>滁州金诺实业有限公司</h3>
              <div class="time">截止时间2022-12-16</div>
            </div>
            <div class="list-middle">
              <p>技术需求：<i>高强度3D打印砂型技术</i></p>
            </div>
            <div class="list-bottom">
              <p>揭榜金额： <i>200w</i></p>
              <a href="#">详情&gt;</a>
            </div>
          </li>

          <li>
            <div class="list-top">
              <h3>滁州金诺实业有限公司</h3>
              <div class="time">截止时间2022-12-16</div>
            </div>
            <div class="list-middle">
              <p>技术需求：<i>高强度3D打印砂型技术</i></p>
            </div>
            <div class="list-bottom">
              <p>揭榜金额： <i>200w</i></p>
              <a href="#">详情&gt;</a>
            </div>
          </li>

          <li>
            <div class="list-top">
              <h3>滁州金诺实业有限公司</h3>
              <div class="time">截止时间2022-12-16</div>
            </div>
            <div class="list-middle">
              <p>技术需求：<i>高强度3D打印砂型技术</i></p>
            </div>
            <div class="list-bottom">
              <p>揭榜金额： <i>200w</i></p>
              <a href="#">详情&gt;</a>
            </div>
          </li>

          <li>
            <div class="list-top">
              <h3>滁州金诺实业有限公司</h3>
              <div class="time">截止时间2022-12-16</div>
            </div>
            <div class="list-middle">
              <p>技术需求：<i>高强度3D打印砂型技术</i></p>
            </div>
            <div class="list-bottom">
              <p>揭榜金额： <i>200w</i></p>
              <a href="#">详情&gt;</a>
            </div>
          </li>

          <li>
            <div class="list-top">
              <h3>滁州金诺实业有限公司</h3>
              <div class="time">截止时间2022-12-16</div>
            </div>
            <div class="list-middle">
              <p>技术需求：<i>高强度3D打印砂型技术</i></p>
            </div>
            <div class="list-bottom">
              <p>揭榜金额： <i>200w</i></p>
              <a href="#">详情&gt;</a>
            </div>
          </li>
        </ul>
      </div>
      <!-- 右边 -->
      <div class="left">
        <a href="#">
          <div class="left-top">
            <h3>企业张榜</h3>
            <p class="desc">全市企业可申报发布重大技术需求和难题</p>
          </div></a
        >
        <div class="title">
          <div class="content">
            <h3>企业张榜名单</h3>
            <a href="#"
              >查看更多
              <img
                src="	https://www.czrc.gov.cn/czrc/DFS/template/42/images/gd_03.png"
                alt=""
              />
            </a>
          </div>
        </div>

        <ul class="left-list">
          <div class="nodata">暂无数据</div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jiebangguashuai",
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  padding: 0 10%;
  .w {
    // height: 100%;
    height: 1000px;
    display: flex;
    justify-content: space-between;
    background-image: url(https://www.czrc.gov.cn/czrc/DFS/template/42/images/banner_02.png);
    background-repeat: no-repeat;
    background-position: bottom right;
    padding: 0 1vw;
    box-shadow: 0 4px 8px 0 #ccc;
    .left {
      width: 47%;
      //   height: 1500px;
      height: 100%;
      //   background-color: red;
      .left-top {
        width: 100%;
        height: 15%;
        background-image: url(https://www.czrc.gov.cn/czrc/DFS/template/42/images/qyzb_03.png);
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 10px;
        cursor: pointer;
        position: relative;
        h3 {
          position: absolute;
          top: 3vh;
          left: 9vw;
          color: #4c53a8;
          font-size: 24px;
          font-weight: bold;
        }
        .desc {
          position: absolute;
          top: 8vh;
          left: 9vw;
          color: #999;
          font-size: 16px;
        }
      }
      .title {
        width: 100%;
        height: 10%;
        border-bottom: 1px solid #ccc;
        position: relative;
        .content {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: auto;
          height: 50%;
          display: flex;
          justify-content: space-between;
          h3 {
            color: #333;
            font-size: 24px;
          }
          a {
            color: #999;
            font-size: 16px;
            margin: 5px 0 0;
          }
        }
      }
      .left-list {
        list-style: none;
        margin: 0;
        padding: 0;
        height: 80%;
        box-sizing: border-box;
        //   暂无数据
        .nodata {
          box-sizing: border-box;
          width: 100%;
          height: 15%;
          padding: 10vh 0;
          text-align: center;

          color: #333;
          font-size: 15px;
        }
        li {
          width: 100%;
          height: 15%;
          padding: 5px 0 15px;
          border-bottom: 1px dotted #ccc;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .list-top {
            width: 100%;
            height: 30%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            h3 {
              color: #333;
              font-size: 18px;
            }
            .time {
              color: #999;
              font-size: 16px;
            }
          }
          .list-middle {
            width: 100%;
            height: 30%;
            p {
              margin-top: 1vh;
              font-size: 16px;
              color: #333;
              i {
                font-style: normal;
                font-size: 14px;
                color: #999;
              }
            }
          }
          .list-bottom {
            width: 100%;
            height: 30%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            p {
              font-size: 16px;
              color: #333;
              i {
                font-style: normal;
                color: #ffa322;
                font-size: 14px;
              }
            }
            a {
              color: #ffa322;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
@media all and (max-width: 700px) {
  .main .w {
    flex-direction: column;
    justify-content: flex-start;
    height: 1500px;
  }
  .main .w .left {
    flex: 1;
    width: 100%;
    height: 100%;
    margin: 5vh;
  }
}
</style>