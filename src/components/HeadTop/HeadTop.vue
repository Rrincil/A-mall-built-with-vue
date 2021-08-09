<template>
  <div class="HeadTop">
    {{mes}}
  </div>
</template>

<script>
  export default {
    name:'HeadTop',
    data() {
      return {
        mes:'HeadTop'
      }
    },
  }
</script>

<style scoped>
.HeadTop{
  position: relative;
  width: 100%;
  height: 100px;
  background-color: rgb(231, 227, 227)
}
</style>