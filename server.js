import http from "http";
const app = http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.end("<h1>Hello Node!!!!</h1>");
  })
  .listen(3000);
