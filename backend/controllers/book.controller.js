import Book from "../models/books.models.js";

export const getBooks=async(req,res)=>{
    try{
        const books=await Book.find();
        res.status(200).json(books);
    }catch(err){
        res.status(400).json({message:err});
    }
}