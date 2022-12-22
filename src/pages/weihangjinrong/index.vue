<template>
  <div class="main">
    <div class="w">
      <div class="top">
        <div class="swiper">
          <el-carousel :interval="5000" arrow="hover" style="height: 100%">
            <el-carousel-item v-for="item in 4" :key="item">
              <a href="#" title="社保卡活动合集">
                <img
                  src="https://www.czrc.gov.cn/czrc/DFS//file/2022/05/18/20220518153817575fb3sr2.png?iid=318"
                  alt=""
                  style="width: 100%; height: 100%"
              /></a>
              <div class="hei" style="background-color: rgba(0, 0, 0, 0.68)">
                <p>社保卡活动合集</p>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="message">
          <div class="title">
            <p>微行信息</p>
            <a class="more">
              查看更多
              <img
                src="https://www.czrc.gov.cn/czrc/DFS//template/6/images/whxx_gd.png"
                alt=""
              />
            </a>
          </div>
          <div class="detail">
            <p>
              “疫”路有我，志愿同行——徽商银行滁州分行各党支部aaaaaaaaaaaaaaaa
            </p>
            <p>
              截至3月28日，滁州市已出现2例无症状感染者，外防输入压力持续增大。在战“疫”的关键时刻，社区工作人员、医务工作者、党员干部、还有普通市民，很多很多很多很多很多很多很多很多很多很多
            </p>
          </div>
          <ul class="list">
            <li>
              <a href="#"
                ><span></span>
                <span> 金融拥军惠老，让金融服务更有温度 </span>
              </a>
              <span class="time">2022-7-20</span>
            </li>
            <li>
              <a href="#"
                ><span></span>
                <span>
                  徽商银行滁州分行参加滁州市人才金融合作协议签约暨首场“滁博汇”主题活动
                </span>
              </a>
              <span class="time">2022-7-20</span>
            </li>
            <li>
              <a href="#"
                ><span></span>
                <span>
                  徽商银行滁州分行参加滁州市人才金融合作协议签约暨首场“滁博汇”主题活动
                </span>
              </a>
              <span class="time">2022-7-20</span>
            </li>
            <li>
              <a href="#"
                ><span></span>
                <span>
                  徽商银行滁州分行参加滁州市人才金融合作协议签约暨首场“滁博汇”主题活动
                </span>
              </a>
              <span class="time">2022-7-20</span>
            </li>
            <li>
              <a href="#"
                ><span></span>
                <span>
                  徽商银行滁州分行参加滁州市人才金融合作协议签约暨首场“滁博汇”主题活动
                </span>
              </a>
              <span class="time">2022-7-20</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="down">
        <div class="money">
          <p class="money-title">人才贷款计划</p>
          <a href="#">
            <p>个人</p>
          </a>
          <a href="#">
            <p>企业</p>
          </a>
        </div>
        <div class="xinyongka">
          <div class="xinyongka-top">
            <div class="item">
              <a href="#"> <p>社保卡申领</p></a>
            </div>
            <div class="item">
              <a href="#"> <p>社保卡申领</p></a>
            </div>
            <div class="item">
              <a href="#"> <p>社保卡申领</p></a>
            </div>
          </div>
          <a href="#" class="xinyongka-bottom">
            <img
              src="https://www.czrc.gov.cn/czrc/DFS//template/6/images/wsyhgw.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Weihangjinrong",
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  padding: 0 5vw;

  .w {
    height: 100%;
    background-image: url(https://www.czrc.gov.cn/czrc/DFS/template/42/images/banner_02.png);
    background-repeat: no-repeat;
    background-position: bottom right;
    .top {
      height: 60%;
      display: flex;

      .swiper {
        width: 45%;
        height: 100%;
        .el-carousel .el-carousel--horizontal {
          position: relative;
        }
        /deep/ .el-carousel__container {
          height: 100%;
        }
        .el-carousel__item h3 {
          color: #475669;
          font-size: 18px;
          opacity: 0.75;
          line-height: 300px;
          margin: 0;
        }

        .el-carousel__item:nth-child(2n) {
          background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n + 1) {
          background-color: #d3dce6;
        }
        .el-carousel__indicators--horizontal {
          bottom: 0;
          right: 0;
        }
        .hei {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 20px;
          z-index: 10;
          p {
            color: white;
            font-size: 14px;
          }
        }
      }
      .message {
        width: 45%;
        height: 100%;
        margin-left: 2vw;
        .title {
          height: 5%;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          padding-top: 10px;
          padding-bottom: 0.5vw;
          border-bottom: 1px solid #ccc;
          p {
            font-size: 14px;
            font-weight: bold;
            color: #333;
          }
          .more {
            display: block;
            color: #999;
            font-size: 14px;
            cursor: pointer;
            img {
              vertical-align: middle;
            }
          }
        }
        .detail {
          margin-top: 0.5vw;
          width: 100%;
          height: 20%;
          border-bottom: 1px dotted #ccc;
          overflow: hidden;
          cursor: pointer;
          p:nth-child(1) {
            width: 100%;
            height: 40%;
            font-size: 16px;
            font-weight: bold;
            color: #333;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          p:nth-child(2) {
            width: 100%;
            height: 50%;
            text-indent: 2rem;
            color: #999;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
        }
        .detail:hover {
          p:nth-child(1) {
            color: orange;
          }
        }
        .list {
          height: 70%;
          width: 100%;

          li {
            height: 20%;
            line-height: 8vh;
            display: flex;
            justify-content: space-between;

            a {
              width: 80%;
              display: block;
              overflow: hidden;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              span:nth-child(2) {
                display: inline-block;
                width: 90%;
                font-size: 16px;
                color: #333;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
              }
              span:nth-child(1) {
                display: inline-block;
                width: 4px;
                height: 4px;
                margin-bottom: 4px;
                margin-right: 6px;
                background: #ccc;
              }
            }
            .time {
              width: 20%;
              font-size: 14px;
              color: #999;
            }
          }
          li:hover {
            a span,
            span {
              color: orange;
            }
          }
        }
      }
    }
    .down {
      margin-top: 2vw;
      display: flex;
      width: 100%;
      height: 40%;
      .money {
        width: 20%;
        height: 80%;
        background-image: url(https://www.czrc.gov.cn/czrc/DFS//template/6/images/grxmdk.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        text-align: center;
        .money-title {
          color: #c1821b;
          font-weight: bold;
          font-size: 2vw;
          padding: 1vw;
        }
        a {
          display: block;
          width: 60%;
          padding: 1vw 0.02vw;
          margin: 0 auto;
          margin-bottom: 1vw;
          background: rgba(255, 216, 144, 0.8);
          p {
            font-weight: bold;
            color: #b37106;
          }
        }
        a:hover {
          background-color: orange;
          p {
            color: white;
          }
        }
      }
      .xinyongka {
        width: 80%;
        height: 80%;
        margin-left: 2vw;
        .xinyongka-top {
          width: 100%;
          height: 50%;
          display: flex;
          justify-content: space-between;
          .item {
            width: 30%;
            height: 80%;
            border-radius: 10px;
            background-image: url(https://www.czrc.gov.cn/czrc/DFS//template/6/images/sbksl.png);
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.5s;
            p {
              font-weight: bold;
              color: #4c71d4;
              font-size: 18px;
            }
          }
          .item:hover {
            p {
              transform: scale(0.7);
            }
          }
        }
        .xinyongka-bottom {
          display: block;
          width: 100%;
          height: 50%;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            transition: all 0.5s;
          }
        }
        .xinyongka-bottom:hover img {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>