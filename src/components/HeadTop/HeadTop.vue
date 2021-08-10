<template>
  <div class="HeadTop">

    <div class="trademark">
      <el-button  circle>
        <div class="d1">
          {{mes}}
        </div>
        <div class="d2">
          
        </div>
        <div class="d3">
          
        </div>                
      </el-button>
      
    </div>

    <div class="searchIput">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input1">
      </el-input>   
    </div>
    <!-- <router-link to="/Login">登陆</router-link>
    <router-link to="/Regist">注册</router-link> -->
    <div class="content">
      <!-- 登陆 -->
      <router-link to="/Login">
        <!-- <div class="demo-type"> -->
          <i class="el-icon-s-custom"></i>
        
        
      </router-link>
      <!-- 全部商品 -->
      <router-link to="/AllProducts" class="AllProducts">全部商品</router-link>   
    </div>
 
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
  export default {
    name:'HeadTop',
    data() {
      return {
        mes:'HeadTop'
      }
    },
    setup() {
    return {
      input1: ref('hh '),
    }
  }
  }
</script>

<style scoped>
.HeadTop{
  position: relative;
  width: 100%;
  height: 100px;
  background-color: rgb(206, 61, 42);
  font-size: 18px;
  line-height:100px;
}
.trademark{
  width: 30%;
  height: 100%;
  float: left;
  text-align: center;
  /* background-color: aqua; */
}
.searchIput{
  width: 35%;
  height: 100%;
  float: left;  
  /* background-color: black; */
}
.content{
  width: 35%;
  height: 100%;
  float: left; 
  text-indent: 30%;
  word-spacing:100px;
  /* background-color:blueviolet; */
}
.el-icon-s-custom{
  font-size: 30px;
  vertical-align:middle;
}
.AllProducts{
  font-size: 20px;
  margin-left: 50px;
  text-decoration: none;
}
el-button.d1{
  position:absolute;
  z-index: 10;
  background-color: rgb(219, 21, 193);
}
el-button.d2{
  width: 50%;
  height: 100%;
  float: left;
  background-color: rgb(231, 36, 36);
}
el-button.d3{
  width: 50%;
  height: 100%;
  float: left;
  background-color: rgb(66, 230, 17);
}
</style>