import express from "express";
import { login, logout, signup, verifyEmail } from "../controllers/auth.controller.js";

const route = express.Router();

route.post("/signup", signup);
route.post("/login", login);
route.post("/logout", logout);

route.post("/verify-email", verifyEmail);

export default route;