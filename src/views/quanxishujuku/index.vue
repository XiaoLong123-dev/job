<template>
  <div class="shujuku">
    <div class="container">
      <div class="search">
        <el-card>
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="select">
                <span>智能推荐</span>
                <span>条件筛选</span>
              </div>
            </el-col>
            <el-col :span="15">
              <el-row type="flex" justify="end"
                ><el-input
                  placeholder="请输入内容"
                  suffix-icon="el-icon-search"
                  style="width: 400px"
                >
                </el-input
              ></el-row>
            </el-col>
            <el-col :span="3">
              <el-row type="flex" justify="end">
                <el-button
                  type="primary"
                  icon="el-icon-refresh"
                  style="margin-top: 5px"
                  >换一批</el-button
                >
              </el-row>
            </el-col>
          </el-row></el-card
        >
      </div>
      <div class="type">
        <el-card>
          <el-row :gutter="20">
            <el-col :span="6"
              >专家类型：
              <el-select style="width: 120px" size="mini" placeholder="请选择">
                <el-option> </el-option>
              </el-select>
            </el-col>
            <el-col :span="6"
              >专家级别：
              <el-select style="width: 120px" size="mini" placeholder="请选择">
                <el-option> </el-option>
              </el-select>
            </el-col>
            <el-col :span="12">
              <el-row type="flex" justify="end">
                <el-button type="primary">高级搜索</el-button>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
      </div>

      <!-- 专家列表 -->
      <div class="list">
        <el-card class="item"></el-card>
        <el-card class="item"></el-card>
        <el-card class="item"></el-card>
        <el-card class="item"></el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "second",
    };
  },
};
</script>

<style lang="less" scoped>
.shujuku {
  .container {
    // 智能搜索
    .search {
      height: 100px;
      line-height: 50px;
      .select {
        span {
          padding: 20px;
          cursor: pointer;
          border-bottom: 5px solid skyblue;
        }
      }
    }
    // 高级筛选
    .type {
      height: 100px;
      line-height: 40px;
      font-size: 14px;
    }
    // 人员列表
    .list {
      min-height: 200px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item {
        width: 650px;
        height: 200px;
        background-color: pink;
        margin-bottom: 20px;
      }
    }
  }
}
</style>