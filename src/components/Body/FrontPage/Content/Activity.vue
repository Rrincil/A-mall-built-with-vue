<template>
  <div class="Activity">
    <el-row width='100%' height="30%">
      <el-col :span="6" :key=item v-for="item in allpro2" class="d1" >
        <el-card :body-style="{ padding: '0px',height:'200px'}">
          <img :src=item.imgurl class="image">
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
</template>

<script>
  export default {
    name:'Activity',
    data() {
      return {
        mes:'Activity',
        Addcarts1:false,
        Addcarts2:false,
        cart:[],
        allpro:[],
        allpro2:[],
      }
    },
    methods: {
      findForm(){
        this.$axios.get(`/api/profile/getallmes`)
            .then(res=>{
              this.allpro = res.data
              for(let i=0;i<=3;i++){
                this.allpro2[i] = this.allpro[i];
              }
              // console.log(this.allpro2);
            })
      },   
      findForm2(){        
        this.$axios.get(`/api/cart/getallmes/${this.$store.state.user.id}`)
            .then(res=>{
              this.cart = res.data
              this.$store.commit('addcount',this.cart.length)              
              this.$store.commit('addcart',this.cart)
            })            
      },      
      submitForm(item){    
        // console.log(item)
 
        if(localStorage.eletoken){
          this.$axios.post(`/api/cart/add/${this.$store.state.user.id}`,item)
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

    },
    created() {
      this.findForm();
      if(localStorage.eletoken){
        
        this.findForm2();
      }      
    },            
    
  }
</script>

<style scoped>
.Activity{
  width: 90%;
  margin-top: 50px;
  margin-left: 5%;
  height: 240px;
  background-color: white;  
  overflow: hidden;
}
.d1{
  padding: 18px;
  /* height: 150px; */
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
  width: auto;
  height: 50%;
  display: block;
}
div.e-col.el-col-6.d1:hover{
padding: 10px;
}

</style>