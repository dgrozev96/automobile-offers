import { Link, NavLink } from 'react-router-dom'
import './Login.css'
const Login = () => {

  return (
    <>
      <form action="" >
        <div className="container">
          <h1>Login</h1>
          <p>Please fill in this form to log in.</p>
          <hr />

          <label for="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email" name="email" id="email" required />

          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" id="psw" required />

          <hr />

          <button type="submit" className="registerbtn">Login</button>
        </div>

        <div className="container signin">
          <p>Don't have an accouynt?  <a href="#">Register</a>.</p>
        </div>
      </form>

    </>


  )
}

export default Login;