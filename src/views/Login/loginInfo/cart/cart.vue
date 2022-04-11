<template>
  <div v-if="empty">
    <el-empty :image-size="200"></el-empty>
  </div>
  <div v-if="!empty">
    <el-row>
        <el-col :span="8" height='100%'> 
          <div class="d1">
            <div class="d1d2" v-for='item in cart' :key="item"> 
              <img :src="item.imgurl"/>
            </div>
          </div> 
        </el-col> 
        <el-col :span="16" height='100%'>  
          <div class="d1">
            <div class="d1d1" v-for='item in cart' :key="item">
              <el-descriptions title="商品信息" direction="vertical" :column="3" border >
              <el-descriptions-item label="商品名称">{{item.name}}</el-descriptions-item>
              <el-descriptions-item label="商家">{{item.shopname}}</el-descriptions-item>            
              <el-descriptions-item label="价格">{{item.price}}</el-descriptions-item>
              <el-descriptions-item label="数量">{{item.num}}</el-descriptions-item>
              <el-descriptions-item label="总计">{{item.num*item.price}}</el-descriptions-item>                        
              <el-descriptions-item label="移除">
                <el-button type="text" class="button" @click="delitem(item)"
                  >移除购物车</el-button> 
              </el-descriptions-item> 
              </el-descriptions>
            </div> 
          </div>       
        </el-col>      
    </el-row>
    <!-- 总计 -->
    <div class="d1d3">
      <div class="d1d3d1">
        <p> 总计：{{allprice}}</p>
      </div>
      <div class="d1d3d2">
        <button> 支付订单</button>
      </div>
    </div>    
  </div>

</template>

<script>
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
    },
    methods: {
      //查询购物车
      submitForm(){         
        this.$axios.get(`/api/cart/getallmes/${this.$store.state.user.id}`)
            .then(res=>{
            //  console.log(res);
              this.cart = res.data
              // console.log(res.data);
            })
      }, 
      //移除购物车
      delitem(item){
        this.$axios.post(`api/cart/delete/${this.$store.state.user.id}`,item)
        .then(res=>{
          //长度减一
          this.$store.state.count -= 1          
          if(res.data){
            this.$message({
              message:res.data.mes,
              type:"success"
            });
          // 提价购物车和购物车数量的状态            
          // console.log(this.$store.state.cart);  
          this.del(item.id)

          }
        });
      },
      del(id){
        //ES6
        //根据id查找元素 findIndex
        //let index = arr.findIndex(function(ele,index,arr){return ele.id==id})
        //函数内如果返回true，就结束遍历并返回当前index;
        //index如果没有找到返回-1
        
        let index = this.cart.findIndex((ele) =>{
          return ele.id === id;
        });
        //假设没有找到
        // console.log(index);
        if(index === -1){
          return console.log('删除失败');
        }
        //删除元素
        this.cart.splice(index,1);
        // console.log(this.cart)
      }      
      
      

    },
    created() {
      this.submitForm();
      // this.carttotelprice =
      if(this.$store.state.count=0){
        this.empty = true
      }else{
        this.empty = false
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
  margin-top: 20px;
  margin-bottom: 20px;
  background: rgb(190, 199, 111);
}
.d1d3d1{
  width: 50%;
  height: 100%;
  float: left;
}
.d1d3d2{
  width: 50%;
  height: 100%;
  float: left;
}
img{
  width: 100%;
  height: 100%;
  display: block;
}
.d2{
  width: 100%;
  height: 200px;
  background: rgb(185, 187, 84);
}
</style>