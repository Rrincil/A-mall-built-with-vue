<template>
  <div>
    <el-row>
      <el-col :span="6" v-for="item in cart" class="d1">
        <el-card :body-style="{ padding: '0px' }">
          <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
          <div style="padding: 14px;">
            <span>{{item.name}}</span><span>{{item.price}}</span>
            <div class="bottom">
              <time class="time">{{item.shopname}}</time>
              <el-button type="text" class="button" @click='AddToCart'>加入购物车</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name:'AllProducts',
    data() {
      return {
        mes:'AllProducts',
        currentDate: new Date(), 
        cart:[],             
      }
    },
    methods: {
      submitForm(){         
            this.$axios.get('/api/cart/getallmes')
               .then(res=>{
                //  console.log(res);
                 this.cart = res.data
               })

      },
      AddToCart(){
        
        this.$store.commit('addcount')
      }            
    },
    created() {
      this.submitForm();
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
</style>