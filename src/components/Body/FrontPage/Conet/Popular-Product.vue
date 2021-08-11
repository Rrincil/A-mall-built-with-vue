<template>
  <div class="PopularProduct">
    <div class="d1" @mouseenter='showCart1' @mouseleave='showCart1'>
      <!-- 标题 -->
      <div class="title">
        热门商品{{mes}}
      </div>
       <!-- 商品图片信息 -->
      <div class="productmes">
        <!-- 图片 -->
        <img src='../../../../assets/img/1.jpg' />
        <!-- 商品信息加入购物车 -->
        <div class="Addcart" v-show="Addcarts1" >
          <div>
            <el-button plain>商品详情</el-button>
          </div>
                
          <div>
            <el-button round @click="AddToCart">加入购物车</el-button>
          </div>

        </div>         
      </div>
     
    </div>


    <div class="d1" @mouseenter='showCart2' @mouseleave='showCart2'>
      <!-- 标题 -->
      <div class="title">
        热门商品{{mes}}
      </div>
       <!-- 商品图片信息 -->
      <div class="productmes">
        <!-- 图片 -->
        <img src='../../../../assets/img/1.jpg' />
        <!-- 商品信息加入购物车 -->
        <div class="Addcart" v-show="Addcarts2" >
          <div>
            <el-button plain>商品详情</el-button>
          </div>
                
          <div>
            <el-button round @click="AddToCart">加入购物车</el-button>
          </div>

        </div>         
      </div>
     
    </div>

  </div>
</template>

<script>
  export default {
    name:'PopularProduct',
    data() {
      return {
        mes:'Popular Product',
        Addcarts1:false,
        Addcarts2:false
      }
    },
    methods: {
      showCart1(){
        this.Addcarts1=!this.Addcarts1
      },
      showCart2(){
        this.Addcarts2=!this.Addcarts2
      },
      AddToCart(){
        this.$store.commit('addcount')
      }

    },
  }
</script>

<style scoped>
.PopularProduct{
  width: 90%;
  margin-top: 50px;
  margin-left: 5%;
  height: 400px;
 
  font-size: 20px;
  line-height: 35px;
  color: red;
  background-color: white;   
}
.d1{
  position: relative;
  width: 50%;
  height: 100%;
  float: left;
  background-color: white;  
}
.title{
  width: 100%;
  height: 10%;  
  background-color: white;  
}
.productmes{
  width: 100%;
  height: 90%;  
  background-color: gold;
}
.productmes>img{
  width: 100%;
  height: 100%;  
  z-index: 30;
}
.Addcart{
  position:absolute;
  bottom:0px;
  width: 100%;
  height: 60px;
  text-indent: 30%;
  /* background-color: blueviolet; */
  z-index: 9;
}
.Addcart>div{
  width: 50%;
  height: 100%;
  float: left;
}
.Addcart button{
  margin-top: 10px;
  /* margin-left: 5%; */
  text-align: center;
}
.productmes:hover{
  width: 101%;
  height: 94%;  
  overflow: hidden;
  margin-top: -10px;
  margin-left: -3px;
  margin-right: -3px;
  margin-bottom: -1px;
  
}
</style>