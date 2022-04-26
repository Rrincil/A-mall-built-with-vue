<template>
    <swiper/>
    <lazy-component>
      <div v-if="allprod.length > 0" >
        <van-row   >
          <van-col :span="24"  class="d1" v-for="(item) in allprod" :key="item" lazy-load >
            <!-- <div class="proditem" > -->
              <el-card >
                <div class="d2">
                  <van-image :src=item.imgurl class="image" @click="toView(item)"  />
                </div>
                <div class="prodname">
                  <p>{{item.name}} {{item.price}}</p>
                  <div class="bottom">
                    <p >{{item.shopname}}</p>
                    <!-- <van-action-bar-icon icon="star"  color="#ff5000" /> -->
                      <i class="el-icon-star-off" v-if="!item.isstar" @click="submitfavoritesoff(item)"></i>
                      <i class="el-icon-star-on" v-if="item.isstar" @click="submitfavoriteson(item)"></i>
                    <van-action-bar-button type="warning" text="加入购物车" @click='submitForm(item)'/>
                    <van-action-bar-button type="danger" text="立即购买" />                  
                  
                  </div>
                </div>
              </el-card>
            <!-- </div> -->
          </van-col>
        </van-row>
      </div> 
    </lazy-component>     
</template>

<script>
import Swiper from './m_swiper.vue'
export default {
  name:'m_BodyContent',
  data(){
    return{
      fullHeight: null,
      bodycolor:null,


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
    }
  },
  components:{
    Swiper
  },
  methods: {
    findForm(i) {
      new Promise((resolve,reject)=>{
        //查询所有潮流单品以及查询是否收藏
        this.$axios.get(`api/profile/getallmes`).then((res) => {
          this.allprod = res.data;
          this.allprod2[i] = this.allprod[i];
          resolve(res.data)             
        }).catch(err=>{
          reject(err)
        })
      }).then(data=>{
        console.log(i);
           while(i<this.allprod.length){
              this.$axios.post(`api/collect/${this.$store.state.user.id}`,data[i])
                .then((res) => {
                this.allprod2 = res.data
                if(res){
                  //收藏时                    
                  this.allprod[i].isstar = true;
                } else {
                  //未收藏
                  this.allprod[i].isstar = false;
                }      
                
                
              }); 
              // this.findForm(i+1)
              i++
            }     
            
      }).catch(err=>{
        console.log(err);
      })

    },

    //未登录时候,查询所有潮流单品，设置未收藏
    findForm2() {
      this.$axios.get(`api/profile/getallmes`).then((res) => {
         this.allprod = res.data;
        for (let i = 0; i <= 3; i++) {
          this.allprod2[i] = this.allprod[i];
          this.allprod[i].isstar = false;
        }  

      });
    },
    
    //未收藏时
    submitfavoritesoff(item){
      // 登陆时
      if (localStorage.vanetoken) {
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
            .post(`api/collect/dvanete/${this.$store.state.user.id}`,item)
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
      if (localStorage.vanetoken) {
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
  },








    pushcolor(){
      this.$store.commit('addbodyColor',this.bodycolor)
    },

    isEmpty(value){

      //如果传递过去为空，则返回一个真值，反之返回一个假值
         return (
          value === undefined ||
          value === null ||
          (typeof value === 'object' && Object.keys(value).length ===0)||
          (typeof value === 'string' && value.trim().length ===0)
           )        
    },
  },  
  mounted() {
    //查询所有单品
    if (localStorage.vanetoken) {
      //登陆时查询是否收藏和所有单品
      this.findForm(0)
    } else {
      //查询所有单品以及设置都未收藏
      this.findForm2();
    }
  },
}
</script>

<style>
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
.title {
  width: 100%;
  height: 10%;
  background-color: white;
}




.van-col van-col--12 d1{
  height: auto;
}

div.e-col.van-col-6.d1:hover {
  height: auto;
  padding: 10px;
}




.bottom p{
  font-size: 3px;
  color: #999;
}

.bottom {
  /* margin-top: 13px; */
  /* line-height: 12px; */
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
  /* min-height: auto; */
}

.image {
  width: 100%;
  height: 80%;
  box-shadow: gold;
  display: block;
  
}
.d1{
  height: auto;
  padding: 20px;
}
div.van-pagination{
  width: 100%;
}
.block{
  text-align: center;
}
.d2{
  width: 100%;
  height: 80%;
  padding: 0px;
  overflow: hidden;
}
:deep(van-card){
  width: 100%;
  height: 500px;
  margin: 0;
  padding: 0;
}
.el-card__body{
  padding: 0;
  height: auto;
}
:deep(.van-row){
  width: 100%;
  height:auto;
}

:deep(.van-row .van-col van-col-6 d1){
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
:deep(.van-card is-always-shadow){
  width: 100%;
  height: 500px;  
  margin: 0;
}
:deep(.van-card__body){
  width: 100%;
  height: 500px;  
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
.vanpagination{
  height: 10px;
}
.proditem{
  width: 50%;
  height: auto;
  /* padding: 20px; */
  float: left;
}
</style>