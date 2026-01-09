require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5001;
const authRoutes = require("./routes/authRoutes");


// Middleware
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error:", err));

// Sample Route
app.get("/", (req, res) => {
  res.send("Matrimony API Running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
