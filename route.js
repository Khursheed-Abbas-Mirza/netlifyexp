const Router=require("express").Router()
Router.get("/login",(req,res)=>{
    res.send({msg:"User has sucessfully logged in"})
})
Router.get("/signup",(req,res)=>{
    res.send({msg:"User has sucessfully signed in"})
})
module.exports=Router