<template>

  <div class="goodList">
    <div class="title">
      <h3 class="titleInfo">商品列表</h3>
      <img src="../assets/icon_search.png" class="icon_search" alt="">
      <el-input v-model="searchInfo" class="searchBox" placeholder="搜索"></el-input>
    </div>

    <hr>

     <div class="goods">
        <div v-for="item in imgUrl" class="img-box" @click="to_goodsContent">
              <el-card :body-style="{ padding: '0px' }" class="box-card">
                <img :src=item.url class="goodsImage">
                <div class="goodsCard" style="">
                  <span class="goodsName">{{item.name}}</span>
                  <span class="goodPrice" >¥{{imgPrice}}</span>
                </div>
              </el-card>
        </div>
     </div>

    <div class="footer">
      <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
      >
      </el-pagination>
    </div>

  </div>
</template>

<script>
export default {
  name: "goodsList",
  data(){
    return{
      searchInfo:null,
      imgUrl:[
        {id:"001", name:"碧海潮声", url:require("@/assets/pic/BiHaiChaoSheng.jpg")},
        {id:"002", name:"碧海潮声", url:require("@/assets/pic/BiHaiChaoSheng.jpg")},
        {id:"003", name:"碧海潮声", url:require("@/assets/pic/BiHaiChaoSheng.jpg")},
        {id:"003", name:"碧海潮声", url:require("@/assets/pic/BiHaiChaoSheng.jpg")},
        {id:"003", name:"碧海潮声", url:require("@/assets/pic/BiHaiChaoSheng.jpg")},
        {id:"003", name:"碧海潮声", url:require("@/assets/pic/BiHaiChaoSheng.jpg")},
        {id:"003", name:"碧海潮声", url:require("@/assets/pic/BiHaiChaoSheng.jpg")},
        {id:"003", name:"碧海潮声", url:require("@/assets/pic/BiHaiChaoSheng.jpg")},
        {id:"003", name:"碧海潮声", url:require("@/assets/pic/BiHaiChaoSheng.jpg")},
        // {id:"004", name:"碧海潮声", url:require("@/assets/pic/BiHaiChaoSheng.jpg")},
      ],
      imgPrice:15
    }
  },
  methods:{
    to_goodsContent(){
      this.$router.push("/goodsContent")
    }
  }
}
</script>

<style scoped>

.icon_search{
  height: 40px;
  width: 40px;
  float: right;
  margin: 20px 50px 20px 20px;
}

.searchBox{
  float: right;
  width: 400px;
  height: 25px;
  margin: 20px 5px 20px 20px;
}

.titleInfo{
  width: 20%;
  font-size: 30px;
  margin: 20px 20px 20px 150px;
}

.title{
  height: 80px;
  width: 100%;
  /*background-color: red;*/
}

*{
  width: 80%;
  float:left;
  margin-left: 5%;
  font-family: 微软雅黑;
}

.goods{
  width: 100%;
}

.img-box{
  width: 450px;
  height: 250px;
  /*border: solid 1px black;*/
  margin: 20px 0 0 50px;
  padding: 0px;
}

.box-card{
  width: 100%;
  margin: 0px;
  padding: 0px;
}

.goodsImage{
  width: 100%;
  margin: 0;
}

.goodsCard{
  /*background: #c2eed0;*/
  padding: 14px 0 14px 20px ;
  margin: 0;
  width: 100%
}

.goodsName{
  width: 50%;
  margin: 0;
  font-family: 黑体;
  font-size: x-large;
  color: black;
/*  1522*/
}

.goodPrice{
  float: right;
  width: 30%;
  color: red;
  font-size: x-large;
  margin: 0;
}

.footer{
  margin-top: 40px;
  padding: 40px;
  width: 100%;
  height: 60px;
  display: flex;
  text-align: center;
}

el-pagination{

}


</style>