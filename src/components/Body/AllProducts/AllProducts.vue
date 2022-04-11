<template>
<!-- 所有产品页面 -->
  <div>
    <el-row>
      <el-col :span="6" v-for="(item) in allprod" class="d1" :key="item">
        <el-card :body-style="{ padding: '0px',height:'400px'}">
          <div class="d2">
            <img :src=item.imgurl class="image">
          </div>
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
  </div>
  <!-- 分页管理  -->
  <div class="block" >
    <el-pagination
      layout="prev, pager, next"
      :total="200">
    </el-pagination>
  </div>  
</template>

<script>
  export default {
    name:'AllProducts',
    data() {
      return {
        mes:'AllProducts',
        currentDate: new Date(), 
        allprod:[],  
        cart:[]           
      }
    },
    methods: {
      // 加入购物车
      submitForm(item){    
        // console.log(item)
        // console.log(index);
        this.$axios.post(`api/cart/add/${this.$store.state.id}`, item)
            .then(res=>{
                //加入成功
                this.$message({
                  message:res.data.mes,
                  type:'success '
                }) 
            this.findallcart()
            })              
      },
      // 加入成功后增加购物车显示
      // findallcart(){
      //   this.$axios.get('/api/cart/getallmes').then(res=>{
      //     // 提价购物车和购物车数量的状态
      //     this.cart = res.data
      //     this.$store.commit('addcount',this.cart.length)              
      //     this.$store.commit('addcart',this.cart)           
      //   })
      // },      
      // 请求得到所有产品信息
      findForm(){
        this.$axios.get(`/api/profile/getallmes`)
            .then(res=>{
              this.allprod = res.data
            })
      },      
           
    },
    mounted() {
      this.findForm();
      // this.findallcart()
      // 判断是否认证token
      if(localStorage.eletoken){
        this.counts = this.$store.state.count
        this.counts = this.$store.state.tempcart.length
      }        
      // this.carttotelprice = 
    },    
  }
</script>

<style scoped>
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
  min-height: auto;
}

.image {
  width: 100%;
  height: 100%;
  display: block;
}
.d1{
  padding: 20px;
}
div.el-pagination{
  width: 100%;
}
.block{
  text-align: center;
}
.d2{
  width: 100%;
  height: 80%;
}
</style>