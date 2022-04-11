<template>

  <div>
    <router-view ></router-view>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode';
export default {
  name: 'App',
  components: {

  },
  created() {
    if(localStorage.eletoken){
        //解析token
        const decoded = jwt_decode(localStorage.eletoken);
        //token存储到vuex中
        this.$store.dispatch('setAuthenticated',!this.isEmpty(decoded))
        this.$store.dispatch('setUser',decoded)      
    }    
  },
  methods: {
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
}
</script>

<style>

</style>
