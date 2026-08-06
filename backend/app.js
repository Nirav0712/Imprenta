import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

const app = express();

// Middleware

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use("/api/categories", categoryRoutes);

app.use("/api/products", productRoutes);

app.use("/api/upload", uploadRoutes);

// Test Route

app.get("/", (req, res) => {

  res.status(200).json({

    success: true,

    message: "Imprenta Backend API Running 🚀",

  });

});

export default app;