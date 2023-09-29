import React, { useEffect, useState } from "react";
import "../Dashboard/Content.css";

import AdminView from "./AdminView";
import AdminDelete from "./AdminDelete";
import AdminDepositWithdraw from "./AdminDepositWithdraw";

const AdminContent = ({selectedPage, profile, setSelectedPage}) => {
    let page;
    
    switch (selectedPage) {
        case "View all customers":
            page = <AdminView />
            break;
        case "Deactivate or Activate":
            page = <AdminDelete/>
            break;   
        case "Deposit or Withdraw":
            page = <AdminDepositWithdraw />
            break;       
        default:
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