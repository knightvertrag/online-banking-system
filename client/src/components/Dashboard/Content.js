import React from "react";
import "./Content.css";
import PaymentForm from "../PaymentForm";

const Content = ({selectedPage}) => {
    let page;
    if (selectedPage === "Transaction") {
        page = <div>transactikon</div>;
    } else if (selectedPage === "Profile") {
        page = <div>profile</div> ;
    } else if (selectedPage === "Account") {
        page = <div>Account</div> ;
    }
    return (
        <div className="content-main">
            {page}
        </div>
    );
}

export default Content;