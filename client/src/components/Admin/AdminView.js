import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router";
import AdminService from "../../service/AdminService";


const AdminView = () => {
  
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
    <div> <br/>
    <div className="row justify-content-center" >

    <table className="table table-bordered table-striped w-auto">
     <thead>
        <tr className="table-active">
            <th>Customer Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Aadhar</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Father's Name</th>
            <th>Phone No.</th>
           
        </tr>
    </thead>
    <tbody>
            {customers.map(
                    customer =>  
                    <tr key={customer.custId}>
                        <td>{customer.custId}</td>
                        <td> {customer.firstName} </td>
                        <td>{customer.lastName}</td>
                        <td>{customer.aadhar}</td>
                        <td>{customer.dob}</td>
                        <td>{customer.email}</td>
                        <td>{customer.fatherName}</td>
                        <td>{customer.phone}</td>
                       
                    </tr>
                )
            }
    </tbody>
    </table>
    </div>
    </div>

  )
}

export default AdminView