const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const FileStore = require("session-file-store")(session);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    store: new FileStore({ path: "./sessions" }),
    secret: "superkey",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

const USER = {
  username: "admin",
  password: "1234",
};

app.get("/", (req, res) => {
  if (req.session.username) {
    res.send(`
    <h2>Welcome, ${req.session.username}</h2>
    <a href="/protected">Go to protected route</a><br />
    <a href="/logout">Logout</a>
    `);
  } else {
    res.send(`
    <h2>Please Login</h2>
    <form method="POST" action="/login">
    <input type="text" name="username" placeholder="Username" required />
    <input type="password" name="password" placeholder="Password" required />
    <button type="submit">Login</button>
    </form>
    `);
  }
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password) {
    req.session.username = username;
    res.redirect("/");
  } else {
    res.send("Invalid credentials. <a href='/'>Try again</a>");
  }
});

app.get("/protected", (req, res) => {
  if (req.session.username) {
    res.send("<h2>This is a protected page.</h2><a href='/'>Home</a>");
  } else {
    res.status(401).send("Unauthorized. <a href='/'>Login</a>");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

app.listen(3003, () => {
  console.log("Server is up and running");
});
