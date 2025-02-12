import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import { mongoDbConnect } from "./config/connectmongodb.config.js";
import bookRoute from "./routes/book.route.js";
import dotenv from "dotenv"
import cartRoute from "./routes/cart.route.js"

const app=express();

dotenv.config();
app.use(cors())
app.use(express.json());

mongoDbConnect()

app.use("/store",bookRoute);
app.use("/cart",cartRoute);

app.listen("3000",()=>{
    console.log("server is running on port 3000");
})