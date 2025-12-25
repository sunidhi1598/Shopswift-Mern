import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// 🔴 Load env FIRST
dotenv.config();

// 🔴 DB connection
import connectDB from "./config/db.js";

// 🔴 Routes
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

// 🔴 Initialize app
const app = express();

// 🔴 Middlewares
app.use(cors());
app.use(express.json());

// 🔴 Connect Database
connectDB();

// 🔴 Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/payment", paymentRoutes);

// 🔴 Test route
app.get("/", (req, res) => {
  res.send("Hello from Backend!");
});

// 🔴 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
