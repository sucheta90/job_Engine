/* eslint-disable react/prop-types */

export default function Loginform(props) {
  //   console.log("Props form inside LoginForm", props);
  return (
    <form action="" id="company-login" onSubmit={props.handleSubmit}>
      <h3>Login</h3>
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
      <input type="submit" value="Login" />
      <p>
        Not a member yet?{" "}
        <a href="" onClick={props.switchForms}>
          Sign up now
        </a>
      </p>
    </form>
  );
}
