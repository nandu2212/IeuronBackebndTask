const express=require('express')
const BookModal=require('../model/BOOKS')

const router=express.Router();

router.delete("/:id",async(req,res)=>{
  const removed=await BookModal.find({_id:req.params.id});
  await BookModal.deleteOne({_id:req.params.id}).then(()=>{
res.status(208).json(removed)
  })
})
router.delete("/Name/:Name/:Author",async(req,res)=>{
    const removed=await BookModal.find({Name:req.params.Name,Author:req.params.Author});
    await BookModal.deleteOne({Name:req.params.Name,Author:req.params.Author}).then(()=>{
  res.status(208).json(removed)
    })
  })
module.exports=router