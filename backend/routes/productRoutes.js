import express from "express";

import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import {
  protect,
  adminOnly,
} from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Product
router.post("/", protect, adminOnly, createProduct);

// Get All Products
router.get("/", protect, adminOnly, getProducts);

// Get Single Product
router.get("/:id", protect, adminOnly, getProductById);

// Update Product
router.put("/:id", protect, adminOnly, updateProduct);

// Delete Product
router.delete("/:id", protect, adminOnly, deleteProduct);

export default router;