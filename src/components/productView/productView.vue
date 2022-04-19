<template>
<!-- 产品预览页面 -->
  <div>

    <el-row :span="9">
      <el-col :span="6" v-for="(item) in product" class="d1" :key="item">
        <el-card :body-style="{ padding: '0px',height:'400px'}">
          <div class="d2">
            <img :src=item.imgurl class="image" @click="toView(item)">
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
      <el-col :span="6">
        <div class="demo-rate-block">
          <span class="demonstration">Color for different levels</span>
          <el-rate v-model="value2" :colors="colors" allow-half/>
        </div>
      </el-col> 



    </el-row>  

    <div class="demo-image">
      <div v-for="item in imgarry" :key="item" class="block" @mouseenter="imgenter(item)">
        <!-- <span class="demonstration">{{ item }}</span> -->
        <el-image style="width: 100px; height: 100px" :src="item" :fit="item" />
      </div>
    </div>   
    
    <div class="productDetails">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
          我的行程
        </el-tab-pane>
        <el-tab-pane label="店铺中心">
          消息中心
        </el-tab-pane>
        <el-tab-pane label="商品详情">
          角色管理
        </el-tab-pane>
        <el-tab-pane label="评价">
          <div class="evaluate">
            <div class="evaluateEle">

            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name:'productView',
  data() {
    return {
      product:[],
      imgarry:[],
      value2:null,
      colors :['#99A9BF', '#F7BA2A', '#FF9900']
    }
  },
  methods:{
    ni(){
      this.product[0] = JSON.parse(this.$route.query.item)
      this.imgarry = this.product[0].imgcollection
    },
    imgenter(item){
      this.product[0].imgurl = item
    }
  },
  created(){
    this.ni();
  }
  

}
</script>

<style scoped>
/* 大图 */
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
  margin: 200px;
  margin-bottom: 0;
  margin-top: 0;
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

/* 图列表 */
.demo-image{
  margin-left: 150px;
  /* width: 70%; */
}
.demo-image .block {
  padding: 10px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 10%;
  box-sizing: border-box;
  vertical-align: top;
}
.demo-image .block:last-child {
  border-right: none;
}
.demo-image .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}


/* 评分 */
.demo-rate-block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
}
.demo-rate-block:last-child {
  border-right: none;
}
.demo-rate-block .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}



/* 商品详情 */
.productDetails{
  width: 100%;
  height: 500px;
  color: rgb(54, 146, 226);
}
.evaluate{
  width: 100%;
  height: 500px;
}
.evaluateEle{
  color: blue;
  width: 100%;
  height: 200px;
}
</style>