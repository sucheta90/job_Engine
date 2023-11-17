// const express = require("express");
// const path = require("path");
// const routes = require("./routes");
// const db = require("./config/dbConnection"); /** establishes the db connection */

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// // app.use(routes);

// // app.listen(PORT, () => {
// //   console.log("Listening to PORT 3001");
// // });

// db.once("open", () => {
//   app.listen(PORT, () => {
//     console.log(`Listening on localhost://${PORT}`);
//   });
// });
