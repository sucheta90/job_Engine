/* eslint-disable react/prop-types */
import Button from "react-bootstrap/esm/Button";
export default function SignupForm({
  handleInputChange,
  switchForms,
  handleSubmit,
  signupFormData,
}) {
  //   console.log("Props form inside SignupForm", signupFormData);
  return (
    <form action="" id="company-signup" onSubmit={handleSubmit}>
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
        placeholder="Street Address"
        name="company_street"
        value={signupFormData.company_street}
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
      {/* <label htmlFor="contact-phone">Phone</label>
      <input
        id="contact-phone"
        type="tel"
        placeholder="Phone Number"
        name="contact_phone"
        value={signupFormData.contact_phone}
        onChange={handleInputChange}
        required
      /> */}
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
        placeholder="Email"
        name="company_email"
        value={signupFormData.company_email}
        onChange={handleInputChange}
        required
      />
      <label htmlFor="company-password">Password</label>
      <input
        id="company-password"
        type="password"
        placeholder="Password"
        name="company_password"
        value={signupFormData.company_password}
        onChange={handleInputChange}
        required
      />
      <Button type="submit">Sign Up</Button>
      <p>
        Already a member?{" "}
        <a href="" onClick={switchForms}>
          Log In
        </a>{" "}
      </p>
    </form>
  );
}
