const mongoose = require('mongoose');
const Schema = mongoose.Schema
const profileSchema  = new Schema({
  cart:{
    type:Object,
    default:{
      name:{
        type:String,
        required:true
      },
      url:{
        type:String,
        required:true        
      },      
    },
  },

  Favorites:{
    type:Object,
    default:{
      name:{
        type:String,
        required:true
      },
      url:{
        type:String,
        required:true        
      },      
    },
  }
})

// const Cat = mongoose.model('Cat', { name: String });
// //实例化一个Cat
// const kitty = new Cat({ name: 'Zildjian' });

// //持久化保存这个Kitty实例
// kitty.save().then(() => console.log('meow'));


module.exports = profile = mongoose.model('profile',profileSchema);