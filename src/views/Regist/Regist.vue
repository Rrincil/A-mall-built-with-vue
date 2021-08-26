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
      <el-form-item label="确认密码" prop="password2" >
        <el-input type="password" v-model="registUser.password2"  autocomplete="off" placeholder="请确认密码"></el-input>
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
      const validatePass2 = (rulus,value,callback)=>{
        if(value !==this.registUser.password ){
          callback(new Error('两次输入的密码不一致'))
        }else{
          callback();
        }
      };
      return {
        mes:'Regist',
        registUser:{
          name:'',
          password:'',
          email:'',
          password2:''
        },
        rules:{
          name:[{
            required:true,
            message:'用户名不能为空',
            trigger:'blur'
          },{                           
            min:2,
            max:30,
            message:'长度在2到30之间',
            trigger:'blur'               
          }],
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
          }],
          password2:[{
            required:true,
            message:'密码不能为空',
            trigger:'blur'               
          },{
            min:6,
            max:30,
            message:'长度在6到30之间',
            trigger:'blur'             
          },{
            validator:validatePass2,
            trigger:'blur '

          }],          
        }       
      }
    },
    methods: {
      submitForm(formname){
        this.$refs[formname].validate((valid) => {
          if(valid){
            this.$axios.post('/api/users/registe',this.registUser)
              .then(res=>{
                //注册成功
                this.$message({
                  message:'账号注册成功！',
                  type:'success '
                })

              this.$router.push('/login');                
              });

          }
        })
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