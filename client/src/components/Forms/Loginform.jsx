/* eslint-disable react/prop-types */
import Button from "react-bootstrap/esm/Button";
export default function Loginform(props) {
  //   console.log("Props form inside LoginForm", props);
  return (
    <form action="" id="company-login" onSubmit={props.handleSubmit}>
      <h3>Login</h3>
      <span>
        <label htmlFor="loginEmail">Username</label>
        <input
          id="loginEmail"
          type="email"
          placeholder="email"
          name="loginEmail"
          value={props.userFormData.loginEmail}
          onChange={props.handleInputChange}
          required
        />
      </span>
      <span>
        <label htmlFor="login-password">Password</label>
        <input
          id="loginPassword"
          type="password"
          placeholder="password"
          name="loginPassword"
          value={props.userFormData.loginPassword}
          onChange={props.handleInputChange}
          required
        />
      </span>
      <Button type="submit">Login</Button>
      <p>
        Not a member yet?{" "}
        <a href="" onClick={props.switchForms}>
          Sign up now
        </a>
      </p>
    </form>
  );
}
