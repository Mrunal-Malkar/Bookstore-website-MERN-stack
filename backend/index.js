import express from "express";
import booksrouter from "./routes/book.route.js";
import Book from "./models/books.models.js";
import mongoose from "mongoose";
import { mongoDbConnect } from "./config/connectmongodb.config.js";
import bookRoute from "./routes/book.route.js";
import { configDotenv } from "dotenv";
import dotenv from "dotenv"

const app=express();

dotenv.config();
// app.use(cors())
app.use(express.json());

mongoDbConnect()

app.use("/store",bookRoute);

app.listen("3000",()=>{
    console.log("server is running on port 3000");
})