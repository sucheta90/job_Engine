import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Stack from "react-bootstrap/esm/Stack";
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import "./Employer.css";
export default function Employer() {
  // This flag assumes the use is already a member
  const [isMember, setIsMember] = useState(true);

  // Initial state for login form
  const [userFormData, setUserFormData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  // Initial state for signup form
  const [signupFormData, setSignupFormData] = useState({
    company_name: "",
    company_street: "",
    location_state: "",
    location_city: "",
    contact_name: "",
    contact_phone: "",
    company_url: "",
    company_email: "",
    company_password: "",
  });
  // function switches between form (login & signup)
  const switchForms = (e) => {
    e.preventDefault();
    setIsMember((prevState) => !prevState);
  };
  // function handles change in form input
  function handleInputChange(e) {
    const { name, value } = e.target;
    if (isMember) {
      setUserFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setSignupFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    // if (isMember) {
    //   console.log(userFormData);
    // }
    // console.log(signupFormData);
  }
  return (
    <Container fluid id="employer_dashboard">
      <h1>Posting Jobs Made Effortless!</h1>
      <div>
        <aside id="aside">
          <Stack direction="horizontal" className="company-landing">
            {isMember ? (
              // THIS IS THE LOGIN FORM - SHOWS WHEN ISMEMEBER == TRUE
              <form action="" id="company-login" onSubmit={handleSubmit}>
                <h3>Login</h3>
                <label htmlFor="loginEmail">Username</label>
                <input
                  id="loginEmail"
                  type="email"
                  placeholder="email"
                  name="loginEmail"
                  value={userFormData.loginEmail}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="login-password">Password</label>
                <input
                  id="loginPassword"
                  type="password"
                  placeholder="password"
                  name="loginPassword"
                  value={userFormData.loginPassword}
                  onChange={handleInputChange}
                  required
                />
                <Button onClick={handleSubmit}>Log In</Button>
                <p>
                  Not a member yet?{" "}
                  <a href="" onClick={switchForms}>
                    Sign up now
                  </a>
                </p>
              </form>
            ) : (
              // THIS IS THE SIGNUP FORM - SHOWS WHEN ISMEMEBER == FALSE
              <form action="" id="company-signup">
                <h3>Sign up</h3>
                <label htmlFor="company-name">Company Name</label>
                <input
                  id="company-name"
                  type="text"
                  placeholder="Company Name"
                  name="company_name"
                  value={signupFormData.company_name}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="company-address">Address</label>
                <input
                  id="company-address"
                  type="text"
                  placeholder="Company Name"
                  name="company_street"
                  value={signupFormData.company_street}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="location-state">State</label>
                <input
                  id="location-state"
                  type="text"
                  placeholder="State"
                  name="location_state"
                  value={signupFormData.location_state}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="location-city">City</label>
                <input
                  id="location-city"
                  type="text"
                  placeholder="City"
                  name="location_city"
                  value={signupFormData.company_city}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="contact-name">Point of Contact</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  name="contact_name"
                  value={signupFormData.contact_name}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="contact-phone">Point of Contact</label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="Your Name"
                  name="contact_phone"
                  value={signupFormData.contact_phone}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="company-url">Company Website</label>
                <input
                  id="company-url"
                  type="text"
                  placeholder="Company Website"
                  name="company_url"
                  value={signupFormData.company_url}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="company-email">Email</label>
                <input
                  id="company-email"
                  type="email"
                  placeholder="preferred email"
                  name="company_email"
                  value={signupFormData.company_email}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="company-password">Password</label>
                <input
                  id="company-password"
                  type="text"
                  placeholder="Company Name"
                  name="company_password"
                  value={signupFormData.company_password}
                  onChange={handleInputChange}
                  required
                />
                <Button onClick={handleSubmit}>Sign Up</Button>
                <p>
                  Already a member?{" "}
                  <a href="" onClick={switchForms}>
                    Log In
                  </a>{" "}
                </p>
              </form>
            )}
          </Stack>
        </aside>
      </div>
    </Container>
  );
}
