const express=require('express')
const mongoose=require('mongoose')
const app=express();
const Blast=require('./model/blasts')
//creating port
app.listen(3005,()=>{
    console.log('connected to port')
})

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//db connection
mongoose.connect("mongodb+srv://chinni:chinni@cluster0.6dkm45w.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connected to db')
}).catch((err)=>{
    console.log(err)
})
// app.post('/Add',async(req,res)=>{
//   await Blast.create({Name:req.body.Name,Author:req.body.Author,Price:req.body.Price,Duration:req.body.Duration
//         }) .then(()=> { 
//             res.status(200).send(`${req.body.Name} added successfully`); 
//         }).catch((err)=> {
//             res.status(400).send(err.message)
//         } 
//         ) 
// })

// app.get('/',async(req,res)=>{
//    const books=await Blast.find();
//    res.json(books)
// })

