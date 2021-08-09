<template>
  <div class="FootContent">
    {{mes}}
  </div>
</template>

<script>
  export default {
    name:'FootContent',
    data() {
      return {
        mes:'FootContent'
      }
    },
  }
</script>

<style scoped>
.FootContent{
  width: 100%;
  height: 200px;
  background-color: aquamarine;
  }
</style>