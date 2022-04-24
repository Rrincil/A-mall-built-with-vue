<template>
  <div>
    <HeadTop/>  
    <!-- <Navigate/> -->
    <router-view></router-view>
    <FootContent/>
  </div>
</template>

<script>
import HeadTop from '../../../components/HeadTop/m_HeadTop.vue'
import FootContent from '../../../components/Foot/FootContent.vue'
export default {
  name:'m_Home',
  components: {
    HeadTop,
    FootContent
  },
}
</script>

<style>

</style>