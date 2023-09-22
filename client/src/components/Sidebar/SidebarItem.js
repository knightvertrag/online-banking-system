import React from "react";
import "./SidebarItem.css";

const SidebarItem = ({name, setSelectedPage}) => {

    const changeContent = () => {
        setSelectedPage(name);
    }

    return (
        <div className="sidebar-item-main" onClick={changeContent}>
            {name}
        </div>
    ); 
}

export default SidebarItem;