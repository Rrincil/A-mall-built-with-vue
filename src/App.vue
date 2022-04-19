<template>

  <div :style="{color:bodycolor,width:fullHeight+'px'}" >
    <router-view ></router-view>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode';
export default {
  name: 'App',
  data(){
    return{
      fullHeight: null,
      bodycolor:null
    }
  },
  components: {

  },
  created() {
    this.pushcolor();
    if(localStorage.eletoken){
        //解析token
        const decoded = jwt_decode(localStorage.eletoken);
        //token存储到vuex中
        this.$store.dispatch('setAuthenticated',!this.isEmpty(decoded))
        this.$store.dispatch('setUser',decoded)      
    }    
  },
  methods: {
    pushcolor(){
      this.$store.commit('addbodyColor',this.bodycolor)
    },
    get_bodyHeight () {//动态获取浏览器高度
      this.fullHeight = window.outerWidth
    },

    isEmpty(value){

      //如果传递过去为空，则返回一个真值，反之返回一个假值
         return (
          value === undefined ||
          value === null ||
          (typeof value === 'object' && Object.keys(value).length ===0)||
          (typeof value === 'string' && value.trim().length ===0)
           )        
    }
  },  
  mounted () {
    this.get_bodyHeight()
  },
    
}
</script>

<style>

</style>

