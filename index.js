const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
const port = process.env.PORT || 5000

const apiData = require('./data.json')

app.get("/", (req,res)=>{
    res.send("hello I am live")
})

app.get("/data" , (req,res)=>{
    console.log("API Hosted")
    res.send(apiData)
})

app.listen(port, ()=>{
    console.log(`server running on PORT : ${port}` );
})