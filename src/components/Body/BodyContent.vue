<template>
  <div class="Body-Content">

    <!-- {{mes}}  -->
    <router-view tag="FrontPage"></router-view>
  </div>
</template>

<script>

  export default {
    name:'BodyContent',
    data() {
      return {
        mes:'BodyContent'
      }
    },
    components:{
          
    }
  }
</script>

<style scoped>
.Body-Content{
  width: 100%;
  height: auto;
  background-color: rgb(243, 243, 243);
}
</style>