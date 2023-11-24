const router = require("express").Router();
const db = require("../config/dbConnection");

router.get("/jobs", (req, res) => {
  res.send("This shows all jobs listed");
  //   input: req.query.keyword
  //   output {
  //
  // }
});
router.get("/jobs/:jobid", (req, res) => {
  // prepared a dummy return for until the forntend is set up
  console.log("inside get");
  res.json({
    company_id: "123", //id will be created and auto incremented
    job_title: "Some Title", //this is the job title
    job_salary_min: 50.0,
    job_salary_max: 100.0,
    job_posted_until: 60, //number of days
    job_location_city: "city name",
    job_location_state: "state name", //the state
    job_type: "hybrid or on-site or WFH",
    job_description: "TEXT",
    job_responsibility: "Text",
    job_skills: ["skill_1", "skill_2", "skill_3", "skill_4"], // specific skills related to this job responsibility will be listed
  });
});
router.post("/jobs", (req, res) => {
  res.send("This route saves a job");
});
router.put("/jobs/:jobid", (req, res) => {
  res.send("Makes changes to job");
});
router.delete("/jobs/:jobid", (req, res) => {
  res.send("delete job by id");
});

module.exports = router;