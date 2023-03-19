const express=require('express')
const BookModal=require('../model/BOOKS')

const router=express.Router();
//deleting by id
router.delete("/:id",async(req,res)=>{
  const removed=await BookModal.find({_id:req.params.id});
  if(removed.length){
    await BookModal.deleteOne({_id:req.params.id}).then(()=>{
        res.status(208).json(removed)
          })
  }else{
    res.status.send('no record existed by id')
  }
 
})
// for deleting particular book by name we need to gave the author also
router.delete("/Name/:Name/:Author",async(req,res)=>{
    const removed=await BookModal.find({Name:req.params.Name,Author:req.params.Author});
    if(removed.length){
        await BookModal.deleteOne({Name:req.params.Name,Author:req.params.Author}).then(()=>{
            res.status(208).json(removed)
              })
    }else{
        res.status(210).send('No record existed')
    }
   
  })
module.exports=router