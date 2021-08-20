<template>
  <div class="d1">
    <div class="d2">
    </div>

    <el-form :model="registUser" :rules="rules" ref="registfrom" label-width="100px" class="regist-ruleForm">
      <p>注册</p>
      <el-form-item label="用户名" prop="name"  >
        <el-input v-model="registUser.name" autocomplete="off" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email" >
        <el-input type="email" v-model="registUser.email"  autocomplete="off" placeholder="请输入邮箱"></el-input>
      </el-form-item> 
      <el-form-item label="密码" prop="password" >
        <el-input type="password" v-model="registUser.password"  autocomplete="off" placeholder="请输入密码"></el-input>
      </el-form-item>   


      <el-form-item>
        <el-button type="primary" @click="submitForm('registfrom')" class="">提交</el-button>
        <el-button @click="resetForm('registfrom')">重置</el-button>
      </el-form-item>
  </el-form>

  </div>
</template>

<script>
  export default {
    name:'Regist',
    data() {
      return {
        mes:'Regist',
        registUser:{
          name:'',
          password:'',
          email:'',
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
.regist-ruleForm{
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
.regist-ruleForm p{
  font-size: 20px;
  display: block;
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>