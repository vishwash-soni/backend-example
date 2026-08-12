const express = require('express');
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    console.log("hey its a get req")
    res.send('Hello World1 get!')
})

app.post('/', (req, res) => {
    console.log("hey its a post Req")
    res.send('Hello World2 post!')
})

app.put('/', (req, res) => {
    console.log("hey its a put Req")
    res.send('Hello World3 put!')
})

app.delete('/', (req, res) => {
    console.log("hey its a put delete")
    res.send('Hello World4 delete!')
})


app.get("/index",(req,res)=>{
    res.sendFile("templates/index.html",{root: __dirname})
})

app.get("/api",(req,res)=>{
    res.json({
        name:"vishwash",
        age : 23,
        leetcode:"900"
    })
})

app.listen(port,"0.0.0.0",() => {
    console.log(`Example app listening on port ${port}`)
})