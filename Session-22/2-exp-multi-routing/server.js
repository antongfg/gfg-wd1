const express = require("express");
const v1Router = require("./routes/v1");
const v2Router = require("./routes/v2");

const app = express();

app.use("/api/v1", v1Router);
app.use("/api/v2", v2Router);

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the API" });
});

app.listen(3003, () => {
  console.log("Server is running");
});
