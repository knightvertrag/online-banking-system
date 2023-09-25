import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router";
import AdminService from "../service/AdminService";

const AdminDashboard = () => {
  
  const history=useNavigate();
  useEffect(() => {
    fetchAllCustomers();
    
}, []);
const [customers, setAllCustomers] = useState([]);

const fetchAllCustomers = () => {
    AdminService.getAllCustomers().then((response) => {
        setAllCustomers(response.data);
        console.log(response.data);
    })
}

  return (
    <div>All Customers Details
    <div className="row justify-content-center" >

    <table className="table table-success w-auto">
     <thead>
        <tr className="table-danger">
            <th>Customer Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Aadhar</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Father's Name</th>
            <th>Password</th>
            <th>Phone No.</th>
        </tr>
    </thead>
    <tbody>
            {/* {customers?.map(
                    response =>  
                    <tr key={response.custId}>
                        <td> {response.firstName} </td>
                        <td>{response.lastName}</td>
                       
                    </tr>
                )
            } */}
    </tbody>
    </table>
    </div>
    </div>

  )
}

export default AdminDashboard