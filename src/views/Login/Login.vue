<template>
  <div class="d1">
    <div class="d2">
    </div>

    <el-form :model="loginUser" :rules="rules" ref="loginfrom" label-width="100px" class="login-ruleForm">
      <p>登陆</p>
      <el-form-item label="邮箱" prop="email"  >
        <el-input v-model="loginUser.email" autocomplete="off" placeholder="请输入邮箱" type='meail'></el-input>
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
import jwt_decode from 'jwt-decode';
import { log } from 'util';
  export default {
    name:'Login',
    data() {
      return {
        mes:'Login',
        loginUser:{
          name:'',
          password:'',
        },
        rules:{
          email:[{
            type:'email',
            required:true,
            message:'邮箱格式不正确',
            trigger:'blur'             

          }],
          password:[{
            required:true,
            message:'密码不能为空',
            trigger:'blur'               
          },{
            min:6,
            max:30,
            message:'长度在6到30之间',
            trigger:'blur'             
          }]
        }         
      }
    },
    methods: {
      submitForm(loginfrom){
        this.$refs[loginfrom].validate((valid) => {
          if(valid){
            this.$axios.post('/api/users/login',this.loginUser)
              .then(res=>{
                // console.log(res);
                //注册成功
                this.$message({
                  message:`登陆成功！`,
                  type:'success '
                })                
                //token              
              const { token } = res.data
              
              //存储到ls
                localStorage.setItem('eletoken',token)
                //解析token
                const decoded = jwt_decode(token);
                
                // console.log(decoded);
                //token存储到vuex中
                this.$store.dispatch('setAuthenticated',!this.isEmpty(decoded))
                this.$store.dispatch('setUser',decoded)
              this.$router.push('/');
              });

          }

        })
      },
      isEmpty(value){

        //如果传递过去为空，则返回一个真值，反之返回一个假值
         return (
          value === undefined ||
          value === null ||
          (typeof value === 'object' && Object.keys(value).length ===0)||
          (typeof value === 'string' && value.trim().length ===0)
           )
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