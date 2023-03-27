const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = 8080;
http.createServer((req, res) => {
  res.writeHead(200, {"Content-type": "text/html"});
  const urlObj = url.parse(req.url);
  const pathname = urlObj.pathname;

  console.log(req.method); // GET POST PUT DELETE ... requests verbs

  switch (pathname) {
    case "/":
      fs.readFile(__dirname + "/view/main.html", (err, data) => {
        res.write(data);
        res.end();
      });
      break;

    case "/page_1":
      fs.readFile(__dirname + "/view/page_1.html", (err, data) => {
        res.write(data);
        res.end();
      });
      break;

    case "/page_2":
      fs.readFile(__dirname + "/view/page_2.html", (err, data) => {
        res.write(data);
        res.end();
      });
      break;

    case "/page_3":
      fs.readFile(__dirname + "/view/page_3.html", (err, data) => {
        res.write(data);
        res.end();
      });
      break;

    case "/page_4":
      fs.readFile(__dirname + "/view/page_4.html", (err, data) => {
        res.write(data);
        res.end();
      });
      break;

    default:
      fs.readFile(__dirname + "/view/404.html", (err, data) => {
        res.writeHead(404, {"Content-type": "text/html"});
        res.write(data);
        res.end();
      });
  }

}).listen(PORT, () => console.log(`server run on port ${PORT}`))
