import express from "express"
import { getCartBook,handleCart,getBook, checkBook } from "../controllers/cart.controller.js";

let route=express.Router();

route.get("/",getCartBook);

route.post("/handle",handleCart);

route.post("/getbook",getBook);

route.post("/check",checkBook);

export default route;