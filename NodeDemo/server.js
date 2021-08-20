const mongoose = require('mongoose');
const express = require('express')
// const bodyParser = require('body-parser')
const app = express()
const passport  = require('passport')
const uri = require('./config/keys').mongoURI
// 引入模板
const users = require('./routers/api/users');
const profile = require('./routers/api/profile')
// const bodyParser = require('body-parser');
// 连接 MongoDB 数据库
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{

  console.log('成功');
}).catch(err=>{
  console.log(err);
})





// app.use(passport.initialize());
//调用 passport.js 并将passport传入
// require('./config/passport',passport)
//passport初始化
app.use(passport.initialize())
app.use(passport.session())





const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt
// const mongoose = require("mongoose")
const User = mongoose.model("users") 
const keys = require('./config/keys')
 
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
opts.secretOrKey ="secret"
// var opts = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: keys.secretOrKey,
// };
// module.exports = passport => {
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user)
          }
          return done(null, false)
        })
        .catch(err => console.log(err))
  }));
// }


















//使用body-parser中间件
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//配置首页
app.get('/',(req,res)=>{
  res.send('首页')
})


//使用users
app.use('/api/users',users)
//使用profile
app.use('/api/profile',profile)

//监听
app.listen(3000,()=>{
  console.log('已启动');
})



