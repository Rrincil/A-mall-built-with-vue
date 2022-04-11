<template>
  <div class="HeadTop">
    <el-row >
      <!-- 空白 -->
      <el-col :span="2" height='100%'>  
      </el-col>    
      <!-- 商标 -->
      <el-col :span="4">
        <el-button  circle>
          <div class="d1">
            {{mes}}
          </div>              
        </el-button>      
      </el-col>
      <!-- 空白 -->
      <el-col :span="2">  
        <router-link to="/">首页</router-link>  
      </el-col> 

      <!-- 中间 搜索框 -->       
      <el-col :span="8">  
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input1">
        </el-input>   
      </el-col>

      <!-- 右边 -->
      <el-col :span="1">  
      </el-col>      
      <!-- 全部商品 -->   
      <el-col :span="2">
        <router-link to="/AllProducts" class="AllProducts">全部商品</router-link>        
      </el-col> 
      <!--登陆 头像 -->
      <el-col :span="1">                
        <router-link :to="pathtologin">
          <el-avatar size="medium" :src="circleUrl" class="elcustom"></el-avatar>         
        </router-link>     
      </el-col>
      <!-- 个人信息 -->   
      <el-col :span="2">
        <div class="welcome">
          <p v-if="loginmes" >您还未登陆！</p>          
          <p v-if="!loginmes" class="welcome1">欢迎您回来</p>
          <p class="welcome2">{{$store.state.user.name}}</p>
        </div>         

        
      </el-col>
      <!-- 箭头 v-if="!loginmes"-->
      <el-col :span="1" >  
        <el-dropdown @command="setloginfo" trigger='click' v-if="!loginmes">
          <span class="el-dropdown-link">
            <i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="info">用户信息</el-dropdown-item>
              <el-dropdown-item command="cart">购物车</el-dropdown-item>
              <el-dropdown-item command="order">我的订单</el-dropdown-item>              
              <el-dropdown-item command="exit">退出登陆</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
      <el-col :span="1">         
      </el-col>      
    </el-row>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode';
import { defineComponent, ref } from 'vue'
  export default {
    name:'HeadTop',
    data() {
      return {
        mes:'HeadTop',
        circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        loginmes:false,
        pathtologin:'/login',
        usercart:{
            cart:this.$store.state.user.cart,
            id:this.$store.state.user.id        
        }
      }
    },
    setup() {
    return {
      input1: ref('hh '),
    }
    },
    methods: {
      setloginfo(command) {
        switch(command){
          case 'info':
            this.$router.push('/accountInfo');
            break;
          case 'cart':
            this.$router.push('/cart');
            break;  
          case 'order':
            this.$router.push('/order');
            break;             
          case 'exit':
            this.logout();
            break;                      
        }
        // this.$message('click on item ' + command);
      },
      logout(){
        //清除token
        localStorage.removeItem('eletoken');
        //设置 vuex store
        this.$store.dispatch('clearCurrentState')
        //跳转
        this.loginmes = !this.loginmes
        this.pathtologin ='/login'
        this.circleUrl = "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        this.$store.state.count = 0
        this.$store.state.cart = []
        this.$router.push('/');
      },  

    },
  created() {
          //判断是否登陆
    if(localStorage.eletoken){
      this.loginmes = false,
      this.pathtologin ='/accountInfo' ,
      this.circleUrl = this.$store.state.user.avatar
    }else{
          
      this.loginmes = true  
      
    }    
  },    
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
div.el-row{
  height: 100px;
}
.el-col {
  height: 100px;
}
.elcustom{
  font-size: 30px;
  vertical-align:middle;
}
.welcome{
  width: 100%;
  height: 100px;
  overflow: hidden; 
  /* line-height: 3px;  */
}
.welcome1{
  margin-top: 30px;
  width: 100%;
  height: 30px;
  overflow: hidden; 
  line-height: 20px;   
}
.welcome2{
  /* margin-top: 15px; */
  width: 100%;
  height: 30px;
  overflow: hidden; 
  line-height: 20px;   
}
.AllProducts{
  width: 100%;
  height: 40px;
  font-size: 20px;
  text-decoration: none;
}
el-button.d1{
  position:absolute;
  z-index: 10;
  background-color: rgb(219, 21, 193);
}
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown{
  color:black;
}
</style>