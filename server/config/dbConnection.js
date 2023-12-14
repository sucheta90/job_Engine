const mysql2 = require("mysql2");
require("dotenv").config();
const db = mysql2.createConnection(
  {
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log("connected to company_db database")
);

module.exports = db;
