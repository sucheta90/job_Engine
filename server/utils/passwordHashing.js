const bcrypt = require("bcrypt");
const saltRounds = 10;

// This function hashes the password
async function hashPassword(password) {
  const saltRounds = 10;
  const currentPassword = password;
  try {
    const hashed = await bcrypt.hash(currentPassword, saltRounds);
    return hashed;
  } catch (err) {
    console.log("Error while hashing", err);
    return false;
  }
}

// This function verifies authenticated user
async function checkUser(password, passwordHash) {
  try {
    const match = await bcrypt.compare(password, passwordHash);
    return match;
  } catch (err) {
    console.log("Error while comparing password", err);
    return false;
  }
}

module.exports = {
  hashPassword,
  checkUser,
};
