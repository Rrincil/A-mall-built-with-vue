<template>
  <div class="PopularProduct">
    <div class="title">热门商品</div>
    <el-row width="100%" height="100%">
      <el-col :span="6" :key="item" v-for="item in allprod" class="d1">
        <el-card :body-style="{ padding: '0px', height: '430px' }">
          <img :src="item.imgurl" class="image" />
          <div style="padding: 14px">
            <span>{{ item.name }}</span
            ><span>{{ item.price }}</span>
            <div class="bottom">
              <time class="time">{{ item.shopname }}</time>
              <el-button
                type="text"
                class="button"
                @click="submitfavorites(item)"
              >
                <i class="el-icon-star-off" v-if="!item.isstar"></i>
                <i class="el-icon-star-on" v-if="item.isstar"></i>
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
      allprodname: [],
      isstar: false,
      star: {
        name: "",
        remark: "",
        imgurl: "",
        shopname: "",
        isstar: true,
        data: "",
      },
      itemsample:{
        name: "",
        remark: "",
        imgurl: "",
        shopname: "",
        isstar: true,
        price: "",        
      },
      itemid: "",
    };
  },
  methods: {
    findForm() {
      //查询所有单品以及查询是否收藏
      this.$axios.get(`api/profile/getallmes`).then((res) => {
      this.allprod2 = this.allprod = res.data;
      for (let i = 0; i < 3; i++) {
        this.$axios.get(`api/favorites/getallmes`, { name: this.allprod[i] })
          .then((res) => {
            if (res.data) {
              //收藏时
              this.allprod[i].isstar = true;
            } else {
              //未收藏
              this.allprod[i].isstar = false;
            }
          });
      }        
      });
    },
    //未登录时候
    findForm2() {
      this.$axios.get(`api/profile/getallmes`).then((res) => {
        this.allprod2 = this.allprod = res.data;
        for (let i = 0; i <= 3; i++) {
          // this.allprod2[i] = this.allprod[i];
          this.allprod[i].isstar = false;
        }        
      });
    },
  


    // getfavorites() {
    //   //查询收藏的全部单品
    //   this.$axios.get(`api/favorites/getallmes`).then((res) => {
    //     this.$store.state.star = res.data;
    //     // console.log(res.data);
    //   });
    // },
    submitForm(item) {
      //添加购物车
      if (localStorage.eletoken) {
        this.$axios.post(`api/cart/add`, item).then((res) => {
          //加入成功
          this.$message({
            message: res.data.mes,
            type: "success ",
          });
        });
        this.$store.commit("addcount", this.cart.length);
        this.$store.commit("addcart", this.cart);
      } else {
        //未登陆时，添加虚拟购物车
        this.$store.commit("addtempcart", item);
        this.$router.push("login");
      }
    },
    //收藏
    submitfavorites(item) {
      if (localStorage.eletoken) {
        //登陆时
        // this.itemsample = {...item}
        if (item.isstar == false) {
          // console.log(item);
          //未收藏时---加入收藏
          item.isstar = true
          this.$axios.post(`api/favorites/add`,item).then((res) => {
            //加入成功
            alert("凶狠")            
            this.$message({
              message: res.data.mes,
              type: "success ",
            });
          });
          
        } else{
            //收藏时---删除收藏
            // {params:param}
            const param = {_id : item._id}
            const param2 = {name : item.name}
            this.$axios
              .delete(`api/favorites/delete/${this.$store.state.user.id}`,{params:param},)
              .then((res) => {
                //加入成功
                this.$message({
                  message: res.data.mes,
                  type: "success",
                });
              });
            item.isstar = true
        }
      } else {
        // 未登陆
        this.$router.push("login");
      }
    },
  },
  created() {
    //查询所有单品
    if (localStorage.eletoken) {
      //登陆时查询是否收藏和所有单品
      this.findForm()
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
  display: block;
}
div.e-col.el-col-6.d1:hover {
  padding: 10px;
}
</style>