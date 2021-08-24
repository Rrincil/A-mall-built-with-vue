//login@regist
const express = require('express');
const router = express.Router()
const cart = require('../../models/cart')

const passport = require('passport');

const { session } = require('passport');

//@router get api/cart/text
//@desc 返回的请求的json数据
//@access public
router.get('/text',(req,res)=>{
  res.json({mes:'text'})
})


//@router podt api/cart/add
//@desc 存入json数据
//@access private
router.post("/add",passport.authenticate("jwt",{session:false}),(req,res)=>{
  const newcart ={}

  if(req.body.name) newcart.name = req.body.name;
  if(req.body.remark) newcart.remark = req.body.remark;  
  if(req.body.url) newcart.url = req.body.url;  
  if(req.body.shopname) newcart.shopname = req.body.shopname;

  new cart(newcart).save().then(cart=>{
    res.json(cart)
  })
})








//@router get api/cart/getallmes
//@desc 获取所有的json数据
//@access private
router.get("/getallmes",passport.authenticate("jwt",{session:false}),(req,res)=>{
  cart.find().then(mes=>{
    if (mes) {
      res.json(mes)
    }else{
      res.status(404).json({mes:'没有任何内容'})
    }
  }).catch(err=>{
    res.status(404).json(err)
  })
})



//@router get api/cart/:id
//@desc 获取单个json数据
//@access private
router.get("/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
  cart.findOne({_id:req.params.id}).then(mes=>{
    if (mes) {
      res.json(mes)
    }else{
      res.status(404).json({mes:'没有相关内容'})
    }
  }).catch(err=>{
    res.status(404).json(err)
  })
})



//@router podt api/cart/edit
//@desc 编辑json数据
//@access private
router.post("/edit/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
  const newcart ={}

  if(req.body.name) newcart.name = req.body.name;
  if(req.body.remark) newcart.remark = req.body.remark;  
  if(req.body.url) newcart.url = req.body.url;  
  if(req.body.shopname) newcart.shopname = req.body.shopname;

  cart.findByIdAndUpdate(
    {_id:req.params.id},
    {$set:cart},
    {new:true}
  ).then(cart=>{
    res.json(cart)
  })
})


//@router post api/cart/delete/:id
//@desc 删除json数据
//@access private
router.delete("/deldete/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
  cart.findOneAndRemove({_id:req.params.id}).then(mes=>{
    if (mes) {
      mes.save().then(cart=>res.json(cart))
    }else{
      res.status(404).json({mes:'没有相关内容'})
    }
  }).catch(err=>{
    res.status(404).json(err)
  })
})
module.exports = router