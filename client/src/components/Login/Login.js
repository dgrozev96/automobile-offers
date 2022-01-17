import { Link, NavLink } from "react-router-dom";
import "./Login.css";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";
import { NotificationManager } from "react-notifications";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLoginHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let email = formData.get("email");
    let password = formData.get("password");

    authService
      .login(email, password)
      .then((authData) => {
        login(authData);

        navigate("/dashboard");
        NotificationManager.success(
          "You successfully logged in",
          "Success!",
          2000
        );
      })
      .catch((err) => {
        NotificationManager.error("Wrong email or password", "Warning!", 2000);
      });
  };

  return (
    <>
      <form onSubmit={onLoginHandler} method="POST">
        <div className="container">
          <h1>Login</h1>
          <p>Please fill in this form to log in.</p>
          <hr />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input type="text" name="email" id="email" placeholder="Email" />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />

          <hr />

          <button className="registerbtn" type="submit" value="Login">
            Login
          </button>
        </div>

        <div className="container signin">
          <p>
            Don't have an account? <a href="/register">Register</a>.
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
