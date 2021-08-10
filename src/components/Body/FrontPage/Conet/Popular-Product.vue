<template>
  <div class="PopularProduct">
    <div class="d1">
      <div>
        热门商品{{mes}}
      </div>
      <img src='../../../../assets/img/1.jpg' />
    </div>
    <div class="d1">
      <div>
        
      </div>      
      <img src='../../../../assets/img/1.jpg' />
    </div>
  </div>
</template>

<script>
  export default {
    name:'PopularProduct',
    data() {
      return {
        mes:'Popular Product'
      }
    },
  }
</script>

<style scoped>
.PopularProduct{
  width: 90%;
  margin-top: 50px;
  margin-left: 5%;
  height: 400px;
  text-indent: 10%;
  font-size: 20px;
  line-height: 35px;
  color: red;
  background-color: white;   
}
.d1{
  width: 50%;
  height: 100%;
  float: left;
  background-color: white;  
}
.d1>div{
  width: 100%;
  height: 10%;  
  background-color: white;  
}
.d1>img{
  width: 100%;
  height: 90%;  
}
</style>