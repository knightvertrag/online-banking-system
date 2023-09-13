import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  return (
    <div className="d-flex justify-content-center flex-column text-left">
      <div className="auth-inner m-5">
        <form>
          <h3>Register</h3>
          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
          <div className="mb-3">
            <label>Contact number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Contact number"
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Father's name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter father's name"
            />
          </div>
          <div className="mb-3">
            <label>Aadhar number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Aadhar number"
            />
          </div>
          <div className="mb-3">
            <label>Date of Birth</label>
            <input type="date" className="form-control" />
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
          <p>
            Already registered <Link to="/login">sign in?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
