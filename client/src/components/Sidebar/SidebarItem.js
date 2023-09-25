import React, { useState } from "react";
import "./SidebarItem.css";

const SidebarItem = ({name}) => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className={`sidebaritem-main` + (isClicked ? `sidebaritem-active` : ``)} onClick={() => {setIsClicked(!isClicked)}}>
            {name}
        </div>
    );
}

export default SidebarItem;