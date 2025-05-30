const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/hello") {
    res.write("<h1>This is hello route</h1>");
    res.end();
    return;
  } else if (req.url === "/data") {
    res.write("<h1>This is a data route</h1>");
    res.end();
    return;
  } else if (req.url === "/test") {
    res.write("<h1>This is a test route</h1>");
    res.end();
    return;
  }
  res.write("<h1>I'm from server</h1>");
  res.end();
});

server.listen(3003, () => {
  console.log("Server is up and running");
});
