<template>
  <div>
    <HeadTop/>
<van-popup v-model="show" position="top" :overlay="true"/>
<van-button disabled type="primary">禁用状态</van-button>    
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