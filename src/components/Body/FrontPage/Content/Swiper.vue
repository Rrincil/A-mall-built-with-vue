<template>
  <div v-if="srcArrys.length > 0" >
    <el-carousel :interval="4000" type="card" height="500px" class="swiper"  @mouseenter="xian(item)" @mouseleave="xian(item)" >
      <el-carousel-item v-for="item in srcArrys" :key="item" @click="toView(item)">
        <!-- <h3>{{ item }}</h3> -->
            <h3 class="medium">
             <!--  <li class="album-li">
                  <a>
                      <div class="album-li-pic">
                          <img :src="item.imgurl" class="album-pic" />
                      </div>
                  </a>
              </li> -->
              
                <img :src="item.imgurl" class="image"/>
              <div class="d1" v-show="elicon">
                {{ item.name }}
              </div>
            </h3>
      </el-carousel-item>
    </el-carousel>
  </div>


  <!-- <div class="Swiper" @mouseenter="xian(item)" @mouseleave="xian(item)" >
    <el-carousel indicator-position="outside" height="400px" >
      <el-carousel-item v-for="item in srcArrys" :key="item">
          <h3 class="medium">
            <img :src="item.imgurl" />
            <div class="d1" v-show="elicon">
              {{ item.name }}
            </div>
          </h3>
      </el-carousel-item>
    </el-carousel>
  </div> -->
</template>

<script>
export default {
  name: "Swiper",
  data() {
    return {
      elicon: false,
      mes: "Swiper",
      srcArrys: [],
    };
  },
  methods: {
    //产品预览
    toView(item){
      this.$router.push({path:'/productView',query:{item:JSON.stringify(item)}})
    },

    xian(item) {
      this.elicon = !this.elicon;
    },
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
};
</script>

<style scoped>
/* .swiper{
  height:500px
}
el-carousel{
   height:500PX
   
}
.el-carousel__container{
  height: 500px;
} */
.Swiper {
  width: 90%;
  margin-left: 5%;
  height: 400px;
  /* margin-top: 100px; */
  /* background-color: rgb(200, 33, 33); */
  color: blue;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  height: 400px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.medium {
  width: 100%;
  height: 100%;
}
.d1 {
  line-height: 40px;
  padding: 0;
  margin: 0;
  position: absolute;
  background-color: white;
  bottom: 0px;
  left: 0;
  text-align: center;

  font-size: 20px;
  font-weight: bold;
  color: rgb(119, 17, 30);
  width: 100%;
  opacity: 0.8;
  height: 50px;
}
/* h3.medium > img {
  width: 100%;
  height: 125%;
  display: block;
} */

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}



.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}


.album-li-pic{
    height: 0;
    overflow: hidden;
    margin: 0;
    padding-bottom: 100%;
}
.album-li-pic img{
    display: block;
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
}

</style>