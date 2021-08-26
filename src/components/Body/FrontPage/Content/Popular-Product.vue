<template>
  <div class="PopularProduct">
    <div class="title">热门商品</div>
    <el-row width='100%' height="100%">
      <el-col :span="6" v-for="item in cart" class="d1">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>{{item.name}}</span><span>{{item.price}}</span>
            <div class="bottom">
              <time class="time">{{item.shopname}}</time>
              <el-button type="text" class="button" @click='submitForm(item)'>加入购物车</el-button>
            </div>
          </div>
        </el-card> 
      </el-col>
    </el-row>



    <!-- <el-row width='100%' height="100%">
      <el-col :span="6" v-for="item in cart1" class="d1">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>{{item.name}}</span><span>{{item.price}}</span>
            <div class="bottom">
              <time class="time">{{item.shopname}}</time>
              <el-button type="text" class="button" @click='submitForm(item)'>加入购物车</el-button>
            </div>
          </div>
        </el-card> 
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
  export default {
    name:'PopularProduct',
    data() {
      return {
        mes:'Popular Product',
        Addcarts1:false,
        Addcarts2:false,
        cart:[],
        // cart1:[{name:'风扇10',shopname:'电器之家',price:150,num:1,url:"fjfkggg",start:false}]
      }
    },
    methods: {
      showCart1(){
        this.Addcarts1=!this.Addcarts1
      },
      showCart2(){
        this.Addcarts2=!this.Addcarts2
      },
      findForm(){
        this.$axios.get(`/api/cart/getallmes`)
            .then(res=>{
              this.cart = res.data
              this.$store.commit('addcount',this.cart.length)              
              this.$store.commit('addcart',this.cart)
            })
      },   
      submitForm(item){    
        console.log(item)
        this.$axios.post(`/api/cart/add`,item)
            .then(res=>{
                //加入失败
                this.$message({
                  message:res.data.mes,
                  type:'success '
                }) 
            })
        this.findForm();
        this.$store.dispatch('addcount',this.cart.length)              
        this.$store.dispatch('addcart',this.cart)    
      },           

    },
    created() {
      this.findForm();
    },      
  }
</script>

<style scoped>
.PopularProduct{
  width: 90%;
  margin-top: 50px;
  margin-left: 5%;
  height: 500px;
 
  font-size: 20px;
  line-height: 35px;
  color: red;
  background-color: white;   
  overflow: hidden;
}
.d1{
  padding: 20px;
}
.title{
  width: 100%;
  height: 10%;  
  background-color: white;  
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: 50px;
}

.image {
  width: 100%;
  display: block;
}
</style>