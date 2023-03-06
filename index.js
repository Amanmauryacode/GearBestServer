const express = require("express")
require("dotenv").config()
const cors = require("cors")
const {connection,productModle} = require("./db")
const app = express()
app.use(express.json())
app.use(cors())

app.get("/",async(req,res)=>{
    try{
        const data = await productModle.find()
        res.send(data)
    }catch(err){
        res.send(err.messenge)
    }
})

app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("conneted to mongo db");
    }catch(err){
        console.log(err);
    }
    console.log(`server is awaik at port ${process.env.PORT}`);
})

