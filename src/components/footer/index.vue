<template>
  <!-- 底部组件 -->
  <div class="footer">
    <div class="container">
      <div class="text">
        主办方：中共明光市委组织部&nbsp;&nbsp;&nbsp;
        承办：明光市人力资源和社会保障局&nbsp;&nbsp;&nbsp;
        联系电话：0550-8022447
      </div>
      <div class="text">
        皖ICP备12000461号&nbsp;&nbsp;&nbsp;
        联系电话：0550-3030166&nbsp;&nbsp;&nbsp;
        <i class="el-icon-user"></i>&nbsp;&nbsp;&nbsp;
        皖公网安备34118202000113号&nbsp;&nbsp;&nbsp; 技术支持：力拓智能
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.footer {
  margin-top: 20px;
  height: 100px;
  border-top: 2px solid blue;
  .container {
    text-align: center;
    .text {
      font-size: 12px;
      color: #ccc;
      margin: 5px 0;
    }
  }
}
</style>