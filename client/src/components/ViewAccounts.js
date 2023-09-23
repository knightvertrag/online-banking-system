import React, { useEffect, useState } from "react";
import AccountsService from "../service/AccountsService";
import { useNavigate } from "react-router";
import AuthenticationService from "../service/AuthenticationService";

const ViewAccounts = ({profile}) =>{
    
  
    const history = useNavigate();
    //const [custId, setcustId] = useState(profile.custId);
    //react hook to manage lifecycle of a component
    useEffect(() => {
        fetchAccounts();
        
    }, []);
    const [accounts, setAccounts] = useState([]);
    // console.log(profile.custId)
    const fetchAccounts = () => {
        AccountsService.getAccounts(profile.custId).then((response) => {
            setAccounts(response.data);
            // console.log(response.data);
        })
    }


    return(
        <div>View account details
        <div className="row justify-content-center" >

        <table className="table table-success w-auto">
         <thead>
            <tr className="table-danger">
                <th> Account Id</th>
                <th> Balance</th>
                <th> Account Status</th>
            </tr>
        </thead>
        <tbody>
                {accounts.map(
                        account => 
                        <tr key={account.accNo}>
                            <td> {account.balance} </td>
                            <td> {account.isActive} </td>
                            <td> {account.accNo}</td>
                        </tr>
                    )
                }
        </tbody>
        </table>
        </div>
        </div>
    );
};

export default ViewAccounts;