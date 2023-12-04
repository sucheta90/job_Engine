import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import Stack from "react-bootstrap/esm/Stack";
// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import "./Employer.css";
export default function Employer() {
  // This flag assumes the use is already a member
  const [isMember, setIsMember] = useState(true);
  const switchForms = (e) => {
    e.preventDefault();
    setIsMember((prevState) => !prevState);
  };

  return (
    <Container fluid id="employer_dashboard">
      <h1>Posting Jobs Made Effortless!</h1>
      <div>
        <aside id="aside">
          <Stack direction="horizontal" className="company-landing">
            {isMember ? (
              <form action="" id="company-login">
                <h3>Login</h3>
                <label htmlFor="">Username</label>
                <input type="email" placeholder="email" />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="password" />
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
                <label htmlFor="">Company Name</label>
                <input type="text" placeholder="Company Name" />
                <label htmlFor="">Address</label>
                <textarea type="text" placeholder="Company Name" />
                <label htmlFor="">Point of Contact</label>
                <input type="text" placeholder="Your Name" />
                <label htmlFor="">Company Website</label>
                <input type="text" placeholder="Company Name" />
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Company Name" />
                <label htmlFor="">Password</label>
                <input type="text" placeholder="Company Name" />
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
