import React, { useState } from "react";
import SidebarItem from "./Sidebar/SidebarItem";
import SidebarSubItem from "./Sidebar/SidebarSubItem";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBank, faMoneyBillTransfer, faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ setSelectedPage }) => {

    const [activeItem, setActiveItem] = useState("Profile");

    const changeSidebarItem = (e) => {
        console.log(e);
        setActiveItem(e.target.innerHTML);
    }

    const activeStyle = "sidebar-item sidebaritem-active";
    return (
        <div className="sidebar-main">
            <div className={activeItem === "Profile" ? activeStyle : `sidebar-item`} value="Profile" onClick={(e) => changeSidebarItem(e)}>
                <FontAwesomeIcon icon={faUser} />
                <SidebarItem name="Profile" icon="fa-regular fa-user" setSelectedPage={setSelectedPage} />
                
            </div>
            {activeItem === "Profile" ? (
                <>
                    <SidebarSubItem name="View Profile" setSelectedPage={setSelectedPage} />
                    <SidebarSubItem name="Edit Profile" setSelectedPage={setSelectedPage} />
                </>
                ) : <></>}
            <div className={activeItem === "Account" ? activeStyle : `sidebar-item`}  value="Account" onClick={(e) => changeSidebarItem(e)}>
                <FontAwesomeIcon icon={faMoneyBillTransfer} />
                <SidebarItem name="Account" icon="fa-money-bill-transfer" setSelectedPage={setSelectedPage} />
            </div>
            {activeItem === "Account" ? (
                <>
                    <SidebarSubItem name="View Accounts" setSelectedPage={setSelectedPage} />
                    <SidebarSubItem name="Open Account" setSelectedPage={setSelectedPage} />
                </>
                ) : <></>}
            <div className={activeItem === "Transaction" ? activeStyle : `sidebar-item`}  value="Transaction" onClick={(e) => changeSidebarItem(e)}>
                <FontAwesomeIcon icon={faBank} />
                <SidebarItem name="Transaction" setSelectedPage={setSelectedPage} />
            </div>
            {activeItem === "Transaction" ? (
                <>
                    <SidebarSubItem name="Make Transaction" setSelectedPage={setSelectedPage} />
                    <SidebarSubItem name="View Transactions" setSelectedPage={setSelectedPage} />
                </>
                ) : <></>}
        </div>
    );
}

export default Sidebar;