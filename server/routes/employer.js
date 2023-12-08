const router = require("express").Router();
const db = require("../config/dbConnection");

router.get("/employer/:id");

// Api endpoint for company Signup
router.post("/new/company", (req, res) => {
  console.log("This is a log from the backend code", req.body);
  // deconstructed variables from the req.body
  const {
    company_name,
    company_street,
    location_city,
    location_state,
    contact_name,
    company_url,
    company_email,
    company_password,
  } = req.body;

  const params = [
    company_name,
    company_street,
    location_city,
    location_state,
    contact_name,
    company_url,
    company_email,
    company_password,
  ];
  const sql =
    "INSERT INTO company (company_name, address, location_city, location_state, contact_person, company_website_url, email, password) VALUES (?,?,?,?,?,?,?,?)";
  db.query(sql, params, (err, response) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "signup not successfull" });
    }
    res.json({
      message: "success",
      response,
    });
  });
});

module.exports = router;
