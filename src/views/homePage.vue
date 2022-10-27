<template>
  <div class="container" style="">

    <!--第一行-->
    <div class="line1">
      <!--第一行左边-->
      <div class="line1Left">
        <div class="desc1">粉丝们的支持才是创作的动力</div>
        <div class="desc2">帮助创作者建立自己的付费会员平台,获得持续的资金支持</div>
        <el-button type="warning" class="btnJoinUs" style="margin-top: 10px" >加入我们</el-button>
      </div>
      <!--第一行右边-->
      <div class="line1Right">
          <img src="https://s12.azz.net/site/azz-creators.png" alt="" height="100%">
      </div>
    </div>

    <div class="line2">
      <p class="recommend">商品推荐</p>
      <div v-for="item in imagePath">
        <el-card class="box-card" style="width: 30%; float: left; margin-right: 1.5%; margin-left: 1.5%">
          <div slot="header" class="clearfix" >
            <span>{{item.imgName}}</span>
          </div>
          <di>
            <img :src=item.imgUrl width="100%" :alt=item.imgName>
          </di>
        </el-card>
      </div>
    </div>

    <div class="line3">
      <!--标题-->
      <div class="line3Title">
        <p class="titleText">ssSystem网站特色</p>
      </div>

      <div class="line3content">
        <div style="padding-top: 40px">
          <img src="https://s12.azz.net/site/membership-card.svg" width="150px" style="float: left; margin-left: 125px">
          <div style="float: left; margin-left: 125px">
            <h2>创作者们持续的经济获取来源</h2>
            <h4>创作可以持续获得粉丝们的赞助以提升创作者的创作动力</h4>
          </div>
        </div>

        <br>
        <div style="padding-top: 200px">
          <img src="https://s12.azz.net/site/membership.svg" width="150px" style="float: right; margin-right: 125px">
          <div style="float: right;margin-right: 125px">
            <h2>付费专属的内容</h2>
            <h4>可以付费购买不同的作品,后续会加入创作者入驻</h4>
          </div>
        </div>

        <br>
        <div style="padding-top: 200px">
          <img src="https://s12.azz.net/site/payment.svg" width="150px" style="float: left; margin-left: 125px" >
          <div style="float: left; margin-left: 125px">
            <h2>支持各种类型支付方式</h2>
            <h4>强大的支付系统,提高用户的购买率</h4>
          </div>
        </div>

      </div>


    </div>

    <div class="line4" style="margin-top: 15px">
      <div class="line4Content" style="font-size: 20px">
          <div style="float: left; padding-left: 40%">@2022</div>
          <div style="float: left; padding-left: 15px">
            <a href="https://github.com/" style="color: orange">ssSystem</a>
          </div>
          <div style="float: left; padding-left: 15px">
            <a href="https://github.com/" style="color: orange">联系</a>
          </div>
          <div style="float: left; padding-left: 15px">
            <a href="https://github.com/" style="color: orange">帮助</a>
          </div>
      </div>
      <div class="line4Footer">

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "homePage",
  data(){
    return {
      imagePath:[
        {id: "001",imgName:"碧海潮声", imgUrl: require("@/assets/pic/BiHaiChaoSheng.jpg")},
        {id: "002",imgName:"晨光星斗", imgUrl: require("@/assets/pic/ChenGuangXingDou.jpg")},
        {id: "003",imgName:"嘟嘟可的魔王城堡", imgUrl: require("@/assets/pic/DuDuKeDeMoWangChengBao.jpg")},
      ],
    }
  }
}
</script>

<style scoped>
*{
  font-family: "微软雅黑 Light";
}

.container{
  padding-left: 15%;
  padding-top: 2%;
  padding-right: 15%
}

.line1{
  height: 180px;
  /*background-color: #fdc0c0;*/
}


.line1Left{
  width: 40%;
  height: 75%;
  float: left;
  margin: 0 0 0 0;
  padding-left: 10%;
  /*background-color: #ececec;*/
}
.line1Right{
  width: 30%;
  height: 75%;
  float: right;
  /*background-color: aqua;*/
  margin: 1% 10% 0 1%;
}

.line2{
  height: 280px;
  width: 100%;
  background-color: rgba(69, 227, 171, 0.82);
}

.recommend{
  margin-left: 5%;
  margin-top: 0px;
  font-size: 20px;
  padding-top: 15px;
}

.desc1{
  padding: 20px 0px 10px 0px;
  color: #e09a1c;
  /*font-size: large;*/
  font-size: 25px;
}
.desc2{
  /*padding-top: 0;*/
  margin-top: 0;
}

h6{
  font-size: 5px;
}
.btnJoinUs{
  float: left;
  margin-left: 50%;
}

.line3{
  width: 100%;
  height: 730px;
  margin-top: 80px;
  /*background-color: #80f382;*/
}
.line3Title{
  height: 20px;
}
.titleText{
  font-size: 30px;
  text-align: center;
}
.line3content{
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;
  height: 100%;
}


</style>