import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./src/routes/contactRoutes.js"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

//routes
app.use("/api", contactRoutes)

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "Portfolio backend is running",
  });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });
