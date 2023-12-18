const router = require("express").Router();
const db = require("../config/dbConnection");
const { hashPassword, checkUser } = require("../utils/passwordHashing.js");
const { signToken, authMiddleWare } = require("../utils/auth.js");

// API endpoint for login
router.post("/company/login", async (req, res) => {
  console.log("This is the req body when logging backend", req.body);

  // deconstructed variables from the req.body
  const { loginEmail, loginPassword } = req.body;
  const sqlGetUserByEmail = "SELECT * FROM company WHERE email = ?";
  try {
    if (loginEmail && loginPassword) {
      db.query(sqlGetUserByEmail, loginEmail, async (err, result) => {
        if (err) {
          // console.log("this is an error looking for email", err);
          res.status(404).json("Invalid email or password");
        }
        console.log("This is the result from query", result);
        const user = result[0];
        const userPassword = user.password;
        const match = await checkUser(loginPassword, userPassword);
        if (match) {
          const token = signToken({
            email: loginEmail,
            comapany_name: user.comapany_name,
            id: user.id,
          });
          res.status(200).json({ message: "login success", token, user });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json("Invalid email or password");
  }
});

// Api endpoint for company Signup
router.post("/company/signup", async (req, res) => {
  // console.log("This is a log from the backend code", req.body);
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
  if (
    company_name &&
    company_street &&
    location_city &&
    location_state &&
    contact_name &&
    company_url &&
    company_email &&
    company_password
  ) {
    const passwordHash = await hashPassword(company_password);
    console.log("This is the hashed password", passwordHash);
    if (passwordHash) {
      let index = params.indexOf(company_password);
      if (index !== -1) {
        params[index] = passwordHash;
      }
    }
  }

  // Note: add a middleware to hash password first and then save into the database
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
