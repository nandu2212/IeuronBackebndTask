const mongoose=require('mongoose')

const BookSchema=new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
Author:{
        type:String,
        require:true
    },
    Duration:{
        type:String,
        require:true
    },
    Price:{
        type:Number,
        require:true
    }
})

module.exports=mongoose.model('BOOK',BookSchema)