import express from "express";
import booksrouter from "./routes/book.route.js";
import Book from "./models/books.models.js";
import mongoose from "mongoose";
import { mongoDbConnect } from "./config/connectmongodb.config.js";
import bookRoute from "./routes/book.route.js";

const app=express();

// app.use(cors())
app.use(express.json());
app.use("/books",booksrouter);

mongoDbConnect()

app.get("/books",bookRoute);

app.listen("3000",()=>{
    console.log("server is running on port 3000");
})