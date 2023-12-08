import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/esm/Stack";
import Loginform from "../../components/Forms/Loginform";
import SignupForm from "../../components/Forms/Signupfrom";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
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
  // function handles input change in Login form
  function handleLoginInput(e) {
    const { name, value } = e.target;
    setUserFormData((prevState) => ({ ...prevState, [name]: value }));
  }
  // function handles input change in SignUP form
  function handleSignupInput(e) {
    const { name, value } = e.target;
    setSignupFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  const login = (e) => {
    e.preventDefault();
    console.log("Inside login form");
    let formData = { ...userFormData };
    console.log(formData);
  };
  const signup = (e) => {
    e.preventDefault();
    console.log("Inside signup form");
    let formData = { ...signupFormData };
    axios
      .post("/api/new/company", formData)
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(err);
      });
    setSignupFormData({
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
  };

  return (
    <Container fluid id="employer_dashboard">
      <h1>Posting Jobs Made Effortless!</h1>
      <div>
        <aside id="aside">
          <Stack direction="horizontal" className="company-landing">
            {isMember ? (
              // THIS IS THE LOGIN FORM - SHOWS WHEN ISMEMEBER == TRUE
              <Loginform
                userFormData={userFormData}
                handleInputChange={handleLoginInput}
                handleSubmit={login}
                switchForms={switchForms}
              />
            ) : (
              // THIS IS THE SIGNUP FORM - SHOWS WHEN ISMEMEBER == FALSE
              <SignupForm
                signupFormData={signupFormData}
                handleInputChange={handleSignupInput}
                handleSubmit={signup}
                switchForms={switchForms}
              />
            )}
          </Stack>
        </aside>
      </div>
    </Container>
  );
}
