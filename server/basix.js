const express=require('express');
const users=require('./MOCK_DATA.json')
const mongoose =require("mangoose")
const fs=require('fs')
const app = express();
 

app.use(express.urlencoded({extended:false}))
const PORT=8000;

app.use((req,res,next)=>{
    console.log("middleware 1")
    next();
})
app.use((req,res,next)=>{
    fs.appendFile('tes.txt',`${req.method}:${req.path}`,(err,data)=>{
        next()
    })
    
})

app.get('/api/users',(req,res)=>{
    console.log(req.headers)
    res.setHeader("myname","shubham")
    res.json(users)
    
    
})


app.route('/users/:id')
.post((req,res)=>{
    console.log(req.body)
    return res.json({status:"pending get"})
})
.get((req,res)=>{

    const id=Number(req.params.id);
    const use=users.find((user)=>user.id === id)
    if(!use){res.status(404).json({error:"user not found"})}
    res.json(use);
})
app.delete('/api/users/:id',(req,res)=>{
    const id=Number(req.params.id);
    const data=users.find(user=>user.id===id)
    return res.send(data)

})
app.post('/api/users',(req,res)=>{
    
   const body=req.body;
   console.log(body)
   if(!body || !body.first_name ||!body.last_name || !body.email || !body.gender)
    {
        res.status(400).json({msg:'all fileds are required'})
    }
   users.push({...body, id:users.length + 1})
  fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
    return res.json({status:"succes", id:users.length});
  });
    
})

app.patch('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const body = req.body;
    console.log(body)
    const data=users.find(user=>user.id===id)
    users.push({...data,...body})
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:"pending patch "})
    })

})
app.get('/users',(req,res)=>{
    const html=`<ul>
    ${users.map(value=>
       ` <li>${value.first_name}</li>`).join("")
    }
    </ul>`
    res.send(html)
})


app.listen(PORT,()=>{console.log("Server Stated")});