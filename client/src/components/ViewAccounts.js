import React, { useEffect, useState } from "react";
import AccountsService from "../service/AccountsService";
import { useNavigate } from "react-router";


const ViewAccounts = () => {
  const history = useNavigate();
  //const [custId, setcustId] = useState(profile.custId);
  //react hook to manage lifecycle of a component
  
  const [accounts, setAccounts] = useState([]);

  const fetchAccounts = () => {
    AccountsService.getAccounts(localStorage.getItem("custId")).then((response) => {
      setAccounts(response.data);
    });
  };
  
  useEffect(() => {
    fetchAccounts();
  }, []);

  return (
    <div>
      View account details
      <div className="row justify-content-center">
        {accounts.length > 0 ? (
          <table className="table table-success w-auto">
            <thead>
              <tr className="table-danger">
                <th> Account No.</th>
                <th> Balance</th>
                <th> Account Status</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => (
                <tr key={account.accNo}>
                  <td> {account.accNo} </td>
                  <td> {account.balance} </td>
                  <td> {account.isActive == 1 ? "Active" : "Inactive"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3>No accounts</h3>
        )}
      </div>
    </div>
  );
};

export default ViewAccounts;
