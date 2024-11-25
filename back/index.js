import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./db/connectDB.js";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(port, ()=>{
    connectDB();
    console.log('listening on port....', port)
})