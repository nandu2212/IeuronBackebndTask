const express=require('express');

const BookModal=require('../model/BOOKS')

const router=express.Router()

router.put('/:id',async(req,res)=>{
    await BookModal.findOne({_id:req.params.id}).then((book)=>{
        
        if(book){
            const updatedBook=req.body
             BookModal.updateOne({Name:req.body.Name,Author:req.body.Author,Price:req.body.Price,Duration:req.body.Duration}).then(()=>{
                res.status(214).json(updatedBook)
            }).catch((err)=>{
                res.status(421).send(err)
            })
        }
    })
})
module.exports=router

// //await BookModal.findByIdAndUpdate(id,{Name:req.body.Name,Author:req.body.Author,Price:req.body.Price,Duration:req.body.Duration},(err,data)=>{
//     if(err){
//         res.send(err)
//     }else{
//         res.send(data)
//     }
// })