const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const database = require("./backend/database/index");
const index = require("./backend/routes/index");
const login = require("./backend/routes/auth/login");
const signup = require("./backend/routes/auth/signup");
const users = require("./backend/routes/users");
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

app.use("/api", verifyToken);
app.use("/api/users", users);

const port = process.env.PORT || 3001;
const server = http.createServer(app);

server.listen(port, () => {
      console.log("Node API is running...");
});
