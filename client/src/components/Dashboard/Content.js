import React, { useEffect, useState } from "react";
import "./Content.css";
import PaymentForm from "../PaymentForm";
import ViewAccounts from "../ViewAccounts";
import EditProfile from "../EditProfile";
import ViewProfile from "../ViewProfile";

const Content = ({selectedPage, profile}) => {
    let page;
    
    switch (selectedPage) {
        case "Edit Profile":
            page = <EditProfile profile={profile}/>
            break;
        case "View Profile":
            page = <ViewProfile profile={profile}/>
            break;
        case "Make Transaction":
            page = <PaymentForm />
            break;
        case "View Accounts":
            page = <ViewAccounts profile={profile}/>
            break;
        default:
            break;
    }
    
    //const [custId, setcustId] = useState();
    // if (selectedPage === "Transaction") {
    //     page = <div><PaymentForm /></div>;
    // } else if (selectedPage === "Edit Profile") {
    //     page = <EditProfile /> ;
    // } else if (selectedPage === "Account") {
    //     page = <div><ViewAccounts profile={profile}/></div> ;
    // }
    return (
        <div className="content-main">
            {/* {custId} */}
            {/* {console.log('content' + profile)} */}
            {page}
        </div>
    );
}

export default Content;