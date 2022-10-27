<template>
    <div class="container">

      <div class="left">

        <div class="imgSpace">
          <div class="demo-image">
              <el-image
                  style="width: 100%; height: 100%"
                  :src="imageInfo.url"
                  :fit="fill"></el-image>
            </div>
        </div>


          <div class="shopInfo">
            <div class="goodsName">
              商品名称：{{imageInfo.name}}
            </div>
            <div class="goodsPrice">
              价格:￥{{imageInfo.price}}
            </div>
          </div>

          <div class="goodsDescription">
            <div class="title">
              商品描述
            </div>
            <div class="desc">
              {{imageInfo.description}}
            </div>
          </div>

        <div class="orderItem">

          <el-button type="primary" class="btnOrder">下单</el-button>
        </div>

      </div>

      <div class="right">
        <div class="course">
          <!--走马灯(轮播图)-->
          <div class="block" style="width: 100%; float: left">
            <el-carousel height="280px">
              <el-carousel-item v-for="item in imgUrl" :key="item.id">
                <img :src=item.imgUrl style="width: 100%">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: "goodsContent",
  data(){
    return {
      imageInfo: {
        id:1,
        url: require("@/assets/pic/ChenGuangXingDou.jpg"),
        name: '晨光星斗',
        price:15.5,
        description:"萌娘百科，簡稱萌百，是一個以ACGN相關" +
            "文化為主題的線上百科全書，2010年10月11日建立，分中、英、日三" +
            "種語言版本，主要收錄ACGN角色、作品、用語，所有條目都以「萌」的形式出現。 维基百科",
      },
      imgUrl:[
        {id: "001", imgUrl: require("@/assets/pic/QianNianZhiFeng.jpg")},
        {id: "002", imgUrl: require("@/assets/pic/QianNianZhiFeng.jpg")},
        {id: "003", imgUrl: require("@/assets/pic/QianNianZhiFeng.jpg")},
        {id: "004", imgUrl: require("@/assets/pic/QianNianZhiFeng.jpg")}
      ]

    }
  }
}
</script>

<style scoped>



*{
 width: 100%;
  margin: 0;
}

.container{
  width: 80%;
  margin-left: 10%;
}

.left{
  width: 70%;
  /*background-color: #e09a1c;*/
  height: 800px;
  float: left;
}
.right{
  width: 30%;
  height: 800px;
  /*background-color: aqua;*/
  float: left;
}

.imgSpace{
  width: 80%;
  height: 360px;
  /*background-color: black;*/
  margin: 5% 0 0 10%;
}

.shopInfo{
  height: 30px;
  margin: 0;
  width: 100%;
  color: #c2350b;
  /*background-color: aliceblue;*/
}

.goodsName{
  width: 40%;
  height: 40px;
  /*background-color: black;*/
  font-size: 25px;
  float: left;
  margin: 10px 0 0 14%;
}

.goodsPrice{
    width: 20%;
    height: 40px;
    float: right;
    margin: 10px 15% 0 0px;
    font-size: 25px;
}

.goodsDescription{
  width: 80%;
  height: 200px;
  /*background-color: aqua;*/
  margin: 30px 0 0 10%;
}

.title{
  font-size: 30px;
  margin-left: 25px;
  letter-spacing: 3px;
  margin-bottom: 5px;
}

.desc{
  text-indent: 25px;
  width: 100%;
  height: auto;
  font-size: 20px;
}

.block{
  margin-top: 11%;
}

.orderItem{
  width: 100%;
  height: auto;
}

.btnOrder{
  width: auto;
  float: right;
  margin-right: 15%;
}

</style>