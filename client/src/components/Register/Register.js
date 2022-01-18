import { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { NotificationManager } from "react-notifications";
import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";

import "./Register.css";
const Register = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let { email, password, rePassword } = data;
    // console.log(data);
    if (password == rePassword) {
      authService.register(email, password).then((authData) => {
        login(authData);

        navigate("/dashboard");
        NotificationManager.success(
          "You successfully created an account",
          "Success!",
          2000
        );
      });
    } else {
      NotificationManager.warning(
        "Password and confirm password does not match",
        "Warning!",
        2000
      );
    }
  };

  // const registerSubmitHandler = (e) => {
  //     e.preventDefault();

  //     let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

  //     authService.register(email, password)
  //         .then(authData => {
  //             login(authData);

  //             navigate('/dashboard');
  //         });
  // }
  return (
    <>
      <form id="register-form" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            {...register("email", { required: true, min: 3, maxLength: 40 })}
          />
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            {...register("password", { required: true, min: 3, maxLength: 30 })}
          />

          <label htmlFor="repeat-pass">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="re-password"
            {...register("rePassword", {
              required: true,
              min: 3,
              maxLength: 30,
            })}
          />
          <hr />

          <button type="submit" className="registerbtn">
            Register
          </button>
        </div>

        <div className="container signin">
          <p>
            Already have an account? <a href="#">Sign in</a>.
          </p>
        </div>
      </form>
    </>
  );
};

export default Register;
