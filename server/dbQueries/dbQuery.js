// Database connection
const db = require("../config/dbConnection");

// get all jobs
const getAllJobs = (props) => {
  const sql = "SELECT * FROM jobs";
  db.query(sql, (err, result) => {
    err ? err : result;
  });
};

// get a specific job by id
const getAJob = (id) => {
  const sql = "SELECT * FROM jobs WHERE id = ?";
  db.query(sql, id, (err, result) => {
    err ? err : result;
  });
};

module.exports = { getAllJobs, getAJob };
