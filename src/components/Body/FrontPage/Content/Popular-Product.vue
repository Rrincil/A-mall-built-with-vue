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
                <i class="el-icon-star-off" v-if='!isstar'></i>
                <i class="el-icon-star-on" v-if='isstar'></i>
              </el-button>
              <el-button type="text" class="button" @click='submitForm(item)'>加入购物车</el-button>
            </div>
          </div>
        </el-card> 
      </el-col>
    </el-row>
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
        isstar:false,
        star:{
          name:'',
          remark:'',
          imgurl:'',
          shopname:'',
          isstar:true,
          data:''         
        }
      }
    },
    methods: {
      findForm(){
        //查询所有单品
        this.$axios.get(`/api/profile/getallmes`)
            .then(res=>{
              this.allprod = res.data
              for(let i=0;i<=3;i++){
                this.allprod2[i] = this.allprod[i];
              }              
            })
      },   
      findForm2(){        
        //查询购物车物品
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
        console.log(item)
        //添加购物车
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
          //未登陆时，添加虚拟购物车           
          this.$store.commit('addtempcart',item) 
        }  
      },      
      //登陆时查询是否收藏
      // getfavorites(){
      //   this.$axios.post(`/api/favorites/getallmes`)
      //       .then(res=>{
      //         if(res){
      //           this.isstar = this.$store.state.isstar = true
      //         }else{
      //           this.isstar = this.$store.state.isstar = false
      //         }
      //       }) 
      // },
      submitfavorites(item){
        // console.log(item)
        // this.star.name = item.name
        // this.star.imgurl = item.imgurl
        // this.star.shopname = item.shopname
        // this.star.data = item.data
        // console.log(this.star);        
        if(localStorage.eletoken){
          //登陆时
          if(this.isstar == false){
            console.log(item)
            //未收藏时---加入收藏
              this.$axios.post(`/api/favorites/add`,item)
                  .then(res=>{
                      this.isstar = this.$store.state.isstar = true
                      //加入成功
                      this.$message({
                        message:res.data.mes,
                        type:'success '
                      }) 
                  })
          }else if(this.isstar == true){
            //收藏时---删除收藏
              this.$axios.delete(`/api/favorites/delete/${this.$store.state.user.id}`, item)
                  .then(res=>{
                      //加入成功
                      this.$message({
                        message:res.data.mes,
                        type:'success '
                      }) 
                  })
              this.isstar = this.$store.state.isstar = false    
            }
        }else{
          // 未登陆
            this.$router.push('login')
          }           
      }
    },
    created() {
      //查询所有单品
      this.findForm();
      if(localStorage.eletoken){
        //登陆时查询是否收藏
        // this.getfavorites();
        // 查询购物车物品
        this.findForm2();
      }else{
        //未登录时都未收藏
        this.isstar = false
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