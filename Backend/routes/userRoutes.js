import express from "express";
import {
  registerUser,
  loginUser,
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔐 Register
router.post("/register", registerUser);

// 🔐 Login
router.post("/login", loginUser);

// 👤 User Profile (protected)
router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

export default router;
