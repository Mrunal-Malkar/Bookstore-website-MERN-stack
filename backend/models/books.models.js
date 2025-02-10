import mongoose from "mongoose";

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        default:99,
    },
    category:{
        type:String,
    }
})

const Book=mongoose.model("Book",bookSchema);

export default Book;