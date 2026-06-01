const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from Express backend!",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});