import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import protect from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";


const router = express.Router();

// Public routes
router.get("/", getProducts);
router.get("/:id", getProductById);

// Protected route (admin later)
router.post("/", protect, createProduct);

// Public
router.get("/", getProducts);
router.get("/:id", getProductById);

// Admin protected
router.post("/", protect, admin, createProduct);
router.put("/:id", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);


export default router;
