import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RTGSPayment from "./RTGSPayment";
import Dropdown from "react-bootstrap/Dropdown";
import IMPSPayment from "./IMPSPayment";
import NEFTPayment from "./NEFTPayment";
import AccountsService from "../service/AccountsService";
import PaymentItem from "./Payment/PaymentItem";

function PaymentForm({ setSelectedPage }) {
  const [accounts, setAccounts] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetchAccounts();
  }, []);

  // console.log(profile.custId);
  const fetchAccounts = () => {
    AccountsService.getAccounts(localStorage.getItem("custId")).then(
      (response) => {
        setAccounts(response.data);
      }
    );
  };

  const handleSelect = (e) => {
    setValue(e);
  };

  return (
    <div className="app-container">
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select RIGS/IMPS/NEFT
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="RTGS">RTGS Payment</Dropdown.Item>
          <Dropdown.Item eventKey="IMPS">IMPS Payment</Dropdown.Item>
          <Dropdown.Item eventKey="NEFT">NEFT Payment</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* <h4>You selected {value}</h4> */}
      {value.length > 0 && (
        <Tab
          value={value}
          accounts={accounts}
          setSelectedPage={setSelectedPage}
        />
      )}
    </div>
  );
}

function Tab({ value, accounts, setSelectedPage }) {
  return (
    <PaymentItem
      value={value}
      accounts={accounts}
      setSelectedPage={setSelectedPage}
    />
  );
}

export default PaymentForm;
