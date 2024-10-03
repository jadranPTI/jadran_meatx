const fs = require("fs");
const http = require("http");

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync("index.html");
const services = fs.readFileSync("services.html")
const vision = fs.readFileSync("vision.html")
const products = fs.readFileSync("products.html")
const aboutUs = fs.readFileSync("about.html")
const contactUs = fs.readFileSync("contact.html")


const server = http.createServer((req, res) => {
    console.log(req.url)

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(home);
  });
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });