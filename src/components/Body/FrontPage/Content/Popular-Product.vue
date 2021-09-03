<template>
  <div class="PopularProduct">
    <div class="title">热门商品</div>
    <el-row width='100%' height="100%">
      <el-col :span="6" :key=item v-for="item in allprod2" class="d1" >
        <el-card :body-style="{ padding: '0px',height:'430px'}">
          <img :src=item.imgurl class="image">
          <div style="padding: 14px;">
            <span>{{item.name}}</span><span>{{item.price}}</span>
            <div class="bottom">
              <time class="time">{{item.shopname}}</time>
              <el-button type="text" class="button" @click='submitfavorites(item)'>
                <i class="el-icon-star-off" v-if='!star'></i>
                <i class="el-icon-star-on" v-if='star'></i>
              </el-button>
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
        allprod:[],
        allprod2:[],
        // cart1:[{name:'风扇10',shopname:'电器之家',price:150,num:1,url:"fjfkggg",start:false}]
        star:false
      }
    },
    methods: {
      findForm(){
        this.$axios.get(`/api/profile/getallmes`)
            .then(res=>{
              this.allprod = res.data
              for(let i=0;i<=3;i++){
                this.allprod2[i] = this.allprod[i];
              }              
              
            })
      },   
      findForm2(){        
        this.$axios.get(`/api/cart/getallmes`)
            .then(res=>{
              this.cart = res.data
              //收藏
              this.star = this.cart.star
              this.$store.commit('addcount',this.cart.length)              
              this.$store.commit('addcart',this.cart)
            })            
      },      
      submitForm(item){    
        // console.log(item)
 
        if(localStorage.eletoken){
          this.$axios.post(`/api/cart/add`,item)
              .then(res=>{
                  //加入成功
                  this.$message({
                    message:res.data.mes,
                    type:'success '
                  }) 
              })
          this.findForm2();
          this.$store.commit('addcount',this.cart.length)              
          this.$store.commit('addcart',this.cart)      
        }else{
          // this.$store.commit('addtempcount')              
          this.$store.commit('addtempcart',item) 
        }  
      },           
      submitfavorites(item){
        if(localStorage.eletoken){
          //登陆时
          if(this.star = true){
            //未收藏时---加入收藏
              this.$axios.post(`/api/favorites/add`,item)
                  .then(res=>{
                      //加入成功
                      this.$message({
                        message:res.data.mes,
                        type:'success '
                      }) 
                  })
              this.cart = true   
          }else{
            //收藏时---删除收藏
              this.$axios.post(`/api/favorites/deldete${this.$store.state.user.id}`,item)
                  .then(res=>{
                      //加入成功
                      this.$message({
                        message:res.data.mes,
                        type:'success '
                      }) 
                  })
              this.cart = true     
            }
        }else{
          // 未登陆
            this.$router.push('login')
          }           
      }
    },
    created() {
      this.findForm();
      if(localStorage.eletoken){
        
        this.findForm2();
        // this.$axios.post(`/api/cart/add`,this.$store.state.tempcart)
        //     .then(res=>{
        //         //加入成功
        //         this.$message({
        //           message:res.data.mes,
        //           type:'success '
        //         }) 
        //     })
      }      
    },      
  }
</script>

<style scoped>
.PopularProduct{
  width: 90%;
  margin-top: 50px;
  margin-left: 5%;
  height: 530px;
 
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
div.e-col.el-col-6.d1:hover{
padding: 10px;
}
</style>