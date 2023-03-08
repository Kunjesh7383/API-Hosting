const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3200

const apiData = require('./data.json')

app.use(cors)

app.get("/", (req,res)=>{
    res.send("hello I am live")
})

app.get("/data", (req,res)=>{
    res.send(apiData)
})


app.listen(port, ()=>{
    console.log("server running ");
})