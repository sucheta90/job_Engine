const router = require("express").Router();
const db = require("../config/dbConnection");

router.get("/jobs", (req, res) => {
  const sql = "SELECT * FROM jobs";
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({ message: err.message });
    }
    res.json({ message: "success", data: result });
  });
});

// getting a specific job by id
router.get("/jobs/:jobid", (req, res) => {
  // prepared a dummy return for until the forntend is set up
  const sql = "SELECT * FROM jobs WHERE id = ?";
  const params = req.params.jobid;

  db.query(sql, params, (err, result) => {
    if (err) {
      res.json({ message: err.message });
    }
    res.json({
      message: "success",
      data: [
        {
          id: "123", //id will be created and auto incremented
          job_title: "Some Title", //this is the job title
          salary_min: 50.0,
          salary_max: 100.0,
          experience_min: 0,
          experience_max: 3,
          posted_until: 60, //number of days
          location_city: "city name",
          location_state: "state name", //the state
          job_type: "hybrid or on-site or WFH",
          job_description: "TEXT",
          job_responsibility: "Text",
          job_skills: ["skill_1", "skill_2", "skill_3", "skill_4"], // specific skills related to this job responsibility will be listed
          company: "some company", // to get details from conpany id,
          application_received: 5,
        },
      ],
    });
  });
});
router.post("/jobs", (req, res) => {
  const sql =
    "INSERT INTO jobs (job_title, experience_required_min, experience_required_max, run_until, job_location_city, job_location_state, job_type, salary_min, salary_max, description, responsibility, job_status, application_received, skills_required) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  const params = [
    req.params.job_title,
    req.params.experience_min,
    req.params.experience_max,
    req.params.posted_until,
    req.location_city,
    req.location_state,
    req.job_type,
    req.params.salary_min,
    req.params.salary_max,
    req.params.job_description,
    req.params.job_responsibility,
    
    req.params.application_received,

  ];
});
router.put("/jobs/:jobid", (req, res) => {
  res.send("Makes changes to job");
});
router.delete("/jobs/:jobid", (req, res) => {
  res.send("delete job by id");
});

module.exports = router;
