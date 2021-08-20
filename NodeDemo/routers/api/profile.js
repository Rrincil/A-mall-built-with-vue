//login@regist
const express = require('express');
const router = express.Router()
const profile = require('../../models/profile')

const passport = require('passport');

const { session } = require('passport');

//@router get api/profile/text
//@desc 返回的请求的json数据
//@access public
router.get('/text',(req,res)=>{
  res.json({mes:'text'})
})


//@router podt api/users/swiperadd
//@desc 存入swiper的json数据
//@access public
router.post('/swiperadd',(req,res)=>{
  profile.findOne({url:req.body.url}).then((mes)=>{
    if(mes){
      console.log('已经有了这张照片');
    }else{
      const mes = new profile({
        url:req.body.url,
        remark:req.body.remark
      })
      mes.save()
          .then(mes=>res.json(mes))
          .catch(err=>console.log(err))
    }
  })
})





//@router get api/users/swiper
//@desc 获取swiper的json数据
//@access private
router.get('/swiper',(req,res)=>{
  profile.findOne({url:req.body.url}).then(mes=>{
    if (mes) {
      res.json(mes)
    }else{
      console.log('没有这张照片');
    }
  })
})

module.exports = router

