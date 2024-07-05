const express=require('express');
const mongoose =require("mongoose");
const cors=require("cors");

const app = express();
const PORT=8001;
 
mongoose.connect('mongodb://127.0.0.1:27017/crudop')
.then(()=>console.log("mongodb connected"))
.catch((err)=>console.log(err))

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    }, 
    lastName:{
        type:String,
    },
    email:{
        type:String,
    },
    gender:{
        type:String,
        required:true,
    },
    jobTitle:{
        type:String,
    }
    
})
const user = mongoose.model("practice",userSchema)
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors({ origin: 'http://localhost:5174' }));



app.post('/api/users',async (req,res)=>{
   const body=req.body;
   console.log(body)
   if(!body || !body.firstName ||!body.lastName || !body.email || !body.gender || !body.jobTitle)
    {
        res.status(400).json({msg:'all fileds are required'})
    }
  const result= await user.create({
    firstName:body.firstName,
    lastName:body.lastName,
    email:body.email,
    gender:body.gender,
    jobTitle:body.jobTitle,
   })
   console.log(result)
   return res.status(200).json({msg:"suces"})
})
app.get('/users',async (req,res)=>{
     const allusers= await user.find({})
     res.send(allusers)   
})
app.get('/users/:id',async (req,res)=>{
    const iduser= await user.findById(req.params.id)
    res.json(iduser)    
})
app.delete('/users/:id',async (req,res)=>{
    const iduser=await user.findByIdAndDelete(req.params.id)
    res.json(iduser)
})
app.patch('/users/:id',async (req,res)=>{
   await user.findByIdAndUpdate(req.params.id,{ firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    gender:req.body.gender,
    jobTitle:req.body.jobTitle,})
    res.json("success")
})

app.listen(PORT,()=>{console.log("Server Stated")});