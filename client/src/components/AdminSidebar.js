import React, { useState } from "react";
import SidebarItem from "./Sidebar/SidebarItem";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillTransfer, faUser } from "@fortawesome/free-solid-svg-icons";
import Admin from "./Admin";

const AdminSidebar = ({ setSelectedPage }) => {

    const [activeItem, setActiveItem] = useState("Profile");

    const changeSidebarItem = (e) => {
        console.log(e);
        setActiveItem(e.target.innerHTML);
    }
    return (
        <div className="sidebar-main">
            <div className="sidebar-item" value="allCustomers" onClick={(e) => changeSidebarItem(e)}>
                <FontAwesomeIcon icon={faUser} />
                <SidebarItem name="View all customers" icon="fa-regular fa-user" setSelectedPage={setSelectedPage} />
                
            </div>
            {activeItem === "allCustomers" ? (
                <>
                    <SidebarItem name="View all customers" setSelectedPage={setSelectedPage} />
                    
                </>
                ) : <></>}
            <div className="sidebar-item"  value="deactivateAccount" onClick={(e) => changeSidebarItem(e)}>
                <FontAwesomeIcon icon={faMoneyBillTransfer} />
                <SidebarItem name="Deactivate account" icon="fa-money-bill-transfer" setSelectedPage={setSelectedPage} />
            </div>
            {activeItem === "deactivateAccount" ? (
                <>
                    <SidebarItem name="Deactivate account" setSelectedPage={setSelectedPage} />
                    
                </>
                ) : <></>}
           
        </div>
    );
}

export default AdminSidebar;