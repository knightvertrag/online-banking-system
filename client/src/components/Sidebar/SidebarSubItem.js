import React from "react";
import "./SidebarSubItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const SidebarSubItem = ({ name, icon, setSelectedPage }) => {

    const changeContent = () => {
        setSelectedPage(name);
    }

    return (

        <div className="sidebarsub-item-main" onClick={changeContent}>
            {name}
        </div>

    );
}

export default SidebarSubItem;