//login@regist
const express = require('express');
const router = express.Router()
const User = require('../../models/user')
const bcrypt = require('bcrypt')
const gravatar = require('gravatar'); 
const jwt = require('jsonwebtoken');
const passport = require('passport');

const { session } = require('passport');

//@router get api/users/login
//@desc 返回的请求的json数据
//@access public
router.get('/text',(req,res)=>{
  res.json({mes:'text'})
})


//@router post api/users/registe
//npm i body-parser
//@desc 返回的请求的json数据
//@access public
router.post('/registe',(req,res)=>{
  // res.setHeader('Content-Type','application/x-www-form-urlencoded')
  // console.log(req.body);
    
  //查询数据库中是否拥有邮箱
  User.findOne({
    email:req.body.email
  }).then((user)=>{
    console.log('====================================');
    console.log(user);
    console.log('====================================');
    if((user)){
      return res.status(400).json("邮箱已被注册")
    }else{
      const avatar = gravatar.url(req.body.email, {s: '200', r: 'pg', d: 'mm'});
      const newUser = new User({
        name:req.body.name,
        email:req.body.email,
        avatar,
        password:req.body.password
      })
                // //存储数据
                // newUser.save()
                // .then(user=>res.json(user))
                // .catch(err=>console.log(err));  

      // 加密：npm i bcrypt
      bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if(err) throw err;
            //把加密后的密码hash赋值给newUser.password
            newUser.password = hash;

            //存储数据
            newUser.save()
                    .then(user=>res.json(user))
                    .catch(err=>console.log(err));            
        });
    });
    }
  })
  
})




//@router post api/users/login
//npm i body-parser
//@desc 返回 token jwt passport
//@access public
router.post('/login',(req,res)=>{
  User.findOne({
    email:req.body.email
  }).then((user)=>{
    // console.log(user);
    if(user){
      // console.log(user);
      bcrypt.compare(req.body.password, user.password).then((result)=>{
        if(result){
          // jwt.sign('规则','加密名字',{过期时间},(err,token)=>{})
          const rule = {id:user.id,email:user.email}
          // expiresIn: 3600 //存活时间
          jwt.sign(rule,'secret',{expiresIn:3000},(err,token)=>{
            if(err) throw err;
            res.json({
              success:'success',
              token:'Bearer '+token
            })
          })
        //  return res.json({mes:'成功'})
        }else{
         return res.status(404).json({mes:'密码不正确'})
        }
    });
    }else{
      return res.json({mes:'用户名未注册'})
    }
  })
})





//@router post api/users/login
//npm i body-parser
//@desc 返回 current user
//@access private

// router.get('/crrent','验证token',(req,res)=>{})
//npm i passport
//npm i passport-jwt
// router.get('/crrent','验证token',(req,res)=>{})

router.get("/current",passport.authenticate("jwt",{session:false}),(req,res)=>{
  res.json({
    id:req.user.id,
    name:req.user.name,
    email:req.user.email
  }); 
})

module.exports = router


















