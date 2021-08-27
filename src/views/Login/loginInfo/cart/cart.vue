<template>
  <HeadTop></HeadTop>
  <div v-if="empty">
    <el-empty :image-size="200"></el-empty>
  </div>
  <div v-if="!empty">
    <el-row>
        <el-col :span="8" height='100%'> 
          <div class="d1">
            <div class="d1d2" v-for='item in cart'>
              <img :src="item.imgurl"/>

            </div>
          </div> 
        </el-col> 
        <el-col :span="16" height='100%'>  
          <div class="d1">
            <div class="d1d1" v-for='item in cart'>
              <el-descriptions title="商品信息" direction="vertical" :column="3" border >
              <el-descriptions-item label="商品名称">{{item.name}}</el-descriptions-item>
              <el-descriptions-item label="商家">{{item.shopname}}</el-descriptions-item>            
              <el-descriptions-item label="价格">188</el-descriptions-item>
              <el-descriptions-item label="数量">{{item.num}}</el-descriptions-item>
              <el-descriptions-item label="总计">{{item.num}}^188</el-descriptions-item>                        
              </el-descriptions>
            </div> 
            <!-- 总计 -->
            <div class="d1d3">
              总计：{{allprice}}

            </div>
          </div>       
        </el-col>      
    </el-row>
  </div>

</template>

<script>
import HeadTop from '../../../../components/HeadTop/HeadTop.vue'
  export default {
    name:'cart',
    data() {
      return {
        cart:[],
        carttotelprice:[],
        allprice:0,
        empty:true
      }
    },
    components:{
      HeadTop
    },
    methods: {
      submitForm(){         
            this.$axios.get('/api/cart/getallmes')
               .then(res=>{
                //  console.log(res);
                 this.cart = res.data
               })

      }      
    },
    created() {
      this.submitForm();
      // this.carttotelprice =
      if(this.$store.state.count>0){
        this.empty = false
      }else{
        this.empty = true
      }
    },
  }
</script>

<style scoped>
.d1{
  width: 100%;
  height: auto;  
}
.d1d1{
  width: 99%;
  height: 230px;
  margin-top:50px;
  border: 1px solid rgb(111, 23, 199) ; 
}
.d1d2{
  width: 100%;
  height: 230px;
  margin-top:50px;
  border: 1px  solid rgb(111, 23, 199) ; 
  border-right: none;
}
.d1d3{
  width: 100%;
  height: 200px;

}
img{
  width: 100%;
  height: 100%;
  display: block;
}
</style>