require("colors");

const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const server = http.createServer(app);
server.listen(80);

console.log("Servidor rodando ...".rainbow);
console.log("Rodando em:", __dirname);

