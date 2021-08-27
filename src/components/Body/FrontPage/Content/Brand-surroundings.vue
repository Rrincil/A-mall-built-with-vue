<template>
  <div class="BrandSurroundings">
    <!-- 上部 -->
    <div class="d1">
      品牌周边{{mes}}
    </div>
    <!-- 中部 -->
    <div class="d2">
      <div class="d2d1">
        <el-row width='100%' height="200px">
          <el-col :span="24" v-for="item in brandprod" class="brand">
            <el-card :body-style="{ padding: '0px',height:'560px',width:'100%'}">
              <img :src=item.imgurl class="image">
              <div style="padding: 14px;">
                <span>{{item.name}}</span><span>{{item.price}}</span>
                <div class="bottom">
                  <time class="time">{{item.shopname}}</time>
                  <el-button type="text" class="button" @click='submitForm(item)'>加入购物车</el-button>
                </div>
              </div>
            </el-card> 
          </el-col>
        </el-row>
      </div>

      <div class="d2d2">
        <div class="d2d2d1">
          <el-row width='100%' height="200px">
            <el-col :span="24" v-for="item in brandprod" class="brand">
              <el-card :body-style="{ padding: '0px',height:'230px',width:'100%'}">
                <img :src=item.imgurl class="image2">
                <div style="padding: 14px;">
                  <span>{{item.name}}</span><span>{{item.price}}</span>
                  <div class="bottom">
                    <time class="time">{{item.shopname}}</time>
                    <el-button type="text" class="button" @click='submitForm(item)'>加入购物车</el-button>
                  </div>
                </div>
              </el-card> 
            </el-col>
          </el-row>
        </div>

        <div class="d2d2d1">
          <el-row width='100%' height="200px">
            <el-col :span="24" v-for="item in brandprod" class="brand">
              <el-card :body-style="{ padding: '0px',height:'230px',width:'100%'}">
                <img :src=item.imgurl class="image2">
                <div style="padding: 14px;">
                  <span>{{item.name}}</span><span>{{item.price}}</span>
                  <div class="bottom">
                    <time class="time">{{item.shopname}}</time>
                    <el-button type="text" class="button" @click='submitForm(item)'>加入购物车</el-button>
                  </div>
                </div>
              </el-card> 
            </el-col>
          </el-row>
        </div>

      </div>


    </div>
    <!-- 下部 -->
    <div class="d3">





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
    name:'BrandSurroundings',
    data() {
      return {
        mes:'Brand Surroundings',
        brandprod:[]
      }
    },
    methods: {
      findbrand(){
        this.$axios.get('/api/brand/getallmes').then(res=>{
          this.brandprod = res.data
        })
      }
    },
    created() {
      this.findbrand()
    },
  }
</script>

<style scoped>
.BrandSurroundings{
  width: 90%;
  margin-top: 50px;
  /* margin-bottom: 50px; */
  margin-left: 5%;
  height: 600px;
  text-indent: 5%;
  font-size: 20px;
  line-height: 35px;
  color: red;
  background-color: white;   
}
.d1{
  width: 100%;
  height: 10%;  
  background-color: white;    
}
.d2{
  width: 100%;
  height: 100%;  
  background-color: white;    
}
.d2d1{
  width: 50%;
  height: 100%;  
  float: left;
  /* background-color: rgb(248, 19, 19);  */
}
.d2d2{
  width: 50%;
  height: 100%;  
  float: left;
  /* background-color: rgb(62, 224, 76);  */
}
.d2d2d1{
  width: 100%;
  height: 50%;  
  /* float: left; */
  /* background-color: rgb(37, 40, 216);  */
}
.d3{
  width: 100%;
  height: 30%;  
  /* background-color: rgb(197, 11, 126);     */
}
/* .d3d1{
  width: 25%;
  height: 100%;
  float: left;
  
  background-color: rgb(213, 226, 39);  
} */
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
.brand{
  width: 100%;
  padding: 20px;
}
.title{
  width: 100%;
  height: 10%;  
  background-color: white;  
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: 50px;
}

.image {
  width: 60%;
  height: 80%;
  display: block;
}
.image2 {
  width: auto;
  height: 80%;
  display: block;
}
div.e-col.el-col-6.d1:hover{
padding: 10px;
}
div.el-row{
  width: 100%;
  height: 400px;
}
</style>