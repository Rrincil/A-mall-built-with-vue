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


//@router podt api/profile/add
//@desc 存入json数据
//@access public
router.post("/add",(req,res)=>{
  cart.findOne({
    name:req.body.name
  }).then(ret=>{
    if(!ret){
      console.log(ret);
      const newcart =new cart({})

      if(req.body.name) newcart.name = req.body.name;
      if(req.body.num) newcart.num = req.body.num;  
      if(req.body.url) newcart.url = req.body.url;  
      if(req.body.shopname) newcart.shopname = req.body.shopname;
      if(req.body.start) newcart.start = req.body.start;
      if(req.body.price) newcart.price = req.body.price;
      newcart.save().then(cart=>{
        res.json(cart)
      })
      res.status(200).json({mes:`成功加入购物车了(●ˇ∀ˇ●)`})
    }else{
      // console.log(ret.name);      
      return  res.status(200).json({mes:`${ret.shopname}的${ret.name}之前已经在购物车了哟(＾Ｕ＾)ノ~ＹＯ`})
    }

  })

})








//@router get api/profile/getallmes
//@desc 获取所有的json数据
//@access private
router.get("/getallmes",passport.authenticate("jwt",{session:false}),(req,res)=>{
  profile.find().then(mes=>{
    if (mes) {
      res.json(mes)
    }else{
      res.status(404).json({mes:'没有任何内容'})
    }
  }).catch(err=>{
    res.status(404).json(err)
  })
})



//@router get api/profile/:id
//@desc 获取单个json数据
//@access private
router.get("/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
  profile.findOne({_id:req.params.id}).then(mes=>{
    if (mes) {
      res.json(mes)
    }else{
      res.status(404).json({mes:'没有相关内容'})
    }
  }).catch(err=>{
    res.status(404).json(err)
  })
})



//@router podt api/profile/edit
//@desc 编辑json数据
//@access public
router.post("/edit/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
  const newprofile ={}

  if(req.body.name) newprofile.name = req.body.name;
  if(req.body.num) newprofile.num = req.body.num;    
  if(req.body.url) newprofile.url = req.body.url;  
  if(req.body.shopname) newprofile.shopname = req.body.shopname;

  profile.findByIdAndUpdate(
    {_id:req.params.id},
    {$set:newprofile},
    {new:true}
  ).then(profile=>{
    res.json(profile)
  })
})


//@router post api/profile/delete/:id
//@desc 删除json数据
//@access private
router.delete("/deldete/:id",passport.authenticate("jwt",{session:false}),(req,res)=>{
  profile.findOneAndRemove({_id:req.params.id}).then(mes=>{
    if (mes) {
      mes.save().then(profile=>res.json(profile))
    }else{
      res.status(404).json({mes:'没有相关内容'})
    }
  }).catch(err=>{
    res.status(404).json(err)
  })
})
module.exports = router
