const express=require('express');

const BookModal=require('../model/BOOKS')

const router=express.Router()

router.put('/:id',async(req,res)=>{
    const book=await BookModal.find({_id:req.params.id})
    if(!book.length){
        res.status(403).send('no record existed')
    }else{
        await BookModal.updateOne({Name:req.body.Name,Author:req.body.Author,Price:req.body.Price,Duration:req.body.Duration}).then(()=>{
            res.status(211).send(`${req.body.Name} updated succesfully`)
        }).catch((err)=>{
            res.status.send(err)
        })
    }
})

module.exports=router