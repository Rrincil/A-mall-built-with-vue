<template>
  <div class="Navi" >
     <!-- {{mes}} -->
    <router-link to="/">首页</router-link>     
    <router-link to="/AllProducts">全部商品</router-link>
    
    <!-- 购物车 -->
    <router-link to="/cart">
      <el-badge :value='$store.state.count' class="item" @click='submitForm'>
        <i class="el-icon-shopping-cart-2" size='small'></i>     
      </el-badge>
    </router-link>
    

  </div>
</template>

<script>
  export default {
    name:'Navigate',
    data() {
      return {
        mes:'RrincilMall',
        counts:0
      }
    },   
    methods: {
      submitForm(){
        // this.$refs[loginfrom].validate((valid) => {
          // if(valid){            
            this.$axios.post('/api/cart/edit/'+this.$store.state.user.id+'',{
              num:this.$store.state.count+this.$store.state.user.cart,
              _id:this.$store.state.user.id
            })
               .then(res=>{
                 this.counts = res
                 console.log(res);
               })
          // }
        // })
      }  
    },
    mounted() {

    },
    created() { 

     
    },
  }
</script>

<style scoped>
.Navi{
 
  width: 100%;
  height: 100px;
  /* margin-top: 100px; */
  /* position:fixed; */
  /* z-index: 99; */
  background-color: white;
  text-indent: 5%;
  font-size: 20px;
  line-height: 100px;
}
.Navi>a{
  margin-left: 10px;
  text-decoration: none;
  color: black;
}
.item{
  position: relative;
  width: 40px;
  height: 40px;
}
.el-icon-shopping-cart-2{
  position:absolute;
  font-size: 40px;
  left: 0px;
  top: 0px;
}
</style>