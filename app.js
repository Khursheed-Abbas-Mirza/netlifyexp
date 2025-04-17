const express=require("express")
const app=express()
const serverless=require("serverless-http")
const user=require("./route")
app.use('/user',user)
app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public"+"/index.html")
})

module.exports.handler=serverless(app)
