import React from "react";
import "./Auth.css";

const Login = () => {
  return (
    <div className="d-flex justify-content-center flex-column text-left">
      <div className="auth-inner m-5">
        <form>
          <h3>Log In</h3>
          <div className="mb-3">
            <label>Customer ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Customer ID"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
