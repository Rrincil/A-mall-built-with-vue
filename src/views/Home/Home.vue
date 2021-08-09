<template>
  <div>
    <HeadTop></HeadTop>
    <Navigate></Navigate>
    <BodyContent>
      <Swiper></Swiper>
    </BodyContent>
    <FootContent></FootContent>
  </div>
</template>

<script>
import HeadTop from '../../components/HeadTop/HeadTop.vue'
import Navigate from '../../components/Navigate/Navigate.vue'
import BodyContent from '../../components/Body/BodyContent.vue'
import Swiper from '../../components/Body/Swiper.vue'
import FootContent from '../../components/Foot/FootContent.vue'
  export default {
    name:'Home',
    data() {
      return {
        mes:'Home'
      }
    },
    components:{
      Navigate,
      HeadTop,
      BodyContent,
      Swiper,
      FootContent
    }
  }
</script>

<style scoped>

</style>