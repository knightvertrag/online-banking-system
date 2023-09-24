import React from "react";
import "./SidebarItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const SidebarItem = ({ name, icon, setSelectedPage }) => {

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