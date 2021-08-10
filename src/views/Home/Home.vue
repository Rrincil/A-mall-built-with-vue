<template>
  <div>
    <HeadTop></HeadTop>
    <Navigate></Navigate>
    <BodyContent></BodyContent>
    <FootContent></FootContent>
  </div>
</template>

<script>
import HeadTop from '../../components/HeadTop/HeadTop.vue'
import Navigate from '../../components/Navigate/Navigate.vue'
import BodyContent from '../../components/Body/BodyContent.vue'

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
      FootContent
    }
  }
</script>

<style scoped>

</style>