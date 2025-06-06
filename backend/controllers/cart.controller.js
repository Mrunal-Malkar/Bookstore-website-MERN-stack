import Book from "../models/books.models.js";

export const getCartBook = async (req, res) => {
    try {

        let cartBook = await Book.find({ addedtocart: true });
        res.status(200).json(cartBook)

    } catch (err) {

        console.log("error in cart controller", err)
        res.status(400).json({ err })

    }

}

export const handleCart=async(req,res)=>{
    try{
    
        let {bookId}=req.body;

        if(!bookId){
            res.status(400).send("Book id is required")
        }

        let book=await Book.findOne({_id:bookId})

        if(!book){res.status(400).send("Book not Found!")}

        let updatedBook=await Book.findOneAndUpdate(
            {_id:bookId},
            {addedtocart:!book.addedtocart},
            {new:true},
            )

        let allbooks=await Book.find({});

        console.log(updatedBook.addedtocart?"added book to cart":"removed from cart");
        res.status(200).send(allbooks);
    
    }catch(err){
    
        console.log("some error in handling cart controller",err);
        res.status(404).json({error:"something went wrong in handleCart controller"});
 
    }
}

export const getBook=async(req,res)=>{
    try{
    
    let bookId=req.body.bookId;
    if(!bookId){return res.status(404).send("bookId is required!")};

    let book=await Book.findOne({_id:bookId});
    if(!book){return res.status(404).send("book not found")}

    console.log("the book is:",book);
    res.status(200).json(book)
    }
    catch(err){

    console.log("error in fetching book info from getBook",err);
    res.status(404).send("error in fetching book info from getBook");

    }
    
}

export const checkBook=async(req,res)=>{
    try{
    let {bookId}=req.body;
    if(!bookId){res.status(404).send("bookid is required!")}
    let book=await Book.findOne({_id:bookId});
    
    if(!book){res.status(404).send("no book found")}
    let check=book.addedtocart;
    
    res.status(200).send(check)
    
    }catch(err){
        console.log("something went wrong while checking addedtocart in checkBook controller",err);
        res.status(404).json("something went wrong while checking addedtocart in checkBook controller")
    }
}