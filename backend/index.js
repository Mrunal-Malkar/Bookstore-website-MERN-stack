import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import { mongoDbConnect } from "./config/connectmongodb.config.js";
import bookRoute from "./routes/book.route.js";
import dotenv from "dotenv"
import cartRoute from "./routes/cart.route.js"

const app=express();


dotenv.config();
app.use(cors({ origin: "https://bookstore-website-mern-stack.vercel.app"}));
app.use(express.json());

mongoDbConnect()

const PORT=process.env.PORT || 3000

app.use("/store",bookRoute);
app.use("/cart",cartRoute);

app.listen(PORT,()=>{
    console.log("server is running on port 3000");
})