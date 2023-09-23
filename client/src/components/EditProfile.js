import React,{ useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import CustomerService from '../service/CustomerService';


function EditProfile() {

    const navigate = useNavigate();

    const {id} = useParams(); //fetches id from URL

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [aadhar,setAadhar]=useState('');
    const [email,setEmail]=useState('');
    const [fatherName,setFatherName]=useState('');

    const [errors, setErrors] = useState({});

    //component life management - component update
    useEffect(() => {
            CustomerService.getCustomerById(id).then((response) => {
                const customer = response.data;
               setFirstName(customer.firstName);
               setAadhar(customer.aadhar);
               setDob(customer.dob);
               setEmail(customer.email);
               setPhone(customer.phone);
               setFatherName(customer.fatherName);
               setLastName(customer.lastName);
            });

    }, [id]);      

    const UpdateCustomer = async (event) => {
        event.preventDefault();
        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length === 0) {
            try {
              const customer = { firstName, lastName, fatherName, phone, dob,email,aadhar };
              await CustomerService.updateCustomer(customer,id);
              alert("Details have been updated");
              setTimeout(() => {
                navigate('/dashboard');
              }, 3000);
            
            } 
            
            catch (error) {
              console.error('Updation error', error);
            }
          } else {
            setErrors(validationErrors);
          }
    };

    // methods to set value of state
    const changeFirstNameHandler = (event) => {
        setFirstName(event.target.value);
    };

    const changeLastNameHandler = (event) => {
        setLastName(event.target.value);
    };

    const changeFatherNameHandler = (event) => {
        setFatherName(event.target.value); 
    };

    const changePhoneHandler = (event) => {
        setPhone(event.target.value);
    };

    const changeEmailHandler = (event) => {
        setEmail(event.target.value);
    };

    const changeAadharHandler = (event) => {
        setAadhar(event.target.value);
    };

    const changeDobHandler = (event) => {
        setDob(event.target.value);
    };

    const cancel = () => {
        navigate('/dashboard');
    };

    const validateForm = () => {
        let validationErrors = {};
    
        if (!aadhar) {
          validationErrors.aadhar = 'Aadhar is required.';
        }
    
        if (!dob) {
          validationErrors.dob = 'Date of Birth is required.';
        } 
    
        if (!email) {
          validationErrors.email = 'Email is required.';
        }
        if (!firstName) {
          validationErrors.firstName = 'First name is required.';
        }
          else if (!/^[a-zA-Z]*$/.test(firstName)) {
            validationErrors.firstName = 'Enter Alphabets Only';
          }
    
        if (!lastName) {
          validationErrors.lastName = 'Last name is required.';
        }
    
        if (!fatherName) {
          validationErrors.fatherName = 'Father name is required.';
        }
    
        if (!phone) {
          validationErrors.phone = 'Phone number is required.';
        } else if (!/^\d{10}$/.test(phone)) {
          validationErrors.phone = 'Invalid phone number. Please enter a 10-digit number.';
        } 
    
        return validationErrors;
      };



  return (
    <div className="d-flex justify-content-center flex-column text-left center-screen">
      <div className="auth-inner m-5">
      <form>
          <h3>Update User Details</h3>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="firstName"
              value={firstName}
              onChange={changeFirstNameHandler}
         />     

          </div>
          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lastName"
              value={lastName}
              onChange={changeLastNameHandler}
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
              value={phone}
              onChange={changePhoneHandler}
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
              value={email}
              onChange={changeEmailHandler}
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
              value={fatherName}
              onChange={changeFatherNameHandler}
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
              value={aadhar}
              onChange={changeAadharHandler}
            />
            {errors.aadhar && <p className="error-message">{errors.aadhar}</p>}
          </div>
          <div className="mb-3">
            <label>Date of Birth</label>
            <input type="date" 
            className="form-control" 
            name="dob"
              value={dob}
              onChange={changeDobHandler}/>
              {errors.dob && <p className="error-message">{errors.dob}</p>}

          </div>
          <button className="btn btn-success" onClick={UpdateCustomer}>Update</button>
          <button className="btn btn-danger" onClick={cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
        </form>
       
      </div>
    </div>
  )
  }

export default EditProfile