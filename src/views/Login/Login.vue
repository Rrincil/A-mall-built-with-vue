<template>
  <div class="d1">
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
      <span>没有账号？点击</span><router-link to="/Regist">注册</router-link>
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
          email:null,
          password:null,
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
                //登陆成功
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
              if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {                
                this.$router.push('/m_BodyContent');
              }else{
                this.$router.push('/');
              }              
              
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
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  /* background-size: cover;   */
  position: relative;
  width: 100%;
  background-image: url('../../assets/img/1.jpg');
  height: 700px;
}
.login-ruleForm{
  position:absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 400px;
  padding: 40px;
  background: rgba(216, 185, 216, 0.8);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(1,1,0,.5);
  border-radius: 10px;
}
.login-ruleForm p{
  font-size: 20px;
  display: block;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 45%;
}

</style>