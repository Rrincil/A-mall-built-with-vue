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
          this.allFavorites = res
        })
      }
    },
  }
</script>

<style scoped>

</style>