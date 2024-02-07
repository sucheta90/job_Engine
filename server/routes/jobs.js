const router = require("express").Router();
const db = require("../config/dbConnection");
const { getAllJobs, getAJob } = require("../dbQueries/dbQuery");

// get all jobs
router.get("/jobs", (req, res) => {
  // const result = getAllJobs();
  // console.log(result.length);
  const sql = "SELECT * FROM jobs";
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    }
    res.json({
      message: "success",
      result,
    });
  });
});

// getting a specific job by id
router.get("/job/:jobid", (req, res) => {
  // prepared a dummy return for until the forntend is set up
  const sql = "SELECT * FROM jobs WHERE id = ?";
  const params = req.params.jobid;

  db.query(sql, params, (err, result) => {
    if (err) {
      res.json({ message: err.message });
    }
    res.json({
      message: "success",
      result,
    });
  });
});

router.get("/company/:companyId/jobs", (req, res) => {
  const sql = "SELECT * FROM job WHERE company_id = ?";
  const company_id = req.params.companyId;
});

//
router.post("/company/:companyId/job", (req, res) => {
  const sql =
    "INSERT INTO job (job_title, company_details, experience_min, experience_max, run_until, description, responsibility, skills, salary_min, salary_max, benefits, location_city, location_state, job_type, company_id, application_received, job_status) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?, ?, ?,?,?)";
  const params = [
    req.body.job_title,
    req.body.company_details,
    req.body.experience_min,
    req.body.experience_max,
    req.body.run_until,
    req.body.description,
    req.body.responsibility,
    req.body.skills,
    req.body.salary_min,
    req.body.salary_max,
    req.body.benefits,
    req.body.location_city,
    req.body.location_state,
    req.body.job_type,
    req.body.company_id,
    req.body.application_received,
    req.body.job_status,
  ];
  db.query(sql, params, (err, result) => {
    console;
    if (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
    res.status(200).json({ message: "Job posted successfully", result });
  });
});

router.put("/job/:jobid", (req, res) => {
  const sql =
    "UPDATE jobs SET job_title = ?, experience_min = ?, experience_max = ?, run_until = ?, description = ?, responsibility = ?, salary_min = ?, salary_max = ?, location_city = ?, location_state = ?, job_type = ?, company_id = ?, skills_required = ? WHERE id = ?";
  const id = req.params.jobid;
  const params = [
    req.body.job_title,
    req.body.experience_min,
    req.body.experience_max,
    req.body.run_until,
    req.body.job_description,
    req.body.job_responsibility,
    req.body.salary_min,
    req.body.salary_max,
    req.body.location_city,
    req.body.location_state,
    req.body.job_type,
    req.body.company_id,
    // req.body.application_received,
    // req.body.job_status,
    req.body.job_skills,
    id,
  ];
  console.log(this);
  console.log("This is the request body", req.body);

  db.query(sql, params, (err, result) => {
    if (err) {
      console.log("This is the error------", err);
      res.status(500).json({ message: "Something went wrong" });
    }
    res.json({ message: "Record updated successfully" });
  });
  // res.send("Makes changes to job");
});

router.delete("/jobs/:companyId/:jobid", (req, res) => {
  const id = req.params.jobid;
  const sql = "DELETE FROM jobs WHERE id = ?";
  db.query(sql, id, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Delete unsuccessful" });
    }
    res.status(200).json({ message: "Deleted successfully" });
  });
  res.send("delete job by id");
});

module.exports = router;
