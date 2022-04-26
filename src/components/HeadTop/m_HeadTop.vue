<template>
  <div class="HeadTop">
    <el-row>
      <!-- 商标 -->
      <el-col :span="4">
        <p>{{mes}}</p>
      </el-col>
      <!-- 首页 -->
      <el-col :span="2">  
        <router-link to="/m_BodyContent">
          <van-icon name="wap-home" size="40"/>        
        </router-link>  
      </el-col> 
      <el-col :span="1"> 
      </el-col>      
      <!-- 中间 搜索框 -->   
      <el-col :span="12">  
        <van-search
          v-model.lazy.trim="input1"
          shape="round"
          background="#CE3D2A"
          placeholder="裤子"
          @keyup.enter="searchInput()"
        >
          <template #action>
            <div @click="searchInput()">搜索</div>
          </template>
        </van-search>

      </el-col>
      <el-col :span="1" >      
      </el-col>  

      <!-- 用户登陆头像 v-if="!loginmes"-->
      <el-col :span="4" >  
        <el-dropdown @command="setloginfo" trigger='click'>
          <span class="el-dropdown-link">
            <van-icon name="https://cdn.jsdelivr.net/npm/@vant/assets/icon-demo.png"  size="40" color="yellow"/> 
          </span>
          
            <template #dropdown  v-if="!loginmes">
              <el-dropdown-menu>
                <el-dropdown-item command="info">用户信息</el-dropdown-item>
                <el-dropdown-item command="cart">购物车</el-dropdown-item>
                <el-dropdown-item command="order">我的订单</el-dropdown-item>              
                <el-dropdown-item command="exit">退出登陆</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
      </el-col>    
    </el-row>
  </div>
</template>

<script>
  export default {
    name:'m_HeadTop',
    data() {
      return {
        mes:'HeadTop',
        circleUrl:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        loginmes:false,
        pathtologin:'/login',
        usercart:{
            cart:this.$store.state.user.cart,
            id:this.$store.state.user.id        
        },
        input1:'裤子',
        outputValue:null,
        value1 :true
      }
    },
    setup() {
      return {
        // input1: ref('裤子'),
      }
    },
    methods: {
      changecolor(){
        if(this.value1){
          this.$store.state.bodycolor = 'black'

        }else{
          this.$store.state.bodycolor = 'blue'
        }
          
      },      
      searchInput(){
        console.log(this.input1);
        const item = {
          name:this.input1
        }
        this.$axios.post(`api/profile/text`,{
          name:this.input1
        })
          .then(res=>{
            console.log("1");
            this.outputValue = res.data
            console.log(this.outputValue);
            this.$store.commit('addSearch',this.outputValue)
        })   
        // bus.emit('InputName', this.input1) 
        this.$router.push({path:'/searchBar',query:{OutputValue:this.outputValue,InputValue:this.input1}})
      },
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
        this.$router.push('/m_BodyContent');
      },  

    },
  created() {
    this.changecolor();
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
  height: 50px;
  background-color: rgb(206, 61, 42);
  font-size: 1px;
  text-decoration: none;
  line-height:50px;
}
div.el-row{
  height: 100%;
}
el-col {
  height: 100%;
}
.el-col-1{
  height: 100%;
}
.el-col-2{
  font-size: 10px;
  height: 100%;
}
.el-col-4{
  height: 100%;
}
.el-col-4>p{
  font-size: 10px;
  line-height: 30px;
  text-align: center;
}
.el-col-6{
  height: 100%;
}
.el-col-8{
  height: 100%;
}
.el-col-8 input{
  height: 10px;
  width: 80%;
}
.el-col-12{
  height: 100%;
}
/* headtop */
:deep(.el-button){
  width: 40px;
  height: 10px;
  background-color: rgb(144, 33, 248);
}
/* 头像 */
.elcustom{
  font-size: 10px;
  height: 20px;
  width: 20px;
  vertical-align:middle;
}

:deep(.el-button el-button--default is-circle){
  width: 20px;
  height: 20px;
}
/* 欢迎回来 */
.welcome{
  width: 100%;
  height: 100%;
  overflow: hidden; 
  /* line-height: 3px;  */
}
.welcome p{
  width: 100%;
  height: 100%;
}
.welcome1{
  width: 100%;
  height: 50%;
  overflow: hidden; 
  font-size: 5px;
  line-height: 40px;   
}
.welcome2{
  /* margin-top: 15px; */
  width: 100%;
  height: 50%;
  font-size: 10px;
  overflow: hidden; 
  line-height: 20px;   
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
:deep(.el-button el-button--default is-circle){
  width: 20px;
  height: 20px;
}
.el-dropdown{
  color:black;
}
:deep(.el-input__inner){
  height:20px;
}
:deep(.el-input){
  height: 100px;
}

:deep(.el-dropdown-menu__item){
  
  font-size: 5px;
}

:deep(a.AllProducts){
  font-size: 10px;
  height: 10px;
}
:deep(.el-dropdown-menu__item){

}
.van-icon{
  margin-top: 5px;
}
:deep(.van-search){
  width: 100%;
  height: 100%;
}

</style>