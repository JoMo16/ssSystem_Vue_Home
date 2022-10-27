<template>
  <div class="container">


<el-container>


    <el-aside width="25%">
      <el-menu default-active="" :router="true" :unique-opened="true">

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i><span>个人设置</span>
          </template>

          <el-menu-item-group>
            <el-menu-item index="/my/personalInfo">个人信息</el-menu-item>
          </el-menu-item-group>

          <el-menu-item-group>
            <el-menu-item index="/my/accountInfo">账号管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item index="/my/tradeHistory">
          <i class="el-icon-document"></i>
          <span slot="title">交易记录</span>
        </el-menu-item>

        <el-menu-item index="4" disabled>
          <i class="el-icon-help"></i>
          <span slot="title">帮助文档</span>
        </el-menu-item>

      </el-menu>
    </el-aside>



      <el-main>
        <router-view/>
      </el-main>

</el-container>


  </div>

</template>
<script>
export default {
  name: "my"
}
</script>

<style scoped>
.container{
  width: 60%;
  margin-left: 20%;
}

.el-aside{
  padding-left: 20px;
}
h2{
  text-align: center;
  line-height: 80px;
}
.el-header{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #410303;
  /*background-color: #ececec;*/
  background-color: rgba(151, 229, 229, 0.38);
  font-weight: lighter;
  font-size: 25px;
  font-family: 宋体;
}
.el-menu{
  margin: 1px 0px 10px 0px;
  uniqueOpened:'true'
}
.el-container{
  height: 100%;
}
</style>