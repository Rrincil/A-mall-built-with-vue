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
  cart.findOne({
    name:req.body.name
  }).then(ret=>{
    if(!ret){
      // console.log(ret);
      const newcart =new cart({})

      if(req.body.name) newcart.name = req.body.name;
      if(req.body.num) newcart.num = req.body.num;  
      if(req.body.imgurl) newcart.imgurl = req.body.imgurl;  
      if(req.body.shopname) newcart.shopname = req.body.shopname;
      if(req.body.start) newcart.start = req.body.start;
      if(req.body.price) newcart.price = req.body.price;
      newcart.save().then(cart=>{
        res.json(cart)
      })
     res.status(200).json({mes:`成功加入购物车了😎`})
    }else{
      // console.log(ret.name);      
      return  res.status(200).json({mes:`${ret.shopname}的${ret.name}已经在购物车了哟😳`})
    }

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
  if(req.body.num) newcart.num = req.body.num;    
  if(req.body.imgurl) newcart.imgurl = req.body.imgurl;  
  if(req.body.shopname) newcart.shopname = req.body.shopname;
  if(req.body.start) newcart.start = req.body.start;
  if(req.body.price) newcart.price = req.body.price;
  cart.findByIdAndUpdate(
    {_id:req.params.id},
    {$set:newcart},
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