const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// API route
app.get("/time", (req, res) => {
  const now = new Date();
  res.json({ time: now.toLocaleTimeString() });
});


// start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send("Digital Clock API is running");
});