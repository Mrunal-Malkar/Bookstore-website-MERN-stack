import {getBooks} from "../controllers/book.controller.js";
import express from "express";

const route=express.Router();

route.get("/",getBooks);

export default route;