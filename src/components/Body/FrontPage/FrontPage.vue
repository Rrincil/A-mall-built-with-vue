<template>
  <div>
    <div class="Blank"></div>
    <!-- 轮播图 -->
    <Swiper></Swiper>    
    <!-- 活动 -->
    <Activity></Activity>
    <!-- 热门产品 -->
    <PopularProduct></PopularProduct>
    <!-- 品牌周边 -->
    <!-- <div class="Blank2"></div> -->
    <BrandSurroundings></BrandSurroundings>
    <BrandSurroundings2></BrandSurroundings2>
    <div class="Blank2"></div>
  </div>
</template>

<script>
import Swiper from './Conet/Swiper.vue'
import Activity from './Conet/Activity.vue'
import PopularProduct from './Conet/Popular-Product.vue'
import BrandSurroundings from './Conet/Brand-surroundings.vue';
import BrandSurroundings2 from './Conet/Brand-Surroundings2.vue';
  export default {
    name:'FrontPage',
    data() {
      return {
        mes:'FrontPage'
      }
    },
    components:{
      Swiper,    
      Activity,
      PopularProduct,
      BrandSurroundings,
      BrandSurroundings2
    }    
  }
</script>

<style scoped>
.Blank{
  width: 90%;
  margin-left: 5%;
  height: 10px;
  /* background-color: white;   */
}
.Blank2{
  width: 90%;
  margin-left: 5%;
  height: 100px;
  /* background-color: white;   */
}

</style>