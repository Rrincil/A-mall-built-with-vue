<template>
  <div class="Navi">
     {{mes}}
     <router-link to="/Login">登陆</router-link>
  </div>
</template>

<script>
  export default {
    name:'Navigate',
    data() {
      return {
        mes:'RrincilMall'
      }
    },    
  }
</script>

<style scoped>
.Navi{
  position: relative;
  width: 100%;
  height: 100px;
  background-color: gray
}
</style>