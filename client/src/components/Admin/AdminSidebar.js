import React, { useState } from "react";

import "../Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer, faUser } from "@fortawesome/free-solid-svg-icons";
import Admin from "./Admin";
import SidebarItem from "../Sidebar/SidebarItem";
import SidebarSubItem from "../Sidebar/SidebarSubItem";
import { useEffect } from "react";

const AdminSidebar = ({ setSelectedPage }) => {

    const [activeItem, setActiveItem] = useState("Profile");

    const changeSidebarItem = (e) => {
        console.log(e);
        setActiveItem(e.target.innerHTML);
    }

    useEffect(() => {console.log(activeItem);}, [activeItem]);
    return (
        <div className="sidebar-main">
            <div className="sidebar-item" value="View all customers" onClick={(e) => changeSidebarItem(e)}>
                <FontAwesomeIcon icon={faUser} />
                <SidebarItem name="View all customers" icon="fa-regular fa-user" setSelectedPage={setSelectedPage} />
                
            </div>
            {activeItem === "View all customers" ? (
                <>
                    <SidebarSubItem name="View all customers" setSelectedPage={setSelectedPage} />
                    
                </>
                ) : <></>}
            <div className="sidebar-item"  value="Deactivate or Activate" onClick={(e) => changeSidebarItem(e)}>
                <FontAwesomeIcon icon={faMoneyBillTransfer} />
                <SidebarItem name="Deactivate or Activate" icon="fa-money-bill-transfer" setSelectedPage={setSelectedPage} />
            </div>
            {activeItem === "Deactivate or Activate" ? (
                <>
                    <SidebarSubItem name="Deactivate or Activate" setSelectedPage={setSelectedPage} />
                    
                </>
                ) : <></>}
            <div className="sidebar-item"  value="Deposit or Withdraw" onClick={(e) => changeSidebarItem(e)}>
                <FontAwesomeIcon icon={faMoneyBillTransfer} />
                <SidebarItem name="Deposit or Withdraw" icon="fa-money-bill-transfer" setSelectedPage={setSelectedPage} />
            </div>
            {activeItem === "Deposit or Withdraw" ? (
                <>
                    <SidebarSubItem name="Deposit or Withdraw" setSelectedPage={setSelectedPage} />
                    
                </>
                ) : <></>}
           
        </div>
    );
}

export default AdminSidebar;