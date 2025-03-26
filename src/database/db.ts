import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const MONGO_URI = process.env.MONGO_URI;
console.log("MongoDB URI from .env:", process.env.MONGO_URI);


const connectDB = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error("MongoDB URI is not defined in .env file");
    }
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
