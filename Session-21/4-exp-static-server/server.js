const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/css", express.static("css"));
app.use("/photos", express.static("images"));

const fruits = ["Apple", "Mango", "orange"];

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "html", "index.html"));
});

app.post("/add", (req, res) => {
  const fruit = req.body.fruit;
  fruits.push(fruit);
  res.redirect("/fruits");
});

app.get("/fruits", (req, res) => {
  let responseHTML = `
    <h1>Fruits</h1>
    <table border="1" cellpadding="10" cellspacing="0">
    <thead>
    <tr>
    <th>Name</th>
    <th>Value</th>
    </thead>
    <tbody>
    `;

  fruits.forEach((fruit) => {
    responseHTML += `
        <tr>
        <td>${fruit.toUpperCase()}</td>
        <td>${fruit}</td>
        `;
  });

  responseHTML += `
  </tbody>
  </table>
  `;

  res.send(responseHTML);
});

app.listen(3003, () => {
  console.log("Server is up and running");
});
