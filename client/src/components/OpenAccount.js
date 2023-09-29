import React, { useEffect, useState } from "react";
import AuthenticationService from "../service/AuthenticationService";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { Button } from "bootstrap";
import AccountsService from "../service/AccountsService";


const OpenAccount = ({ profile }) => {
  const history = useNavigate();
  const [account, setAccount] = useState({
    transPassword: '',
    balance: 0,
    isActive: 1
  });
  const [customer, setCustomer] = useState({
    id:profile.custId,
    aadhar: profile.aadhar,
    dob: profile.dob,
    email: profile.email,
    fatherName: profile.fatherName,
    firstName: profile.firstName,
    lastName: profile.lastName,
    password: profile.password,
    phone: profile.phone,
    address: '',

  });



  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [custId, setcustId] = useState(profile.custId);

  const validateForm = () => {
    let validationErrors = {};
    if (!customer.address) {
      validationErrors.address = 'Address is required.';
    }
    if (!account.balance) {
      validationErrors.balance = 'Balance is required.';
    }
    // else if (/0/.test(account.balance)) {
    //   validationErrors.balance = 'Balance can not be 0';
      if (!account.transPassword) {
        validationErrors.password = 'Transaction Password is required.';
      } else if (account.transPassword.length < 6) {
        validationErrors.transPassword = 'Password must be at least 6 characters.';
      }

      return validationErrors;
    // }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        console.log(account.balance + account.transPassword + account.isActive)
        await AccountsService.createAccount(customer.id, account);
        setSuccessMessage('Account opened successfully!');
        alert("Account opened successfully!");
        setTimeout(() => {
          history('/dashboard'); // navigates to Dashboard Component
        }, 3000);

      }

      catch (error) {
        console.error('Open Account error', error);
        setSuccessMessage('An error occurred during opening account.');
      }
    } else {
      setErrors(validationErrors);
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    // if (name.includes('.')) {
    //   const [parent, child] = name.split('.');
    //   setCustomer((prevCustomer) => ({
    //     ...prevCustomer,
    //     [parent]: {
    //       ...prevCustomer[parent],
    //       [child]: value
    //     }
    //   }));
    // } else {
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value
    }));
    setAccount((prevAccount) => ({
      ...prevAccount,
      [name]: value
    }))
    // }
  };



  return (
    <div className=" justify-content-center text-left center-screen">
      <div className="auth-inner m-5">
    {/* <div className="container mx-auto padding:20px" style={{ width: '600px' }}> */}
      <form onSubmit={handleSubmit}>
        <h3>Open Account</h3>

        {successMessage && <p className="success-message">{successMessage}</p>}
  
        <div className="mb-3 d-inline">
          <label className="form-label">First name</label>
          <input
            className="form-control"
            name="firstName"
            value={customer.firstName}
            onChange={handleChange}
            readOnly={true}
          />


        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
          className="form-control"
            name="lastName"
            value={customer.lastName}
            onChange={handleChange}
            readOnly={true}
          />


        </div>
        <div className="mb-3">
          <label>Contact number</label>
          <input
          className="form-control"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
            readOnly={true}
          />

          <div className="mb-3">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your address"
              name="address"
              value={customer.address}
              onChange={handleChange}
            />
            {errors.address && <p className="error-message">{errors.address}</p>}
          </div>

        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            readOnly={true}
            name="email"
            value={customer.email}
            className="form-control"
            onChange={handleChange}
          />


        </div>
        <div className="mb-3">
          <label>Father's name</label>
          <input
          className="form-control"
            readOnly={true}
            name="fatherName"
            value={customer.fatherName}
            onChange={handleChange}
          />


        </div>
        <div className="mb-3">
          <label>Aadhar number</label>
          <input
          className="form-control"
            readOnly={true}
            name="aadhar"
            value={customer.aadhar}
            onChange={handleChange}
          />

        </div>
        <div className="mb-3">
          <label>Date of Birth</label>
          <input
          className="form-control"
            name="dob"
            value={customer.dob}
            onChange={handleChange}
            readOnly={true} />


        </div>
        <div className="mb-3">
          <label>Balance</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter account balance"
            name="balance"
            value={account.balance}
            onChange={handleChange}
          />

          {errors.balance && <p className="error-message">{errors.balance}</p>}
        </div>
        <div className="mb-3">
          <label>Transaction Password</label>
          <input
            type="password"
            className="form-control"

            name="transPassword"
            value={account.transPassword}
            onChange={handleChange}
            placeholder="Enter transaction password"
          />
          {errors.transPassword && <p className="error-message">{errors.transPassword}</p>}

        </div>
        <div >
          {/* className="d-grid" */}
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
    // </div>
  );
};

export default OpenAccount;
