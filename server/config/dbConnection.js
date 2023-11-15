const mysql2 = require("mysql2");
const db = mysql2.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "sucheta90",
    database: "company_db",
  },
  console.log("connected to company_db database")
);

module.exports = db;
