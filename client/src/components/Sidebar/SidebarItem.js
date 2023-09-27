import React, { useState } from "react";
import "./SidebarItem.css";

const SidebarItem = ({name}) => {

    return (
        <div className={`sidebaritem-main`}>
            {name}
        </div>
    );
}

export default SidebarItem;