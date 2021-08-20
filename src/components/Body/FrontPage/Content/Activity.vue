<template>
  <div class="Activity">
    <div class="d1">
        <img src='../../../../assets/img/2.jpg' />
      <div>
        <p>商品信息</p>
        <el-input-number size="small" v-model="num1" class="counter"></el-input-number>
      </div>
    </div>

    <div class="d1">
        <img src='../../../../assets/img/2.jpg' />
      <div>
        <p>商品信息</p>
        <el-input-number size="small" v-model="num2" class="counter"></el-input-number>
      </div>
    </div>

    <div class="d1">
        <img src='../../../../assets/img/2.jpg' />
      <div>
        <p>商品信息</p>
        <el-input-number size="small" v-model="num3" class="counter"></el-input-number>
      </div>
    </div>      

    <div class="d1">
        <img src='../../../../assets/img/2.jpg' />
      <div>
        <p>商品信息</p>
        <el-input-number size="small" v-model="num4" class="counter"></el-input-number>
      </div>
    </div>      
  </div>
</template>

<script>
  export default {
    name:'Activity',
    data() {
      return {
        mes:'Activity',
        num1:1,
        num2:1,
        num3:1,
        num4:1,
      }
    },
  }
</script>

<style scoped>
.Activity{
  width: 90%;
  margin-top: 50px;
  margin-left: 5%;
  height: 200px;
  background-color: white;  
}
.d1{
  width: 25%;
  height: 100%;
  float: left;
  
  background-color: white;  
}
.d1>img{
  width: 100%;
  height: 80%;  
}
.d1>div{
  width: 100%;
  height: 20%;    
  /* background-color: blueviolet; */
  line-height:32px;
}
.d1 p{
  width: 57%;
  height: 100%;
  float: left;
  text-align: center;
}
.counter{
  width: 40%;
  height: 100%;
  float: left;
  color: aqua;
  /* text-align: right; */
  /* margin-left: 100px; */
}
.el-input-number--small .el-input-number__increase, .el-input-number--small .el-input-number__decrease{
  width: 5%
}
.el-input-number--small .el-input-number__increase, 
.el-input-number--small .el-input-number__decrease{
    width: 5%
}
</style>