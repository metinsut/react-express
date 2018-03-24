const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const database = require("./backend/database/index");
const index = require("./backend/routes/index");
const login = require("./backend/routes/user/login");
const signup = require("./backend/routes/user/signup");
// const settings = require("./backend/routes/user/settings");
const movie = require("./backend/routes/movie");
const director = require("./backend/routes/director");
const verifyToken = require("./backend/middleware/veriyfToken");

const app = express();
database();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
            "Access-Control-Allow-Methods",
            "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      res.setHeader(
            "Access-Control-Allow-Headers",
            "X-Requested-With,content-type"
      );
      res.setHeader("Access-Control-Allow-Credentials", true);
      next();
});

app.use("/", index);

app.use("/login", login);
app.use("/signup", signup);
// app.use("/settings", settings);

app.use("/api", verifyToken);
app.use("/api/movie", movie);
app.use("/api/director", director);

const port = process.env.PORT || 3001;
const server = http.createServer(app);

server.listen(port, () => {
      console.log("Node API is running...");
});
