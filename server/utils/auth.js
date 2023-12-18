require("dotenv").config();
const jwt = require("jsonwebtoken");

const secrect = process.env.SECRET;
const expiry = "4h";

function signToken({ email, company_name, id }) {
  const payload = { email, company_name, id };
  return jwt.sign({ data: payload }, secrect, { expiresIn: expiry });
}
// function for our authenticated routes
function authMiddleware(req, res, next) {
  // allows token to be sent via  req.query or headers
  let token = req.query.token || req.headers.authorization;

  // ["Bearer", "<tokenvalue>"]
  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  if (!token) {
    return res.status(400).json({ message: "You have no token!" });
  }

  // verify token and get user data out of it
  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log("Invalid token");
    return res.status(400).json({ message: "invalid token!" });
  }

  // send to next endpoint
  next();
}
module.exports = { signToken, authMiddleware };
