<template>
  <el-affix :offset="0">

    <div class="Navi" >
      <!-- {{mes}} -->
      <!-- <router-link to="/">首页</router-link>      -->
      <router-link to="/AllProducts">全部商品</router-link>   
      <!-- 购物车 -->
      <router-link to="/cart">
        <el-badge :value='$store.state.count' class="item" >
          <i class="el-icon-shopping-cart-2" size='small'></i>     
        </el-badge>
      </router-link>
    </div>

  </el-affix>  
</template>

<script>
  export default {
    name:'Navigate',
    data() {
      return {
        mes:'RrincilMall',
        counts:0,
        cart:[],
        length        
      }
    },   
    methods: {
 
    },
    mounted() {
      // this.length = this.$store.state.cart
    },
    created() { 
      if(localStorage.eletoken){       
        this.counts = this.$store.state.count
        this.counts = this.$store.state.tempcart.length
      }        
    },
  }
</script>

<style scoped>
.Navi{
 
  width: 100%;
  height: 100px;
  /* margin-top: 100px; */
  /* position:fixed; */
  z-index: 99;
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