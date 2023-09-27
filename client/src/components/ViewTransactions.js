import React, { useEffect, useState } from "react";
import { TransactionItem } from "./Transaction/TransactionItem";
import AccountsService from "../service/AccountsService";
import Dropdown from "react-bootstrap/Dropdown";

const ViewTransactions = () => {
  const [accounts, setAccounts] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = () => {
    AccountsService.getAccounts(localStorage.getItem("custId")).then(
      (response) => {
        setAccounts(response.data);
      }
    );
  };

  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };

  return (
    <div className="app-container">
      {accounts.length > 0 ? (
        <>
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Select Account
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {accounts.map((account) => (
                <Dropdown.Item key={account.accNo} eventKey={account.accNo}>
                  {account.accNo}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          {value.length > 0 && <Tab value={value} accounts={accounts} />}
        </>
      ) : (
        <h3> No accounts</h3>
      )}
    </div>
  );
};

function Tab({ value }) {
  return <TransactionItem accNo={value.toString()} />;
}

export default ViewTransactions;
