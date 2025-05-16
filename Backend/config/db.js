import mongoose from "mongoose";

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://sarayu:sarayu15@cluster0.i0wzv.mongodb.net/Tomato-Food-delivery-master').then(()=>console.log("db connected"));
}