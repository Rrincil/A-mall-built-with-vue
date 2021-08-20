<template>
  <div class="d1">
    <div class="d2">
    </div>

    <el-form :model="loginUser" :rules="rules" ref="loginfrom" label-width="100px" class="login-ruleForm">
      <p>登陆</p>
      <el-form-item label="用户名" prop="name"  >
        <el-input v-model="loginUser.name" autocomplete="off" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" >
        <el-input type="password" v-model="loginUser.password"  autocomplete="off" placeholder="请输入密码"></el-input>
      </el-form-item>      
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginfrom')" class="">提交</el-button>
        <el-button @click="resetForm('loginfrom')">重置</el-button>
      </el-form-item>
      <router-link to="/Regist">注册</router-link>
  </el-form>
    
  </div>
</template>

<script>
  export default {
    name:'Login',
    data() {
      return {
        mes:'Login',
        loginUser:{
          name:'',
          password:'',
        }
      }
    },
  }
</script>

<style scoped>
.d1{
  position: relative;
  width: 100%;
  height: 700px;
}
.d2{
  position: relative;
  width: 100%;
  height: 700px;
  background-image: url('../../assets/img/1.jpg');
  opacity: 0.35;  
}
.login-ruleForm{
  position:absolute;
  top: 20%;
  left: 35%;
  background-color: white;
  width: 400px;
  height: 300px;
  text-align: center;
  z-index: 99;
  padding-left: 0px;
  padding-top: 0px;
  padding-right: 40px;
  padding-bottom: 20px;
}
.login-ruleForm p{
  font-size: 20px;
  display: block;
  margin-bottom: 20px;
  margin-top: 20px;
}

</style>