import React, { useEffect, useState } from "react";
import "./Dashboard/Content.css";

import AdminView from "./AdminView";
import AdminDelete from "./AdminDelete";

const AdminContent = ({selectedPage, profile, setSelectedPage}) => {
    let page;
    
    switch (selectedPage) {
        case "View all customers":
            page = <AdminView />
            break;
            case "Deactivate account":
                page = <AdminDelete/>
                break;
      
       
          
        default:
            page =<AdminView/>
            break;
    }
    
   
    return (
        <div className="content-main">
            {/* {custId} */}
            {/* {console.log('content' + profile)} */}
            {page}
        </div>
    );
}

export default AdminContent;