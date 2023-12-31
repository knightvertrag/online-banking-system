import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "../service/AuthenticationService";
import "./Login.css"
import { Link } from "react-router-dom";

const Login = ({setIsLoggedIn}) => {

  const history = useNavigate();

  const [custId, setcustId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async () => {
    if (!custId || !password) {
      setErrorMessage('Please Enter both CustomerId and Password');
      return;
    }
    const customer = { custId, password };

    try {
      const loginSuccess = await AuthenticationService.login(customer);
      console.log('API response: ', loginSuccess);
      if (loginSuccess) {
        setIsLoggedIn(true)
        localStorage.setItem("custId", custId);
        setSuccessMessage('Login successful, redirecting');
        setTimeout(() => {
          history("/dashboard");
        }, 1000);
      }
      else {
        setErrorMessage("Invalid Customer or Password");
      }
    }
    catch (error) {
      console.error('Login error: ', error);
      setErrorMessage('An error occured during login');
    }
  }
  return (
    <div className=" d-flex justify-content-center flex-column text-left center-screen">
      <div className="auth-inner m-5">
        

          <h3>Log In</h3>
          <div className="mb-3">
            <label>Customer ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Customer ID"

              value={custId}
              onChange={(e) => setcustId(e.target.value)}

            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"

              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>

            {errorMessage && <p className='error-message'>{errorMessage}</p>}
            {successMessage && <p className='successMessage'>{successMessage}</p>}
          </div>
        
        <div>
          <br/>
          <Link to={{pathname: "/admin"}}>Sign in as Admin</Link>
        </div>

      </div>
    </div>
  );
};

export default Login;
