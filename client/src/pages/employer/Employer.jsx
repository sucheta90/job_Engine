import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Stack from "react-bootstrap/esm/Stack";
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import "./Employer.css";
export default function Employer() {
  // This flag assumes the use is already a member
  const [isMember, setIsMember] = useState(true);
  const [userFormData, setUserFormData] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [signupFormData, setSignupFormData] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  // function switches between form (login & signup)
  const switchForms = (e) => {
    e.preventDefault();
    setIsMember((prevState) => !prevState);
  };
  //
  function handleInputChange(e) {}

  return (
    <Container fluid id="employer_dashboard">
      <h1>Posting Jobs Made Effortless!</h1>
      <div>
        <aside id="aside">
          <Stack direction="horizontal" className="company-landing">
            {isMember ? (
              <form action="" id="company-login">
                <h3>Login</h3>
                <label htmlFor="loginEmail">Username</label>
                <input
                  id="loginEmail"
                  type="email"
                  placeholder="email"
                  name="loginEmail"
                  value=""
                />
                <label htmlFor="login-password">Password</label>
                <input
                  id="loginPassword"
                  type="password"
                  placeholder="password"
                  name="loginPassword"
                  value=""
                />
                <Button>Log In</Button>
                <p>
                  Not a member yet?{" "}
                  <a href="" onClick={switchForms}>
                    Sign up now
                  </a>
                </p>
              </form>
            ) : (
              <form action="" id="company-signup">
                <h3>Sign up</h3>
                <label htmlFor="company-name">Company Name</label>
                <input
                  id="company-name"
                  type="text"
                  placeholder="Company Name"
                  name="company-name"
                  value=""
                />
                <label htmlFor="company-address">Address</label>
                <textarea
                  id="company-address"
                  type="text"
                  placeholder="Company Name"
                  name="company-address"
                  value=""
                />
                <label htmlFor="contact-name">Point of Contact</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  name="contact-name"
                  value=""
                />
                <label htmlFor="contact-phone">Point of Contact</label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="Your Name"
                  name="contact-phone"
                  value=""
                />
                <label htmlFor="company-url">Company Website</label>
                <input
                  id="company-url"
                  type="text"
                  placeholder="Company Name"
                  name="company-url"
                  value=""
                />
                <label htmlFor="company-email">Email</label>
                <input
                  id="company-email"
                  type="email"
                  placeholder="preferred email"
                  name="company-email"
                  value=""
                />
                <label htmlFor="company-password">Password</label>
                <input
                  id="company-password"
                  type="text"
                  placeholder="Company Name"
                  name="company-password"
                  value=""
                />
                <Button>Sign Up</Button>
                <p>
                  Already a member?{" "}
                  <a href="" onClick={switchForms}>
                    Log In
                  </a>{" "}
                </p>
              </form>
            )}

            {/* <Button>Sign Up</Button> */}
          </Stack>
        </aside>
      </div>
    </Container>
  );
}
