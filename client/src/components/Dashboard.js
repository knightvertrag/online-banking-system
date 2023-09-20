import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { useState } from "react";
import AuthenticationService from "../service/AuthenticationService";



const Dashboard = ({profile, fetchProfile}) => {
    const history=useNavigate();
    //react hook to manage life cycle of a Componenent
  useEffect(() => {
    if(!profile.firstName)
        fetchProfile(); //invokes fetchProfile() method when component is rendered
  }, []);
return(
    <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
               
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">User Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Account</span> </a>
                        <ul className="collapse  nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline"></span>View Account</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline"></span>Edit Account</a>
                            </li>
                        </ul>
                    </li>
                   
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Transaction</span></a>
                        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline"></span>Withdraw</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline"></span>Deposit</a>
                            </li>
                        </ul>
                    </li>
                  
                    
                </ul>
                <hr/>
               
            </div>
        </div>
        <div className="col py-3">
            <h3>Left Sidebar with Submenus</h3>
            <p className="lead">
                An example 2-level sidebar with collasible menu items. The menu functions like an "accordion" where only a single 
                menu is be open at a time. While the sidebar itself is not toggle-able, it does responsively shrink in width on smaller screens.</p>
            <ul className="list-unstyled">
                <li><h5>Responsive</h5> shrinks in width, hides text labels and collapses to icons only on mobile</li>
            </ul>
        </div>
    </div>
</div>
);
};



export default Dashboard;

