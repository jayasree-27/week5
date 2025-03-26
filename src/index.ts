import express from "express";
import connectDB from "./database/db";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import routes from "./routes/all.routes";


dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('combined'));
mongoose.set("debug", true)

connectDB();

app.use('/api',routes);



const PORT= process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

