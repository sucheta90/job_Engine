const router = require("express").Router();
const db = require("../config/dbConnection");

router.get("/jobs", (req, res) => {
  res.send("This shows all jobs listed");
//   input: req.query.
});
router.get("/jobs/:jobid", (req, res) => {
  res.send("This job by id");
});
router.post("/jobs", (req, res) => {
  res.send("This route saves a job");
});
router.put("/jobs", (req, res) => {
  res.send("Makes changes to job");
});
router.delete("/jobs/:jobid", (req, res) => {
  res.send("delete job by id");
});
