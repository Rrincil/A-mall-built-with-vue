<template>
  <div class="Navi" >
     <!-- {{mes}} -->
    <router-link to="/">首页</router-link>     
    <router-link to="/AllProducts">全部商品</router-link>
  </div>
</template>

<script>
  export default {
    name:'Navigate',
    data() {
      return {
        mes:'RrincilMall',
        
      }
    },    
  }
</script>

<style scoped>
.Navi{
 
  width: 100%;
  height: 100px;
  /* margin-top: 100px; */
  position:relative;
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
</style>