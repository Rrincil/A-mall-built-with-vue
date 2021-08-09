<template>
  <div class="Swiper">
    {{mes}}
  </div>
</template>

<script>
  export default {
    name:'Swiper',
    data() {
      return {
        mes:'Swiper'
      }
    },
  }
</script>

<style scoped>
.Swiper{
  width: 100%;
  height: 400px;
  background-color: rgb(200, 33, 33);
  color: blue;
}
</style>