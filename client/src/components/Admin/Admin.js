import React, { useState } from "react";
import "../Auth.css";
import { useNavigate } from "react-router-dom";
import AdminService from "../../service/AdminService";



const Admin = ({setIsLoggedIn}) => {

    const history=useNavigate();

const [adminId, setadminId] = useState('');
const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLogin = async () => {
    if (!adminId || !password) {
      setErrorMessage('Please Enter both Admin ID and Password');
      return;
    }
    const admin = { adminId, password };

    try{
        const loginSuccess = await AdminService.login(admin);
        console.log('API response: ', loginSuccess);
        if (loginSuccess) {
          setIsLoggedIn(true)
          localStorage.setItem("adminID", adminId);
          setSuccessMessage('Login successful, redirecting');
          setTimeout(() => {
            history("/adminDashboard");
          }, 1000);
        }
        else {
          setErrorMessage("Invalid Admin ID or Password");
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
        <br/>
        <div className="mb-3">
          <label>Admin Login ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Admin Login ID"

            value={adminId}
            onChange={(e) => setadminId(e.target.value)}

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

</div>
    </div>
  </div>
  );
};


export default Admin;