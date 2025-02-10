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