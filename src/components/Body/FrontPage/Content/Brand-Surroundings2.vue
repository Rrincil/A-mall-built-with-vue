<template>
  <div class="BrandSurroundings">
    <!-- 上部 -->
    <div class="d1">
      品牌周边{{mes}}
    </div>
    <!-- 中部 -->
    <div class="d2">
      <div class="d2d1">
        <div class="d2d1d1">

        </div>      
        <div class="d2d1d1">

        </div>            
      </div>
      <div class="d2d2">

      </div>

    </div>
    <!-- 下部 -->
    <div class="d3">

      <div class="d3d1">
          <!-- <img src='../../../assets/img/2.jpg' width="100%" height="100%"/> -->
        <!-- <div class="d3d1d1">
          <p>商品信息</p>
          <el-button></el-button>
        </div> -->
      </div>

      <div class="d3d1">
          <!-- <img src='../../../assets/img/2.jpg' /> -->
        <!-- <div class="d3d1d1">
          <p>商品信息</p>
          <el-button></el-button>
        </div> -->
      </div>

      <!-- <div class="d3d1">
          <img src='../../../assets/img/2.jpg' />
        <div class="d3d1d1">
          <p>商品信息</p>
          <el-button></el-button>
        </div>
      </div>

      <div class="d3d1">
          <img src='../../../assets/img/2.jpg' />
        <div class="d3d1d1">
          <p>商品信息</p>
          <el-button></el-button>
        </div>
      </div> -->

    </div>

  </div>
</template>

<script>
  export default {
    name:'BrandSurroundings2',
    data() {
      return {
        mes:'Brand Surroundings2'
      }
    },
  }
</script>

<style scoped>
.BrandSurroundings{
  width: 90%;
  margin-top: 150px;
  /* margin-bottom: 50px; */
  margin-left: 5%;
  height: 500px;
  text-indent: 5%;
  font-size: 20px;
  line-height: 35px;
  color: red;
  /* background-color: white;    */
}
.d1{
  width: 100%;
  height: 10%;  
  background-color: white;    
}
.d2{
  width: 100%;
  height: 70%;  
  background-color: white;    
}
.d2d1{
  width: 50%;
  height: 100%;  
  float: left;
  background-color: rgb(248, 19, 19); 
}
.d2d1d1{
  width: 100%;
  height: 50%;  
  background-color: rgb(30, 152, 223);   
}
.d2d2{
  width: 50%;
  height: 100%;  
  float: left;
  background-color: rgb(62, 224, 76); 
}

.d3{
  width: 100%;
  height: 30%;  
  background-color: rgb(197, 11, 126);    
}
.d3d1{
  width: 25%;
  height: 100%;
  float: left;
  
  background-color: rgb(213, 226, 39);  
}
/* img{
  width: 100%;
  height: 80%; 
  overflow: hidden;
  position: relative; 
} */
.d3d1d1{
  width: 100%;
  height: 20%;    
  background-color: rgb(93, 9, 172);
  line-height:32px;
}
.d3d1d1 p{
  width: 57%;
  height: 100%;
  float: left;
  text-align: center;
}
.el-button{
  width: 30%;
  height: 100%;
  float: left;
  text-align: center;  
}
</style>