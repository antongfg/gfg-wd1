const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: "Too many requests from this IP, please try again after a minute.",
});

app.use(limiter);

app.get("/", (req, res) => {
  res.send("Welcome to the secured and rate-limited API!");
});

app.listen(3003, () => {
  console.log("Server running on http://localhost:3003");
});
