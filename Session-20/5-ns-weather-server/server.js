const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let q = url.parse(req.url, true);
  let filename = "." + q.pathname + ".html";

  fs.readFile(filename, (err, data) => {
    if (err) {
      res.write("<h1>404 Page not found</h1>");
      return res.end();
    }

    res.write(data);
    res.end();
  });
});

server.listen(3003, () => {
  console.log("Server is up and running");
});
