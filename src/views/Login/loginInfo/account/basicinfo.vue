<template>
  <div>
    <h3>基本账户信息</h3>
    <br/>
    <el-form :model="registUser" :rules="rules" ref="registfrom" label-width="100px" class="regist-ruleForm">

      <el-form-item  prop="name"  label="昵称">
        <el-input v-model="registUser.name" autocomplete="off" :value='name'></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email" >
        <el-input type="email" v-model="registUser.email"  autocomplete="off" :value="email"></el-input>
      </el-form-item> 
      <el-form-item label="密码" prop="password" >
        <el-input type="password" v-model="registUser.password"  autocomplete="off" value=""></el-input>
      </el-form-item>   
      <el-form-item label="确认密码" prop="password2" >
        <el-input type="password" v-model="registUser.password2"  autocomplete="off" value=""></el-input>
      </el-form-item>  

      <el-form-item>
        <el-button type="primary" @click="submitForm('registfrom')" class="">确认修改</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
  export default {
    name:'basicinfo',
    data() {
      const validatePass2 = (rulus,value,callback)=>{
        if(value !==this.registUser.password ){
          callback(new Error('两次输入的密码不一致'))
        }else{
          callback();
        }
      };      
      return {
        name:'',
        email:'',
        password:'',
        password2:'',        
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
            this.$axios.post(`/api/users/edit/${this.$store.state.user.id}`,this.registUser)
              .then(res=>{
                //修改成功
                this.$message({
                  message:'账号修改成功！请重新登陆',
                  type:'success '
                })

              this.$router.push('/login');                
              });

          }
        })
      }      
    },
    mounted() {
      this.name = this.$store.state.user.name
      this.email = this.$store.state.user.email
      this.password = this.$store.state.user.password
      this.password2 = this.$store.state.user.password2
    },
  }
</script>

<style scoped>
.regist-ruleForm{
  position:absolute;
  top: 30%;
  left: 30%;
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
h3{
  text-indent:30%;
  display:block;
  padding:10px;
}
</style>