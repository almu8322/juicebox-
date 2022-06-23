// inside index.js
//To run code npm run start:dev

require("dotenv").config();

// remove this once you confirm it works
// console.log("JWT", process.env.JWT_SECRET);
// like, seriously. go delete that!

// EVERYTHING ELSE

const PORT = 3000;
const express = require("express");
const server = express();

const morgan = require("morgan");
server.use(morgan("dev"));

server.use(express.json());

const apiRouter = require("./api");
server.use("/api", apiRouter);

const { client } = require("./db");
client.connect();

server.use((req, res, next) => {
  console.log("<____Body Logger START____>");
  console.log(req.body);
  console.log("<_____Body Logger END_____>");

  next();
});

server.listen(PORT, () => {
  console.log("The server is up on port", PORT);
});
