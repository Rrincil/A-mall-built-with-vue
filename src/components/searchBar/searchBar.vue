<template>
<!-- 搜索产品页面 -->
  <div v-if="this.$store.state.inputValue!=null">
    <el-row>
      <el-col :span="6" v-for="(item) in this.$store.state.inputValue" class="d1" :key="item">
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
</template>

<script>
export default {
  name:'searchBar',
  data(){
    return{
      inputValue:null,
      outputValue:null
    }
  },
  methods:{
    InputSearch(){
      // this.inputValue = this.$route.query.InputValue  
      // this.$axios.get(`api/profile/InputSearch`, {name:this.inputValue}).then((res,req)=>{
      //   console.log("1");
      //   this.outputValue = res.data
      //   console.log(this.outputValue);
      // })      
    }
  },
  created(){
    this.InputSearch();
  }
}
</script>

<style>

</style>