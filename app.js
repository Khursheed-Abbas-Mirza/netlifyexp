const express=require("express")
const app=express()
const serverless=require("serverless-http")
const path=require("path")
const user=require("./route")
app.use('/user',user)
app.use(express.static(path.join(__dirname, 'public')))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})
module.exports.handler=serverless(app)
