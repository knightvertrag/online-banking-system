import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { useState } from "react";
import AdminService from "../service/AdminService";
import AdminSidebar from "./AdminSidebar";
import Header from "./Header";
import AdminContent from "./AdminContent"
import "./Dashboard.css";

const AdminDash = ({fetchProfile, isLoggedIn, profile}) => {
    const history=useNavigate();
    const [selected, setSelected] = useState();
    const [selectedPage, setSelectedPage] = useState("View Accounts");
    //const [custId, setcustId] = useState("");
    // const displayProfile = () => {
    //     Object.keys(profile).forEach(key => {
    //         return `${key}:${profile[key]}` 
    //     })
    // }

    // const renderSelected = () => {

    //     switch(selected) {
    //         case "viewAccounts":
    //             // return Account
    //     }
    // }
    //react hook to manage life cycle of a Componenent
//   useEffect(() => {
//     if(Object.keys(profile).length==0)
//         fetchProfile(); //invokes fetchProfile() method when component is rendered
//   }, []);


  return (
    <div className="home">
        {/* <Header isLoggedIn={isLoggedIn} setIsLoggedIn={null}/> */}
        {/* {console.log(profile.custId)} */}
        <div className="dashboard-main">
            <AdminSidebar setSelectedPage={setSelectedPage}/>
            <AdminContent selectedPage={selectedPage} profile={profile} setSelectedPage={setSelectedPage}/>
        </div>
    </div>
  );
};



export default AdminDash;

