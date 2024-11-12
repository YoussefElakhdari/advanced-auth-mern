import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./db/connectDB.js";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(port, ()=>{
    connectDB();
    console.log('listening on port....', port)
})