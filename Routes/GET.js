const express=require('express');
const books = require('../model/BOOKS');
const BookModal=require('../model/BOOKS')

const router=express.Router()

router.get('/',async(req,res)=>{
const data=await BookModal.find();
res.status(202).json(data) 
})
//sorting db by Name
router.get('/:Name',async(req,res)=>{
    const book=await BookModal.find({Name:req.params.Name});
    if(book.length){
        res.status(203).json(book)
    }else{
        res.status(207).send('No books existed with the  name')
    }
    

})
// sorting db by Author
router.get('/Auth/:Author',async(req,res)=>{
    const books=await BookModal.find({Author:req.params.Author});
    if(!books.length){
        res.status(203).send('No Author existed')  
    }else{
        res.status(203).json(books)
    }
    
})
// sorting by prices
router.get('/pri/:price',async(req,res)=>{
const prices=await BookModal.find({Price: {$lt:req.params.price} })
res.status(205).json(prices)
})
module.exports=router