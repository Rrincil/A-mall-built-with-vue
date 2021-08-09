<template>
  <div class="Body-Content">
    <slot></slot>
    {{mes}}
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
  }
</script>

<style scoped>
.Body-Content{
  width: 100%;
  height: 800px;
  background-color: bisque;
}
</style>