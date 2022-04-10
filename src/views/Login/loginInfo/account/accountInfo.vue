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
              <div class="d2d1d1">
                <router-link :to="item.path" v-for="item in info" :key="item">
                  <el-button type='private'  >{{item.name}}</el-button>
                </router-link>
              </div>
            </div>
            <!-- 右边信息 -->
            <div class="d2d2">
              <router-view tag="account"></router-view>
            </div> 
          <!-- </el-row >            -->
        </div>
      </el-col>
      <el-col :span="2" height='100%'>  
      </el-col>            
    </el-row>
</template>

<script>
import HeadTop from '../../../../components/HeadTop/HeadTop.vue'
  export default {
    name:'loginInfo',
    data() {
      return {
        circleUrl:"", 
        info:[
          {
            name:'基本信息',
            path:'/basicinfo'

          },
          {
            name:'钱包',
            path:'/wallet'
          },
          {
            name:'收藏',
            path:'/favorites'
          },
          {
            name:'密码设置',
            path:'/secretcode'
          },
          {
            name:'银行卡绑定',
            path:'/bank'
          }
        ]       
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
  height: 400px;  

}
.d2d1{
  width: 20%;
  height: 100%;  
  float: left;
  
}
.d2d1d1{
  width: 100%;
  height: 100%;  
  border: 2px groove rgb(243, 17, 9);  
}
.d2d2{
  width: 80%;
  height: 100%;   
  float: left;
  /* padding:10px; */
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