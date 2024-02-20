const router = require("express").Router();
const db = require("../config/dbConnection");
const { getAllJobs, getAJob } = require("../dbQueries/dbQuery");

// This function feteches all jobs form database
router.get("/jobs", (req, res) => {
  const sql = "SELECT * FROM job WHERE job_status = 'active'";

  try {
    db.query(sql, (err, result) => {
      if (err) {
        res
          .status(500)
          .json({ message: "Something went wrong! Please try again" });
      }
      if (result.length < 1) {
        return res
          .status(200)
          .json({ message: "No jobs were found at this time", result });
      }

      return res.status(200).json({ message: "success", result });
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong! Please try again", err });
  }
});
//********************************************************************
// get all jobs by user id
router.get("/company/:companyId/jobs", (req, res) => {
  const userId = req.params.companyId;
  const sql = "SELECT * FROM job WHERE company_id = ?";
  db.query(sql, userId, (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    }
    res.status(200).json({
      result,
    });
  });
});
//********************************************************************
// getting a specific job by id and company id
router.get("/company/:companyId/job/:jobid", (req, res) => {
  // prepared a dummy return for until the forntend is set up
  const sql = "SELECT * FROM job WHERE company_id= ? AND id = ?";
  const id = req.params.jobid;
  const companyId = req.params.companyId;

  db.query(sql, [companyId, id], (err, result) => {
    try {
      if (err) {
        res.status(500).json({ message: err.message });
      }
      res.status(200).json({
        message: "success",
        result,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
});

//********************************************************************
//
router.post("/company/:companyId/job", (req, res) => {
  // console.log("This route was hit");
  const sql =
    "INSERT INTO job (job_title, company_details, experience_min, experience_max, run_until, description, responsibility, skills, salary_min, salary_max, benefits, location_city, location_state, job_type, company_id, job_status) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?, ?,?,?)";
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
    req.body.job_status,
  ];
  db.query(sql, params, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: err.message });
    }
    res.status(200).json({ message: "Job posted successfully", result });
  });
});

//********************************************************************

router.put("/company/:companyId/job/:jobId", (req, res) => {
  const sql =
    "UPDATE job SET job_title= ?, company_details= ?, experience_min=?, experience_max=?, run_until=?, description=?, responsibility=?, skills=?, salary_min=?, salary_max=?, benefits=?, location_city=?, location_state=?, job_type=?, company_id=?, job_status=? WHERE company_id=? AND id = ?";
  const id = req.params.jobId;
  const companyId = req.params.companyId;
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
    req.body.job_status,
    companyId,
    id,
  ];
  db.query(sql, params, (err, result) => {
    try {
      if (err) {
        console.log("This is the error------", err);
        res.status(500).json({ message: "Could not update the job post", err });
      }
      res.status(200).json({ message: "Record updated successfully" });
    } catch (err) {
      console.log("This is the error------", err);
      res.status(500).json({ message: "Could not update the job post", err });
    }
  });
});
// This function activates the job post
router.put("/company/:companyId/job/:jobId/activate", (req, res) => {
  const sql = "UPDATE job set job_status= ? WHERE company_id=? AND id = ?";
  const id = req.params.jobId;
  const companyId = req.params.companyId;
  const params = [req.body.job_status, companyId, id];

  db.query(sql, params, (err, result) => {
    try {
      if (err) {
        console.log("This is the error------", err);
        res.status(500).json({ message: "Could not update the job post", err });
      }
      res.status(200).json({ message: "Record updated successfully" });
    } catch (err) {
      console.log("This is the error------", err);
      res.status(500).json({ message: "Could not update the job post", err });
    }
  });
});

router.delete("/company/job/:jobId", (req, res) => {
  const id = req.params.jobId;
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
