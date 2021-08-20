<template>
  <div class="Swiper"  @mouseenter="xian(item)" @mouseleave="xian(item)">
    <el-carousel indicator-position="outside" height="400px">
      <el-carousel-item v-for="item in srcArrys" :key="item">
      <h3 class="medium">
        <img :src="item.srcimg"  >
         
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
      srcArrys:[
      {
        srcimg:require('../../../../assets/img/1.1.png'),
        name:'生命周期1'
      },
      {
        srcimg:require('../../../../assets/img/1.2.png'),
        name:'生命周期2'
      },
      {
        srcimg:require('../../../../assets/img/1.3.png'),
        name:'生命周期3'
      },
      {
        srcimg:require('../../../../assets/img/1.4.png'),
        name:'生命周期4'
      },
      {
        srcimg:require('../../../../assets/img/1.5.png'),
        name:'生命周期5'
      },
      {
        srcimg:require('../../../../assets/img/2.jpg'),
        name:'程序猿喝咖啡'

      },
      {
        srcimg:require('../../../../assets/img/4.jpg'),
        name:'当你终于刚搞定一个Bug'
      },
      {
        srcimg:require('../../../../assets/img/5.jpg'),
        name:'然后发现了更多Bug'

      },
      {
        srcimg:require('../../../../assets/img/3.jpg'),
        name:'求求你放我回去写代码吧'
      },
      ]

      
      }
    },
    methods: {
      xian(item){
        
          this.elicon=!this.elicon
         
      }      
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
height: 100%;
}
</style>