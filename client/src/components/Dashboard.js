import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { useState } from "react";
import AuthenticationService from "../service/AuthenticationService";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Dashboard/Content";
import "./Dashboard.css";

const Dashboard = ({fetchProfile, isLoggedIn, profile}) => {
    const history=useNavigate();
    const [selected, setSelected] = useState();
    const [selectedPage, setSelectedPage] = useState("View Accounts");
    //const [custId, setcustId] = useState("");
    const displayProfile = () => {
        Object.keys(profile).forEach(key => {
            return `${key}:${profile[key]}` 
        })
    }

    const renderSelected = () => {

        switch(selected) {
            case "viewAccounts":
                // return Account
        }
    }
    //react hook to manage life cycle of a Componenent
  useEffect(() => {
    if(Object.keys(profile).length==0)
        fetchProfile(); //invokes fetchProfile() method when component is rendered
  }, []);
// return(
//     <div className="container-fluid">
//     <div className="row flex-nowrap">
//         <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
//             <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
               
//                 <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
//                     <li className="nav-item">
//                         <a href="#" className="nav-link align-middle px-0">
//                             <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">User Profile</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
//                             <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Account</span> </a>
//                         <ul className="collapse  nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
//                             <li className="w-100">
//                                 <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline"></span>View Account</a>
//                             </li>
//                             <li>
//                                 <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline"></span>Edit Account</a>
//                             </li>
//                         </ul>
//                     </li>
                   
//                     <li>
//                         <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
//                             <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Transaction</span></a>
//                         <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
//                             <li className="w-100">
//                                 <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline"></span>View log</a>
//                             </li>
//                             <li>
//                                 <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline"></span>Tr</a>
//                             </li>
//                         </ul>
//                     </li>
                  
                    
//                 </ul>
//                 <hr/>
               
//             </div>
//         </div>
//         <div className="col py-3">
            
//         </div>
//     </div>
// </div>
// );

  return (
    <div className="home">
        {/* <Header isLoggedIn={isLoggedIn} setIsLoggedIn={null}/> */}
        {/* {console.log(profile.custId)} */}
        <div className="dashboard-main">
            <Sidebar setSelectedPage={setSelectedPage}/>
            <Content selectedPage={selectedPage} profile={profile} />
        </div>
    </div>
  );
};



export default Dashboard;

