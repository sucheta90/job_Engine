require("dotenv").config();
const jwt = require("jsonwebtoken");

const secrect = process.env.SECRET;
const expiry = "4h";

function signToken({ email, company_name, id }) {
  const payload = { email, company_name, id };
  return jwt.sign({ data: payload }, secrect, { expiresIn: expiry });
}
