import express from "express"
import { getCartBook } from "../controllers/cart.controller.js";

let route=express.Router();

route.get("/",getCartBook);

export default route;