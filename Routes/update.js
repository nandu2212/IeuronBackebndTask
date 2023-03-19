const express=require('express');

const BookModal=require('../model/BOOKS')

const router=express.Router()

router.put('/:id',async(req,res)=>{
    const exists=await BookModal.find({_id:req.params.id})
    if(exists.length){
        const updatedbook=await BookModal.updateOne({_id:req.params.id},{$set:{Name:req.body.Name,Author:req.body.Author,Price:req.body.Price,Duration:req.body.Duration}});
        res.status(212).json(req.body)
    }else{
        res.status(402).send('create new one ')
    }
   
})

module.exports=router

// //await BookModal.findByIdAndUpdate(id,{Name:req.body.Name,Author:req.body.Author,Price:req.body.Price,Duration:req.body.Duration},(err,data)=>{
//     if(err){
//         res.send(err)
//     }else{
//         res.send(data)
//     }
// })