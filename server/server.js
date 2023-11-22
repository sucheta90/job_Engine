const express = require("express");
const path = require("path");
const db = require("./config/dbConnection");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(testMiddleware2);
// app.use(testMiddleware);
// app.use("/specific", testMiddleware3);

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.use(routes);
// app.get("/hello", all);
// app.get("/hello2", all2);

// app.get("/specific", all3);
// app.get("/specific/abc", all4);
app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));

// function testMiddleware(req, res, next) {
//   console.log("Inside testMiddleware");
//   next();
// }

// function testMiddleware2(req, res, next) {
//   console.log("Inside testMiddleware2");
//   next();
// }

// function testMiddleware3(req, res, next) {
//   console.log("Inside testMiddleware3");
//   if (
//     req.query.name == "su" ||
//     (req.query.name == "cha" && req.query.goo != "sakto")
//   ) {
//     return res.status(400).send("Invalid input");
//   }
//   next();
// }

// function all(req, res) {
//   console.log("inside all");
//   return res.json({ message: "success" });
// }

// function all2(req, res) {
//   console.log("inside all2");
//   return res.json({ message: "success" });
// }

// function all3(req, res) {
//   console.log("inside all3");
//   return res.json({ message: "success" });
// }

// function all4(req, res) {
//   console.log("inside all4");
//   return res.json({ message: "success" });
// }
