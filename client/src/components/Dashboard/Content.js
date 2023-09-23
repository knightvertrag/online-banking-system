import React, { useEffect, useState } from "react";
import "./Content.css";
import PaymentForm from "../PaymentForm";
import ViewAccounts from "../ViewAccounts";

const Content = ({selectedPage, profile}) => {
    let page;
    
    
    //const [custId, setcustId] = useState();
    if (selectedPage === "Transaction") {
        page = <div><PaymentForm /></div>;
    } else if (selectedPage === "Profile") {
        page = <div>profile</div> ;
    } else if (selectedPage === "Account") {
        page = <div><ViewAccounts profile={profile}/></div> ;
    }
    return (
        <div className="content-main">
            {/* {custId} */}
            {/* {console.log('content' + profile)} */}
            {page}
        </div>
    );
}

export default Content;