<template>
  <div>

   order
  </div>
</template>

<script>
  export default {
    name:'order',
    data() {
      return {
        
      }
    },
    components:{
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