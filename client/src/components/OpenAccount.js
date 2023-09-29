import React, { useEffect, useState } from "react";
import AuthenticationService from "../service/AuthenticationService";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import "./OpenAccount.css";
import FormInput from "./FormInput";
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
    id: profile.custId,
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
      validationErrors.password = "Transaction Password length must be at least 6 characters";
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
    <div className="view-profile-main">
      <div className="view-profile-heading">Open Account</div>
      <div className="view-profile-sub-heading">Open an account for customer: {profile.custId}</div>
      <hr />
      <form className="view-profile-form-main" onSubmit={handleSubmit}>
        <div className="view-profile-form-row">
          <FormInput readOnly={true} title="First Name" type="text" name="firstName" value={customer.firstName} onChange={handleChange} />
          <FormInput readOnly={true}  title="Last Name" type="text" name="lastName" value={customer.lastName} onChange={handleChange} />
        </div>
        <div className="view-profile-form-row">
          <FormInput readOnly={true} title="Email" type="email" name="email" value={customer.email} onChange={handleChange} />
          <FormInput readOnly={true} title="Phone" type="phone" name="phone" value={customer.phone} onChange={handleChange} />
        </div>
        <div className="view-profile-form-row">
          <FormInput readOnly={true} title="Aadhar" type="text" name="aadhar" value={customer.aadhar} onChange={handleChange} />
          <FormInput readOnly={true} title="Date of Birth" type="date" name="dob" value={customer.dob} onChange={handleChange} />
        </div>
        <div className="view-profile-form-row">
          <FormInput title={`Balance`} type={`number`} name="balance" value={account.balance} onChange={handleChange} errors={errors.balance}/>
          <FormInput title="Transaction Password" type="password" name="transPassword" value={account.transPassword} onChange={handleChange} errors={errors.password} />
        </div>
        <div className="view-profile-form-row">
          <FormInput title="Address" type="text" width={`100%`} name="address" value={customer.address} onChange={handleChange} errors={errors.address}/>
        </div>

        <button type="submit" className="btn-main">
          Submit
        </button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>

  );
};

export default OpenAccount;
