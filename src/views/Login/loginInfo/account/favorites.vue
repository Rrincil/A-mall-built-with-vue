<template>
  <div>
    {{allFavorites}}
  </div>
</template>

<script>
  export default {
    name:'favorites',
    data() {
      return {
        allFavorites:[]
      }
    },
    methods: {
      favorites(){
        this.$axios.get(`api/favorites/getallmes`).then(res=>{
          this.allFavorites = res.data
          console.log(res.data);
        })
      }
    },
  }
</script>

<style scoped>

</style>