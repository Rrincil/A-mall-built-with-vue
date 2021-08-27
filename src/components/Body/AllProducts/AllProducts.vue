<template>

  <div>
    <el-row>
      <el-col :span="6" v-for="(item,index) in allprod" class="d1">
        <el-card :body-style="{ padding: '0px',height:'400px'}">
          <img :src=item.imgurl class="image">
          <div style="padding: 14px;">
            <span>{{item.name}}</span><span>{{item.price}}</span>
            <div class="bottom">
              <time class="time">{{item.shopname}}</time>
              <el-button type="text" class="button" @click='submitForm(item,index)'>加入购物车</el-button>
            </div>
          </div>
        </el-card> 
      </el-col>
    </el-row>
  </div>
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
      submitForm(item,index){    
        // console.log(item)
        // console.log(index);
        this.$axios.post(`/api/cart/add`,item)
            .then(res=>{
                //加入成功
                this.$message({
                  message:res.data.mes,
                  type:'success '
                }) 
            this.findallcart()
            })
               
              
      },
      findallcart(){
        this.$axios.get('/api/cart/getallmes').then(res=>{
          this.cart = res.data
              this.$store.commit('addcount',this.cart.length)              
              this.$store.commit('addcart',this.cart)           
        })
      },      
      findForm(){
        this.$axios.get(`/api/profile/getallmes`)
            .then(res=>{
              this.allprod = res.data
              // this.cart = res.data
              // this.$store.commit('addcount',this.cart.length)              
              // this.$store.commit('addcart',this.cart)
            })
      },      
           
    },
    created() {
      this.findForm();
      this.findallcart()
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
</style>