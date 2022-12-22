<template>
  <div class="main">
    <div class="w">
      <div class="head">
        <p>人才认定（A-E）</p>
      </div>
      <div class="title">
        <span></span>
        <p>基本信息(打*项必填)</p>
      </div>
      <el-form label-width="80px" class="baseform">
        <el-row>
          <el-col :span="12">
            <el-form-item label="照片">
              <!-- 照片墙                 :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"-->
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名">
              <el-input placeholder="请输入姓名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别">
              <el-radio label="1">男</el-radio>
              <el-radio label="2">女</el-radio>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="证件类型">
              <el-select placeholder="" style="width: 100%">
                <el-option> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="证件号码">
              <el-input placeholder=""></el-input>
            </el-form-item>
          </el-col> </el-row
        ><el-row>
          <el-col :span="12">
            <el-form-item label="联系方式">
              <el-input placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="所在地区">
              <el-select placeholder="" style="width: 100%">
                <el-option> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="出生日期">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                style="width: 100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="民族">
              <el-input placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="国籍">
              <el-select placeholder="" style="width: 100%">
                <el-option></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="籍贯">
              <el-input placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="政治面貌">
              <el-select placeholder="" style="width: 100%">
                <el-option></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="邮箱">
              <el-input placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="工作单位">
              <el-input placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="职务名称">
              <el-input placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="毕业院校">
              <el-input placeholder=""></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="工作地址">
              <el-input placeholder=""></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="学历">
              <el-select placeholder="" style="width: 100%">
                <el-option></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="最高学位">
              <el-select placeholder="" style="width: 100%">
                <el-option></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="人才类型" style="width: 50%">
          <el-select placeholder="" style="width: 100%">
            <el-option></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="最高学位所学专业"
          style="width: 100%"
          class="mylabel"
        >
          <el-select placeholder="" style="width: 10%">
            <el-option></el-option>
          </el-select>
          <el-select placeholder="" style="width: 45%; margin: 0 5px">
            <el-option></el-option>
          </el-select>
          <el-select placeholder="" style="width: 44%; float: right">
            <el-option></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="最高学历所学专业"
          style="width: 100%"
          class="mylabel"
        >
          <el-select placeholder="" style="width: 10%">
            <el-option></el-option>
          </el-select>
          <el-select placeholder="" style="width: 45%; margin: 0 5px">
            <el-option></el-option>
          </el-select>
          <el-select placeholder="" style="width: 44%; float: right">
            <el-option></el-option>
          </el-select>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="毕业时间" style="width: 100%">
              <el-input placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="职称" style="width: 100%">
              <el-select placeholder="">
                <el-option></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item
              label="职（执）业资格"
              style="width: 100%"
              class="mylabel"
            >
              <el-input placeholder=""></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="在滁类型" style="width: 100%">
              <el-select placeholder="" style="width: 100%">
                <el-option></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item
              label="年度报酬或收入"
              style="width: 100%"
              class="mylabel"
            >
              <el-select placeholder="" style="width: 100%">
                <el-option></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="从业领域" style="width: 100%">
              <el-select placeholder="" style="width: 100%">
                <el-option></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="自我认证类别" class="mylabel">
          <el-select placeholder="" style="width: 10%; margin-right: 10px">
            <el-option></el-option>
          </el-select>
          <el-select placeholder="" style="width: 89%">
            <el-option></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="第三代社保卡号" class="mylabel">
          <el-select placeholder="" style="width: 45%">
            <el-option></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-button type="primary" style="border-radius: 20px" size="small"
            >点击申请</el-button
          ><span style="color: red"
            >(如果没有滁州市第三代社保卡，可点击申请微商银行滁州市第三代社保卡)</span
          >
        </el-form-item>
      </el-form>
      <div class="title">
        <span></span>
        <p>本人具备的认定条件（理由）</p>
      </div>
      <el-input
        type="textarea"
        :rows="5"
        placeholder="本人具备的认定条件（理由）"
        style="margin: 10px 0 20px 0"
      >
      </el-input>
      <div class="title">
        <span></span>
        <p>学习经历（起止时间：xxxx年xx月-xxxx年xx月）</p>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%; margin: 10px 0 20px 0"
        class="mytable"
      >
        <el-table-column prop="index" type="index" label="序号" width="180">
        </el-table-column>
        <el-table-column prop="starttime" label="起始时间" width="180">
          <template slot-scope="scope">
            <el-input v-model="scope.row.starttime" placeholder=""></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="school" label="院校">
          <template slot-scope="scope">
            <el-input v-model="scope.row.school" placeholder=""></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="major" label="专业">
          <template slot-scope="scope">
            <el-input v-model="scope.row.major" placeholder=""></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="degree" label="学历学位">
          <template slot-scope="scope">
            <el-input v-model="scope.row.degree" placeholder=""></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="operate" label="操作">
          <template slot-scope="scope">
            <el-button
              icon="el-icon-close"
              circle
              @click="deltable(scope)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div
        style="
          border: 1px solid #ccc;
          border-top: 0;
          height: 65px;
          text-align: center;
          line-height: 65px;
        "
      >
        <el-button icon="el-icon-plus" circle @click="addtable"></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      // 照片墙
      imageUrl: "",
      tableData: [
        // {
        //   starttime: "2016-05-02",
        //   school: "安科",
        //   major: "计科",
        //   degree: "学士",
        // },
        {},
        {},
      ],
    };
  },
  methods: {
    // 添加表格
    addtable() {
      this.tableData.push({});
    },
    // 删除表格
    deltable(scope) {
      // scope.$index就是当前行的索引
      // console.log(scope.$index);
      this.$confirm("确认删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          if (this.tableData.length > 1) {
            this.tableData.splice(scope.$index, 1);
          } else {
            this.$message.warning("至少保留一条数据");
          }
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  .w {
    width: 95%;
    height: 400%;
    margin: 0 auto;
    .head {
      width: 100%;
      p {
        margin: 20px 0;
        line-height: 40px;
        font-size: 38px;
        color: #000;
        text-align: center;
      }
    }

    .title {
      box-sizing: border-box;
      width: 100%;
      height: 2%;
      //   padding: 20px;
      background-color: #ccc;
      display: flex;
      align-items: center;
      padding: 0 2vw;
      span {
        display: inline-block;
        width: 5px;
        height: 30%;
        background-color: blue;
      }
      p {
        display: inline-block;
        padding-left: 1vw;
      }
    }
    .baseform {
      padding-top: 1vw;
      .avatar-uploader .el-upload {
        border: 1px solid blue !important;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409eff;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
      /deep/ .mylabel {
        .el-form-item__label {
          text-align: right;
          vertical-align: middle;
          float: left;
          font-size: 14px;
          color: #606266;
          line-height: 20px;
          padding: 0 12px 0 0;
          box-sizing: border-box;
        }
      }
    }
    /deep/ .mytable {
      margin: 10px 0 0 !important;
      .el-input__inner {
        border: transparent;
      }
    }
    // .mytable {
    // }
  }
}
</style>