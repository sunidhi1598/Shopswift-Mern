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

// =======================
// PUBLIC ROUTES
// =======================

// Get all products
router.get("/", getProducts);

// Get single product by ID
router.get("/:id", getProductById);

// =======================
// ADMIN PROTECTED ROUTES
// =======================

// Create product
router.post("/", protect, admin, createProduct);

// Update product
router.put("/:id", protect, admin, updateProduct);

// Delete product
router.delete("/:id", protect, admin, deleteProduct);

export default router;
