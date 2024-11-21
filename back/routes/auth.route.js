import express from "express";
import { forgotPassword, login, logout, signup, verifyEmail, resetPassword } from "../controllers/auth.controller.js";

const route = express.Router();

route.post("/signup", signup);
route.post("/login", login);
route.post("/logout", logout);

route.post("/verify-email", verifyEmail);
route.post("/forgot-password", forgotPassword);

route.post("/reset-password/:token", resetPassword);

export default route;