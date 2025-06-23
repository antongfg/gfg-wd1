const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
require("dotenv").config({});
const multer = require("multer");
const Img = require("./models/imgSchema");
const fs = require("fs");
const path = require("path");

const app = express();

connectDB();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/", async (req, res) => {
  const imgs = await Img.find();
  res.render("imagePage", { items: imgs });
});

app.post("/", upload.single("image"), async (req, res) => {
  try {
    const imgData = {
      name: req.body.name,
      desc: req.body.desc,
      img: {
        data: fs.readFileSync(
          path.join(__dirname + "/uploads/" + req.file.filename)
        ),
        contentType: req.file.mimetype,
      },
    };
    await Img.create(imgData);
    fs.unlinkSync(path.join(__dirname + "/uploads/" + req.file.filename));
    return res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

app.listen(3003, () => {
  console.log("Server is up and running");
});
