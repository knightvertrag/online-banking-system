import React from "react";
import SidebarItem from "./Sidebar/SidebarItem";
import "./Sidebar.css";

const Sidebar = ({setSelectedPage}) => {

    
    return (
        <div className="sidebar-main">
            <SidebarItem name="Profile" setSelectedPage={setSelectedPage}/>
            <SidebarItem name="Account" setSelectedPage={setSelectedPage}/>
            <SidebarItem name="Transaction" setSelectedPage={setSelectedPage}/>
        </div>
    );
}

export default Sidebar;