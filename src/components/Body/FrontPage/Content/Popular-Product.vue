<template>
  <div class="PopularProduct" v-if="allprod.length > 0" >
    <div class="title">热门商品</div>
    <el-row width="100%" height="100%">
      <el-col :span="6" :key="item" v-for="item in allprod" class="d1">
        <el-card :body-style="{ padding: '0px', height: '430px' }">
          <img :src="item.imgurl" class="image" @click="toView(item)"/>
          <div style="padding: 14px">
            <span>{{ item.name }}</span
            ><span>{{ item.price }}</span>
            <div class="bottom">
              <time class="time">{{ item.shopname }}</time>
              <el-button
                type="text"
                class="button"               
              >
                <i class="el-icon-star-off" v-if="!item.isstar" @click="submitfavoritesoff(item)"></i>
                <i class="el-icon-star-on" v-if="item.isstar" @click="submitfavoriteson(item)"></i>
              </el-button>
              <el-button type="text" class="button" @click="submitForm(item)"
                >加入购物车</el-button
              >
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
 
<script>
import { resolveComponent } from '@vue/runtime-core';
import {startloading,endloading} from '../../../../http'
export default {
  name: "PopularProduct",
  data() {
    return {
      mes: "Popular Product",
      Addcarts1: false,
      Addcarts2: false,
      cart: [],
      allprod: [],
      allprod2: [],
      collectlength:null,
      isstar: false,
      star: {
        name: "",
        remark: "",
        imgurl: "",
        shopname: "",
        isstar: true,
        data: "",
      },
      itemid: "",
    };
  },
  methods: {
    findForm(i) {
      let number=0;
      const laterequst = setInterval(()=>{      
        number++
        },1000)     
      // endloading
      new Promise((resolve,reject)=>{
        //查询所有潮流单品以及查询是否收藏
        this.$axios.get(`api/profile/getallmes`).then((res) => {
          this.allprod = res.data;
          resolve(res.data)             
        }).catch(err=>{
          reject(err)
        })
      }).then(data=>{
            // console.log(data[0]);
           if(i<4){
                this.$axios.post(`api/collect/${this.$store.state.user.id}`,data[i])
                  .then((res) => {
                  // console.log(res.data);
                  this.allprod2 = res.data
                  if(res){
                    //收藏时                    
                    this.allprod[i].isstar = true;
                  } else {
                    //未收藏
                    this.allprod[i].isstar = false;
                  }       
                }); 
                i++;
            }else{
              console.log("回调结束");
            }       
      }).catch(err=>{
        console.log(err);
      })

    },

    //未登录时候,查询所有潮流单品，设置未收藏
    findForm2() {
      this.$axios.get(`api/profile/getallmes`).then((res) => {
        this.allprod2 = this.allprod = res.data;
        for (let i = 0; i <= 3; i++) {
          // this.allprod2[i] = this.allprod[i];
          this.allprod[i].isstar = false;
        }        
      });
    },
    
    //未收藏时
    submitfavoritesoff(item){
      // 登陆时
      if (localStorage.eletoken) {
          // console.log("off");
          // console.log(item.isstar);
          //未收藏时---加入收藏        
          this.$axios.post(`api/collect/add/${this.$store.state.user.id}`,item).then((res) => {
            //加入成功，设置收藏
            item.isstar = true           
            this.$message({              
              message: res.data.mes,
              type: "success ",
            });
          });         
        }else{
      // 未登陆
        this.$router.push("login");          
        }    
    },

    //收藏时删除
    submitfavoriteson(item){
          // params.append('_id',item._id)
          // const params = new URLSearchParams();
          // const param = {name:item.name}
          const param = {_id:item._id}
          this.$axios
            .post(`api/collect/delete/${this.$store.state.user.id}`,item)
            .then((res) => {
              //加入成功           
              this.$message({
                message: res.data.mes,
                type: "success",
              });
            });
          item.isstar = false              
    },

    submitForm(item) {
      //添加购物车，并更新状态
      if (localStorage.eletoken) {
        this.$axios.post(`api/cart/add/${this.$store.state.id}`, item).then((res) => {
          //加入成功
          this.$message({
            message: res.data.mes,
            type: "success ",
          });
        if(res.data.mes === '成功加入购物车了😎'){
          this.$store.state.count += 1
        }          
        });

        
        // this.$store.commit("addcount", this.cart.length);
        // this.$store.commit("addcart", this.cart);
      } else {
        //未登陆时，添加虚拟购物车
        // this.$store.commit("addtempcart", item);
        this.$router.push("login");
      }
    },


  //产品预览
  toView(item){
    this.$router.push({path:'/productView',query:{item:JSON.stringify(item)}})
  }

  },
  mounted() {
    //查询所有单品
    if (localStorage.eletoken) {
      //登陆时查询是否收藏和所有单品
      this.findForm(0)
    } else {
      //查询所有单品以及设置都未收藏
      this.findForm2();
    }
  },
};
</script>

<style scoped>
.PopularProduct {
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
.d1 {
  padding: 20px;
}
.title {
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
  height: 70%;
  display: block;
}
div.e-col.el-col-6.d1:hover {
  padding: 10px;
}




/* px转rem配置 */
/* .PopularProduct {
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
.title {
  width: 100%;
  height: 10%;
  background-color: white;
}






div.e-col.el-col-6.d1:hover {
  padding: 10px;
}




.bottom p{
  font-size: 3px;
  color: #999;
}

.bottom {】
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  width: 100%;
  height: 80%;
}

.button {
  font-size: 1px;
  padding: 0;
  margin-right: 0px;
}

.image {
  width: 100%;
  height: 80%;
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
  padding: 20px;
  overflow: hidden;
}
:deep(el-card){
  width: 100%;
  height: 150px;
  margin: 0;
  padding: 0;
}

:deep(.el-row){
  width: 100%;
  height:auto;
}
:deep(.el-row .el-col el-col-6 d1){
  width: 100%;
  height: 150px;
  margin: 0;
  padding: 0;
}
:deep(.el-card is-always-shadow){
  width: 100%;
  height: 150px;  
  margin: 0;
}
:deep(.el-card__body){
  width: 100%;
  height: 150px;  
  padding: 0;
}
.prodname{
  width: 100%;
  height: 20%;
  padding: 0px;

}
.prodname>p{
  font-size: 10px;
}
.elpagination{
  height: 10px;
} */
</style>