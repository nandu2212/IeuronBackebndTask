const express=require('express')
const mongoose=require('mongoose')
const app=express();

const BookModal=require('./model/BOOKS')
const addController=require('./Routes/ADD')
const getController=require('./Routes/GET')
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
//middle ware
app.use('/ADD',addController)
app.use('/GET',getController)