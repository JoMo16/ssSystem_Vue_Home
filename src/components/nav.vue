<template>
  <div class="home_top">
    <div class="content">
      <div class="left">
        <ul>
          <li>
            <router-link to="/"><img class="logo"src="../assets/logo2.png" alt=""/></router-link>

          </li>
          <li class="li1">
            <router-link class="links" to="/">主页</router-link>
          </li>
          <li class="li2">
            <router-link class="links" to="/goodList">商品页面</router-link>
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="btn_txt" v-if="if_login" style="margin-right:20px">
          <span @click="to_my()">个人中心</span>
        </div>
        <div class="btn_txt" v-if="if_login == false">
          <span @click="show_zhuce()">注册</span>
        </div>
        <div class="login_icon">

          <img @click="click_my()" class="login_icon_img" src="../assets/dl.png" alt=""></img>
        </div>
      </div>
    </div>

    <el-dialog title="登录" :visible.sync="login_dialogFormVisible" width="500px">

      <el-form :model="login_numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="user" :rules="[
          { required: true, message: '账号不能为空'},
          
        ]">
          <el-input v-model.number="login_numberValidateForm.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" :rules="[
        { required: true, message: '密码不能为空'},

        ]">
          <el-input v-model.number="login_numberValidateForm.pass" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button @click="login_dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="login_submitForm('numberValidateForm')">登录</el-button>

        </el-form-item>
      </el-form>

      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div> -->
    </el-dialog>

    <el-dialog title="注册" :visible.sync="dialogFormVisible" width="500px">

      <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="user" :rules="[
          { required: true, message: '注册账号不能为空'},
          
        ]">
          <el-input v-model.number="numberValidateForm.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" :rules="[
        { required: true, message: '密码不能为空'},

        ]">
          <el-input v-model.number="numberValidateForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="pass" :rules="[
        { required: true, message: '确认密码不能为空'},

        ]">
          <el-input v-model.number="numberValidateForm.pass1" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitForm('numberValidateForm')">注册</el-button>

        </el-form-item>
      </el-form>

      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div> -->
    </el-dialog>

    <el-drawer
    size="15%"
    title=""
    :visible.sync="drawer"
    :direction="direction"
    >
    <div class="menu">
      <div class="item">
          个人资料
      </div>
      <div class="item">
          账号信息
      </div>
      <div class="item">
          交易记录
      </div>
      <div @click="tuichu" class="item">
          退出登录
      </div>
  </div>
  </el-drawer>


  </div>
</template>

<script>
export default {
  name: 'top',
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      login_dialogFormVisible: false,

      login_numberValidateForm: {
        user: "",
        pass: "",
      },
      dialogFormVisible: false,

      numberValidateForm: {
        user: "",
        pass: "",
        pass2: ""
      },

      if_login: "",

    }
  },
  methods: {
    to_my(){
      this.$router.push('/my')
    },
    tuichu(){
      sessionStorage.removeItem('if_login');
      this.if_login=false;
      this.drawer=false
    },
    show_zhuce() {
      this.dialogFormVisible = true
    },
    click_my() {
      if (sessionStorage.getItem('if_login')) {
       this.drawer=true
      }else{
        this.login_dialogFormVisible = true
      }

    },

    login_submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          sessionStorage.setItem('if_login',1),
          this.$message.success("登录成功!")
          this.login_dialogFormVisible = false;
          this.if_login=true;
         
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message.success("注册成功!")
          this.dialogFormVisible = false;
          this.numberValidateForm = {
            user: "",
            pass: "",
            pass2: ""
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }


  }
}
</script>

<style scoped>
.home_top {
  top: 0;
  border-bottom: 1px solid rgba(2, 2, 2, 0.25);
  box-shadow: 0 0 2px rgb(0 0 0 / 16%);
  height: 70px;
}
.content {
  width: 1400px;
  margin: 0 auto;
  display: flex;
  height: 70px;
  justify-content: space-between;
}

.right {
  display: flex;
}

.btn_txt {
  cursor: pointer;
  position: relative;
  font-size: 20px;
  top: 24px;
  right: 40px;
}

.login_icon {
  width: 45px;
  height: 45px;
  padding-top: 12px;
  cursor: pointer;
}

img {
  width: 45px;
  height: 45px;
}


.li1 {
  padding-left: 20px;
}

.logo {
  width: 190px;
  height: 60px;
  position: relative;
  top: -13px;
}

.links {
  /*noinspection CssUnresolvedCustomProperty*/
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
}

ul {
  display: flex;
}

li {
  line-height: 40px;
  padding: 0 20px;
}


.menu{
  width: 100%;
  background: rgba(0, 122, 204,0.4);
}
.item{
  cursor: pointer;
  width: 100%;
  height: 55px;
  border-bottom: solid 1px #fff;
  text-align: center;
  line-height: 55px;
}

</style>

