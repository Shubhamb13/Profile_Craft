
const express=require('express')
const app=express();


app.get('/',(req,res)=>{
        res.send("This is Home")
})

app.get('/about',(req,res)=>{
    res.send("This is Aout")
})

app.get('/contact',(req,res)=>{
    res.send(`This is Contact ${req.query.myname}`)
})
app.listen(8000,()=>{console.log("server started")})
