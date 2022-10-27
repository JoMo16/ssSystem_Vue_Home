<template>
    <div class="personalInfo">
      <div class="userInfo">
        <el-descriptions class="margin-top" title="个人信息" :column="1" :size="size">
          <template slot="extra">
            <el-button type="primary" @click="updateFormVisible = true" style="margin-right: 300px">更改个人信息</el-button>
          </template>
          <el-descriptions-item label="昵称">kooriookami</el-descriptions-item>

          <el-descriptions-item label="性别">18100000000</el-descriptions-item>

          <el-descriptions-item label="自我介绍">苏州市</el-descriptions-item>
          <el-descriptions-item label="生日">苏州市</el-descriptions-item>

<!--          <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>-->
        </el-descriptions>
      </div>

      <div class="updateForm">
        <el-dialog title="更改个人信息" :visible.sync="updateFormVisible" width="550px">
          <el-form
              label-position="left"
              style="width: 400px; margin-left:50px;">

            <label for="nickName">昵称</label>
            <el-input id="nickName" class="inputForm" v-model="userUpdateInfo.nickName"></el-input>
            <br>
            <label for="userSex">性别</label>
            <el-input id="userSex" class="inputForm" v-model="userUpdateInfo.sex"></el-input>
            <br>
            <label for="birthday">生日</label>
            <div class="block" id="birthday">
              <el-date-picker
                  v-model="userUpdateInfo.birthday"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>
            </div>
            <label for="description">自我介绍</label>
            <el-input
                type="textarea"
                :rows="2"
                placeholder="自我描述"
                id="description"
                v-model="userUpdateInfo.description">
            </el-input>

          </el-form>

          <div slot="footer" class="dialog-footer">
            <el-button @click="updateFormVisible = false">取消</el-button>
            <el-button type="primary" @click="updateUserInfo">确定</el-button>
          </div>
        </el-dialog>
      </div>

    </div>
</template>

<script>
export default {
  name: "PersonalInfo",
  data(){
    return {
      size: '',
      updateFormVisible: false,
      userInfo:[
      ],
      userUpdateInfo:{
        nickName:null,
        sex:null,
        birthday:null,
        description:null
      }
    }
  },
  methods:{
    updateUserInfo(){

    }
  }
}
</script>

<style scoped>
  .el-descriptions__header{
    font-size: 40px;
  }
  .el-descriptions {
    font-size: 26px;
    font-family: 宋体;
  }
  .userInfo{
    font-size: 30px;
  }
</style>