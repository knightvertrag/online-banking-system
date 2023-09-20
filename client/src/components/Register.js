import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { useState } from "react";
import AuthenticationService from "../service/AuthenticationService";

const Register = () => {

  const history = useNavigate();
  //defining state
  const [customer, setCustomer] = useState({
    aadhar: '',
    dob: '',
    email: '',
    fatherName: '',
    firstName: '',
    lastName: '',
    password: '',
    phone: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setCustomer((prevCustomer) => ({
        ...prevCustomer,
        [parent]: {
          ...prevCustomer[parent],
          [child]: value
        }
      }));
    } else {
      setCustomer((prevCustomer) => ({
        ...prevCustomer,
        [name]: value
      }));
    }
  };

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    let validationErrors = {};

    if (!customer.aadhar) {
      validationErrors.aadhar = 'Aadhar is required.';
    }

    if (!customer.dob) {
      validationErrors.dob = 'Date of Birth is required.';
    } 

    if (!customer.email) {
      validationErrors.email = 'Email is required.';
    }
    if (!customer.firstName) {
      validationErrors.firstName = 'First name is required.';
    }
      else if (!/^[a-zA-Z]*$/.test(customer.firstName)) {
        validationErrors.firstName = 'Enter Alphabets Only';
      }

    if (!customer.lastName) {
      validationErrors.lastName = 'Last name is required.';
    }

    if (!customer.fatherName) {
      validationErrors.fatherName = 'Father name is required.';
    }

    if (!customer.password) {
      validationErrors.password = 'Password is required.';
    } else if (customer.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters.';
    }

    if (!customer.phone) {
      validationErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(customer.phone)) {
      validationErrors.phone = 'Invalid phone number. Please enter a 10-digit number.';
    }
    

    return validationErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        await AuthenticationService.registerCustomer(customer);
        setSuccessMessage('Registration successful!');
        alert("Registration Successfull");
        setTimeout(() => {
          history('/login'); // navigates to Login Component
        }, 3000);
      
      } 
      
      catch (error) {
        console.error('Registration error', error);
        setSuccessMessage('An error occurred during registration.');
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="d-flex justify-content-center flex-column text-left">
      <div className="auth-inner m-5">
        <form onSubmit={handleSubmit}>
          <h3>Register</h3>

          {successMessage && <p className="success-message">{successMessage}</p>}

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="firstName"
              value={customer.firstName}
              onChange={handleChange}
          
            />
            {errors.firstName && <p className="error-message">{errors.firstName}</p>}

          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lastName"
              value={customer.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <p className="error-message">{errors.lastName}</p>}

          </div>
          <div className="mb-3">
            <label>Contact number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Contact number"
              name="phone"
              value={customer.phone}
              onChange={handleChange}
            />
            {errors.phone && <p className="error-message">{errors.phone}</p>}

          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              value={customer.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
           
          </div>
          <div className="mb-3">
            <label>Father's name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter father's name"

              name="fatherName"
              value={customer.fatherName}
              onChange={handleChange}
            />
            {errors.fatherName && <p className="error-message">{errors.fatherName}</p>}

          </div>
          <div className="mb-3">
            <label>Aadhar number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Aadhar number"

         

              name="aadhar"
              value={customer.aadhar}
              onChange={handleChange}
            />
            {errors.aadhar && <p className="error-message">{errors.aadhar}</p>}
          </div>
          <div className="mb-3">
            <label>Date of Birth</label>
            <input type="date" 
            className="form-control" 
            name="dob"
              value={customer.dob}
              onChange={handleChange}/>
              {errors.dob && <p className="error-message">{errors.dob}</p>}

          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"

              name="password"
              value={customer.password}
              onChange={handleChange}
              placeholder="Enter password"
            />
            {errors.password && <p className="error-message">{errors.password}</p>}

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
