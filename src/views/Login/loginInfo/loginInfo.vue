<template>
    <HeadTop></HeadTop>
    <el-row >
      <!-- 空白 -->
      <el-col :span="2" height='100%'>  
      </el-col>   
      <el-col :span="20" height='100%'>  
        <div class="d1">
          <el-avatar size="medium" :src="circleUrl" class="elcustom"></el-avatar>
          {{$store.state.user.name}}的主页
          <router-link to="/" class="firstpage">首页</router-link>           
        </div>
        <div class="d2">
          <!-- <el-row :gutter="24" > -->
            <div class="d2d1">
              <el-button type='private' v-for="item in info">{{item}}</el-button>
            </div>
            <div class="d2d2"></div> 
          <!-- </el-row >            -->
        </div>
      </el-col>
      <el-col :span="2" height='100%'>  
      </el-col>            
    </el-row>
</template>

<script>
import HeadTop from '../../../components/HeadTop/HeadTop.vue'
  export default {
    name:'loginInfo',
    data() {
      return {
        circleUrl:"", 
        info:['基本信息','账户','收藏','喜欢']       
      }
    },
    components:{
      HeadTop
    },
    created() {
      this.circleUrl=this.$store.state.user.avater
    },
  }
</script>

<style scoped>
.d1{
  width: 100%;
  height: 50px;

  padding-top:30px;
}
.elcustom{
  vertical-align:middle;
}
.firstpage{
  text-align: right;
  font-size: 20px;
  text-decoration: none;
  
}
.d2{
  width: 100%;
  height: 800px;  

}
.d2d1{
  width: 20%;
  height: 100%;  
  float: left;
  border: 2px groove rgb(243, 17, 9);
}
.d2d2{
  width: 80%;
  height: 100%;   
  float: left;
}
.d2d1 button{
  /* display:block; */
  /* margin-top:10px; */
  margin-left: 0px;
  /* margin-bottom:10px; */
  width: 100%;
  /* text-indent: 10%; */
  height: 30px;
  border-bottom: 1px solid rgb(243, 17, 9);
}
</style>