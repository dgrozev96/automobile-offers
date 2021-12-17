import { useContext } from 'react';
import { useNavigate } from 'react-router';

import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';

import './Register.css'
const Register = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const registerSubmitHandler = (e) => {
      e.preventDefault();

      let { email, password } = Object.fromEntries(new FormData(e.currentTarget));

      authService.register(email, password)   
          .then(authData => {
              login(authData);
              
              navigate('/dashboard');
          });
  }
    return (
        <>
           <form id="register-form" method="POST" onSubmit={registerSubmitHandler}>
  <div className="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr />

      
    <label htmlFor="email"><b>Email</b></label>
    <input type="text" name="email" id="email" placeholder="Email" />

    <label htmlFor="password"><b>Password</b></label>
    <input type="password" name="password" id="password" placeholder="Password" />

    <label htmlFor="repeat-pass"><b>Repeat Password</b></label>
    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password" />
    <hr />

    <button type="submit" className="registerbtn">Register</button>
  </div>
  
  <div className="container signin">
    <p>Already have an account? <a href="#">Sign in</a>.</p>
  </div>
</form>
				
        </>


    )
}

export default Register;