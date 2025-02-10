import mongoose from "mongoose";

export const mongoDbConnect=async()=>{
    try{
    await mongoose.connect(`mongodb+srv://mrunalpmalkar:${process.env.MongoDB_password}@cluster0.qrgc1.mongodb.net/`)
    console.log("connected to mongoDb");
    }catch(err){
        console.log("error in mongodb connection",err);
        process.exit(1);
    }
}