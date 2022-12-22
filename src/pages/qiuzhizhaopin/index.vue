<template>
  <div class="main">
    <div class="w">
      <div class="content">
        <!-- 急需人才需求 -->
        <div class="left">
          <div class="title">
            <h3>急需人才需求</h3>
            <a href="#"
              >查看更多
              <img
                src="	https://www.czrc.gov.cn/czrc/DFS/template/42/images/gd_03.png"
                alt=""
              />
            </a>
          </div>
          <div class="firm">
            <div class="time">
              <p class="day">20</p>
              <p class="years">2022-07</p>
            </div>
            <div class="desc">
              <span>东方日升（安徽）新能源有限公司 (职位招聘)</span>
              <p>东方日升新能源股份有限公司始创1986年，注册资本901,359,9...</p>
            </div>
          </div>
          <ul class="list">
            <li>
              <a href="#"
                ><span></span> 福斯特（滁州）新材料有限公司 (职位招聘)</a
              >
              <span>7-20</span>
            </li>
            <li>
              <a href="#"
                ><span></span> 福斯特（滁州）新材料有限公司 (职位招聘)</a
              >
              <span>7-20</span>
            </li>
            <li>
              <a href="#"
                ><span></span> 福斯特（滁州）新材料有限公司 (职位招聘)</a
              >
              <span>7-20</span>
            </li>
            <li>
              <a href="#"
                ><span></span> 福斯特（滁州）新材料有限公司 (职位招聘)</a
              >
              <span>7-20</span>
            </li>
          </ul>
        </div>
        <!-- 人才政策 -->
        <div class="left">
          <div class="title">
            <h3>人才政策</h3>
            <a href="#"
              >查看更多
              <img
                src="	https://www.czrc.gov.cn/czrc/DFS/template/42/images/gd_03.png"
                alt=""
              />
            </a>
          </div>
          <div class="firm">
            <div class="time">
              <p class="day">20</p>
              <p class="years">2022-07</p>
            </div>
            <div class="desc">
              <span>东方日升（安徽）新能源有限公司 (职位招聘)</span>
              <p>东方日升新能源股份有限公司始创1986年，注册资本901,359,9...</p>
            </div>
          </div>
          <ul class="list">
            <li>
              <a href="#" title="福斯特（滁州）新材料有限公司 (职位招聘)"
                ><span></span> 福斯特（滁州）新材料有限公司 (职位招聘)</a
              >
              <span>7-20</span>
            </li>
            <li>
              <a href="#"
                ><span></span> 福斯特（滁州）新材料有限公司 (职位招聘)</a
              >
              <span>7-20</span>
            </li>
            <li>
              <a href="#"
                ><span></span> 福斯特（滁州）新材料有限公司 (职位招聘)</a
              >
              <span>7-20</span>
            </li>
            <li>
              <a href="#"
                ><span></span> 福斯特（滁州）新材料有限公司 (职位招聘)</a
              >
              <span>7-20</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 5张图片 -->
      <ul class="images">
        <li><a href="#"> 滁州公共招聘网</a></li>
        <li><a href="#"> 滁州公共招聘网</a></li>
        <li><a href="#"> 滁州公共招聘网</a></li>
        <li><a href="#"> 滁州公共招聘网</a></li>
        <li><a href="#"> 滁州公共招聘网</a></li>
      </ul>
      <!-- 人才引进报名系统 -->
      <div class="bottom">
        <a href="#"> </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "qiuzhizhaopin",
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
    box-shadow: 0 4px 8px 0 #ccc;
    padding: 0 1vw;
    .content {
      height: 60%;
      display: flex;
      justify-content: space-between;
      .left {
        width: 45%;
        height: 100%;

        .title {
          height: 15%;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #333;
          line-height: 10vh;
          h3 {
            color: #333;
            font-size: 24px;
          }
          a {
            display: block;
            color: #999;
            font-size: 16px;
            margin: 5px 0 0;
            img {
              vertical-align: middle;
            }
          }
        }
        .firm {
          box-sizing: border-box;
          height: 25%;
          display: flex;
          justify-content: flex-start;
          border-bottom: 1px dotted #ccc;
          .time {
            width: 20%;
            height: 70%;
            margin-top: 2vh;
            border: 1px solid #ccc;
            .day {
              box-sizing: border-box;
              width: 100%;
              height: 70%;
              color: #fff;
              font-size: 25px;
              font-weight: bold;
              text-align: center;
              padding-top: 2vh;
              background: #1764ce;
            }
            .years {
              width: 100%;
              height: 30%;
              line-height: 3vh;
              font-size: 12px;
              color: #1764ce;
              text-align: center;
            }
          }
          .desc {
            width: 100%;
            height: 50%;
            margin-left: 2vw;
            margin-top: 4vh;
            display: flex;
            flex-direction: column;
            span {
              width: 85%;
              font-size: 16px;
              color: #333;
              font-weight: bold;
              line-height: 29px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }
            p {
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 14px;
              color: #999;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }
          }
        }
        .list {
          height: 60%;
          width: 100%;

          li {
            height: 25%;
            line-height: 8vh;
            display: flex;
            justify-content: space-between;
            a {
              font-size: 16px;
              color: #333;
              span {
                display: inline-block;
                width: 4px;
                height: 4px;
                margin-bottom: 4px;
                margin-right: 6px;
                background: #ccc;
              }
            }
            span {
              font-size: 16px;
              color: #999;
            }
          }
        }
      }
    }
    .images {
      width: 100%;
      height: 18%;
      list-style: none;
      margin-top: 2vh;
      display: flex;
      justify-content: flex-start;

      li {
        display: block;
        width: 20%;
        height: 80%;

        a {
          display: block;
          width: 90%;
          height: 70%;
          line-height: 10vh;
          font-size: 16px;
          font-weight: bold;
          color: #4c71d4;
          text-align: center;
          background-image: url(https://www.czrc.gov.cn/czrc/DFS//template/10/images/m_b_1_03.png);
          background-repeat: no-repeat;
          background-size: cover;
        }
      }
    }
    .bottom {
      width: 100%;
      height: 15%;
      a {
        width: 100%;
        height: 100%;
        display: inline-block;
        background-image: url(https://www.czrc.gov.cn/czrc/DFS//template/10/images/bm_03.png);
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
}
</style>