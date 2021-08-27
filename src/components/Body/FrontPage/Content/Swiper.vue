<template>
  <div class="Swiper"  @mouseenter="xian(item)" @mouseleave="xian(item)">
    <el-carousel indicator-position="outside" height="400px">
      <el-carousel-item v-for="item in srcArrys" :key="item">
      <h3 class="medium">
        <img :src="item.imgurl"  >
         
        <div class="d1" v-show="elicon" >
          {{item.name}}
        
        </div>
      </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name:'Swiper',
       
    data() {
      return {
        elicon:false, 
        mes:'Swiper',
      srcArrys:[]

      
      }
    },
    methods: {
      xian(item){
        
          this.elicon=!this.elicon
         
      },
      findswiper(){
        this.$axios.get('/api/swiper/getallmes').then(res=>{
          this.srcArrys = res.data
        })
      }      
    },
    created() {
      this.findswiper();
    },
  }
</script>

<style scoped>
.Swiper{
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

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.medium{
    width: 100%;
    height: 100%;
}
.d1{
line-height: 40px;
padding: 0;
margin: 0;
position:absolute;
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
h3.medium>img{
width: 100%;
/* height: 100%; */
display: block;
}
</style>