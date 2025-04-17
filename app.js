const express=require("express")
const app=express()
const serverless=require("serverless-http")
const path=require("path")
const user=require("./route")
app.use('/user',user)
app.use(express.static(path.join(__dirname, 'public')))

module.exports.handler=serverless(app)
