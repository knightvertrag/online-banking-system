import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import CustomerService from '../service/CustomerService';


const ViewProfile = () => {

    const history = useNavigate();

    const { id } = useParams();
    const [customer, setCustomer] = useState({});

     // componentDidUpdate usage
    useEffect(() => {
        CustomerService.getCustomerById(id).then((res) => {
            setCustomer(res.data);
        });
    }, [id]);  // //values -id triggers re render whenever they are updated in your program,
                //you can add multiple values by separating them by commas

    const backDashboard = () => {
        history('/dashboard');
    };
    return (
        <div>
            <br />
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">Customer Profile</h3><hr/>
                <div className="card-body">
                    <div className="row">
                        <label>Customer Id:</label>
                        <div class="text-success fw-bolder">{customer.custId}</div><hr/>
                    </div>
                    <div className="row">
                        <label>First Name:</label>
                        <div class="text-success fw-bolder">{customer.firstName}</div><hr/>
                    </div>
                    <div className="row">
                        <label>Last Name:</label>
                        <div class="text-success fw-bolder">{customer.lastName}</div><hr/>
                    </div>
                    <div className="row">
                        <label>Phone No. :</label>
                        <div class="text-success fw-bolder">{customer.phone}</div><hr/>
                    </div>
                    <div className="row">
                        <label>Email:</label>
                        <div class="text-success fw-bolder">{customer.email}</div><hr/>
                    </div>
                    <div className="row">
                        <label>Father Name:</label>
                        <div class="text-success fw-bolder">{customer.fatherName}</div><hr/>
                    </div>
                    <div className="row">
                        <label>Date of Birth:</label>
                        <div class="text-success fw-bolder">{customer.dob}</div><hr/>
                    </div>
                    <div className="row">
                        <label>Aadhar No. :</label>
                        <div class="text-success fw-bolder">{customer.aadhar}</div><hr/>
                    </div>
                  
                </div>
                <div className = "row justify-content-center">
                        <button className="btn btn-info w-auto" onClick={backDashboard}>Back To User Dashboard</button>
                    </div>
            </div>
        </div>
    );
}

export default ViewProfile;