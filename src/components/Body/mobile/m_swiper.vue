<template>
  <van-swipe :autoplay="3000" lazy-render   :height="200">
    <van-swipe-item v-for="item in srcArrys" :key="item">
      <img :src="item.imgurl" />
    </van-swipe-item>
  </van-swipe>
  
</template>

<script>
export default {
  name:'m_swper',
  data(){
    return {
      elicon: false,
      mes: "Swiper",
      srcArrys: [],
    };
  },
  methods:{
    findswiper() {
      this.$axios.get("/api/swiper/getallmes").then((res) => {
        this.srcArrys = res.data;
        // console.log(res.data);
      });
    },
  },
  mounted() {
    this.findswiper();
  },    
    

}
</script>

<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>