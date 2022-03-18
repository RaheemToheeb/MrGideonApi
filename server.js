require("dotenv").config()
const express = require ("express");
const res = require("express/lib/response");
const port = process.env.PORT || 5050;
const app = express();
 app.use(express.json())

 app.get("/",(req,re)=>{
     res.send("My server is ready for use")
 })

 app.listen(port,()=>{
     console.log(`I am active on port ${port}`)
 })