const express=require('express')
const mongoose=require('mongoose');
const BookModal=require('../model/BOOKS')


const router=express.Router()


router.post('/',async(req,res)=>{
let existedBook=false;
await BookModal.find({Name:req.body.Name,Author:req.body.Author}).then((data)=>{
    if(data.length){
        existedBook=true
    }
})
if(!existedBook){
    await BookModal.create({Name:req.body.Name,Author:req.body.Author,Price:req.body.Price,Duration:req.body.Duration
    }) .then(()=> { 
        res.status(200).json(`${req.body.Name} adeed succesfully`); 
    }).catch((err)=> {
        res.status(400).send(err.message)
    } 
    ) 
}else{
    res.status(401).send('book laready existed by the author')
}
})

module.exports=router;