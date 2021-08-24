<template>
  <HeadTop></HeadTop>
  <div>
    cart
  </div>
</template>

<script>
import HeadTop from '../../../../components/HeadTop/HeadTop.vue'
  export default {
    name:'cart',
    data() {
      return {
        
      }
    },
    methods: {
      submitForm(loginfrom){
        // this.$refs[loginfrom].validate((valid) => {
          // if(valid){            
            this.$axios.post('/api/users/addcart',this.usercart)
               .then(res=>{
                 console.log(res);
                 console.log(this.$store.state.user.cart);
               })
          // }
        // })
      }      
    },
  }
</script>

<style scoped>

</style>