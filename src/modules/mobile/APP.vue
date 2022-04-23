<template>

  <div>
    <router-view ></router-view>
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode';
export default {
  name: 'APP',
  components:{
  },
  created() {
    // this.pushcolor();
    // if(localStorage.eletoken){
    //     //解析token
    //     const decoded = jwt_decode(localStorage.eletoken);
    //     //token存储到vuex中
    //     this.$store.dispatch('setAuthenticated',!this.isEmpty(decoded))
    //     this.$store.dispatch('setUser',decoded)      
    // }    
  },
}
</script>

<style>

</style>

