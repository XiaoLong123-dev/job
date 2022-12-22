<template>
  <!-- e码服务 -->
  <div class="main">
    <div class="w">
      <ul class="list">
        <li class="li1" v-for="index in 6" :key="index">
          <a href=""
            ><img
              src="	https://www.czrc.gov.cn/czrc/DFS//template/4/images/menu_01.jpg
"
              alt=""
            />
            <div>双创云图</div></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "emafuwu",
};
</script>

<style lang="less" scoped>
@media screen and (max-width: 400px) {
  body {
    .main .w .list li {
      width: 100%;
      height: 100%;
      margin-right: 0;
    }
  }
}
.main {
  width: 100%;
  height: 100%;
  .w {
    box-sizing: border-box;
    // width: 1000px;
    width: 80%;
    min-height: 600px;
    // padding: 40px 25px;
    // padding: 2vh 2vw;
    margin: 0 auto;
    background-image: url(https://www.czrc.gov.cn/czrc/DFS//template/4/images/banner_02.png);
    background-repeat: no-repeat;
    background-color: #ffffff;
    background-position: bottom right;
    .list {
      // display: block;
      list-style: none;
      width: 100%;
      height: 300px;
      // height: 55%;
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;

      li {
        display: inline-block;
        // width: 280px;
        width: 30%;
        // height: 180px;
        height: 60%;
        margin-right: 20px;

        a {
          position: relative;
          display: inline-block;
          // width: 240px;
          width: 90%;
          // height: 120px;
          height: 80%;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            transition: all 0.5s;
          }
          img:hover {
            transform: scale(1.15);
          }
          div {
            position: absolute;
            top: 20%;
            left: 12%;
            font-weight: bold;
            color: #4068b3;
            font-size: 22px;
          }
        }
      }
    }
  }
}
// @media screen and (max-width: 800px) {
//   .wrapper .w .list li {
//     width: 45%;
//     height: 25%;
//   }
// }
// @media screen and (max-width: 550px) {
//   .wrapper .w {
//     height: 150%;
//   }
//   .wrapper .w .list {
//     height: 80%;
//   }
//   .wrapper .w .list li {
//     width: 100%;
//     height: 20%;
//   }
//   .wrapper .w .list li a {
//     height: 80%;
//   }
// }
</style>