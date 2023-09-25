import React, { useState } from "react";
import SidebarItem from "./Sidebar/SidebarItem";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBank, faMoneyBillTransfer, faUser } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ setSelectedPage }) => {

    const [activeItem, setActiveItem] = useState("Profile");

    const changeSidebarItem = (e) => {
        console.log(e);
        setActiveItem(e.target.innerHTML);
    }
    return (
        <div className="sidebar-main">
            <div className="sidebar-item" value="Profile" onClick={(e) => changeSidebarItem(e)}>
                {/* <FontAwesomeIcon icon={faUser} /> */}
                <SidebarItem name="Profile" icon="fa-regular fa-user" setSelectedPage={setSelectedPage} />
                
            </div>
            {activeItem === "Profile" ? (
                <>
                    <SidebarItem name="View Profile" setSelectedPage={setSelectedPage} />
                    <SidebarItem name="Edit Profile" setSelectedPage={setSelectedPage} />
                </>
                ) : <></>}
            <div className="sidebar-item"  value="Account" onClick={(e) => changeSidebarItem(e)}>
                <FontAwesomeIcon icon={faMoneyBillTransfer} />
                <SidebarItem name="Account" icon="fa-money-bill-transfer" setSelectedPage={setSelectedPage} />
            </div>
            {activeItem === "Account" ? (
                <>
                    <SidebarItem name="View Accounts" setSelectedPage={setSelectedPage} />
                </>
                ) : <></>}
            <div className="sidebar-item"  value="Transaction" onClick={(e) => changeSidebarItem(e)}>
                <FontAwesomeIcon icon={faBank} />
                <SidebarItem name="Transaction" setSelectedPage={setSelectedPage} />
            </div>
            {activeItem === "Transaction" ? (
                <>
                    <SidebarItem name="Make Transaction" setSelectedPage={setSelectedPage} />
                    <SidebarItem name="View Transactions" setSelectedPage={setSelectedPage} />
                </>
                ) : <></>}
        </div>
    );
}

export default Sidebar;