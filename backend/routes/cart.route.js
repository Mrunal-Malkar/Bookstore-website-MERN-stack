import express from "express"
import { getCartBook,handleCart } from "../controllers/cart.controller.js";

let route=express.Router();

route.get("/",getCartBook);

route.post("/handle",handleCart);

export default route;