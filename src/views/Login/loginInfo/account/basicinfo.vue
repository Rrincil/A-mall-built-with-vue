<template>
  <div>
    昵称 <P>{{$store.state.user.name}}</P>
    邮箱 <P>{{$store.state.user.email}}</P>
    头像 <P>{{$store.state.user.avatar}}</P>
    密码 <P>{{$store.state.user.password}}</P>   
  </div>
</template>

<script>
  export default {
    name:'basicinfo',
    data() {
      return {
        
      }
    },
  }
</script>

<style scoped>

</style>