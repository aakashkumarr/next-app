let router = require("express").Router()


router.get('/hello',(req,res)=>{
    res.json({msg:"hello"})
})

module.exports=router