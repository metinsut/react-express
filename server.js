const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const database = require("./backend/database/index");
const index = require("./backend/routes/index");
const login = require("./backend/routes/auth/login");
const signup = require("./backend/routes/auth/signup");
const logout = require("./backend/routes/auth/logout");
const users = require("./backend/routes/users");
const account = require("./backend/routes/account");
const post = require("./backend/routes/post");
const person = require("./backend/routes/persons");
const upload = require("./backend/routes/upload");
const checklogin = require("./backend/routes/auth/checklogin");
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
            "X-Requested-With,content-type,x-access-token"
      );
      res.setHeader("Access-Control-Allow-Credentials", true);
      next();
});

app.use("/", index);

app.use("/upload", upload);

app.use("/login", login);
app.use("/checklogin", checklogin);
app.use("/logout", logout);
app.use("/signup", signup);

app.use("/users", users);

app.use("/api", verifyToken);
app.use("/api/account", account);
app.use("/api/post", post);
app.use("/api/person", person);

const port = process.env.PORT || 3001;
const server = http.createServer(app);

server.listen(port, () => {
      console.log("Node API is running...");
});
