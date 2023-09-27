import React, { useRef, useState } from "react";
import TransactionsService from "../service/TransactionService";

const RTGSPayment = ({ accounts, setSelectedPage }) => {
  //defining state
  const [transaction, setTransaction] = useState({
    senderAccountNo: "Please select account",
    receiverAccountNo: "",
    amount: "",
    remarks: "",
    maturityInstruction: "",
    transPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let validationErrors = {};
console.log(transaction.senderAccountNo)
    if (transaction.senderAccountNo=="Please select account") {
      validationErrors.senderAccountNo = "Sender account is required.";
    }

    if (!transaction.receiverAccountNo) {
      validationErrors.receiverAccountNo = "Receiver account is required.";
    } else if (transaction.receiverAccountNo.length < 3) {
      validationErrors.receiverAccountNo =
        "Invalid Receiver Account. Should be greater than 3 digits";
    }
    if (!transaction.amount || transaction.amount == 0) {
      validationErrors.amount = "Non-zero amount is required.";
    } else if (!/^[0-9]+$/.test(transaction.amount)) {
      validationErrors.amount = "Invalid amount. Only digits are accepted.";
    }
    if (!transaction.transPassword) {
      validationErrors.transPassword = "Transaction password is required.";
    } // else if (!/^\d{6}$/.test(transaction.transPassword)) {
    //   validationErrors.transPassword =
    //     "Invalid transaction password. Please enter a 6-digit number.";
    // }
    return validationErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      try {
        await TransactionsService.createTransaction(transaction);
        setSuccessMessage("Transaction successful!");
        alert("Transaction Successfull");
        setTimeout(() => {
          setSelectedPage('View Transactions');
        }, 3000);
      } catch (error) {
        console.error("Transaction error", error);
        setSuccessMessage("An error occurred during transaction.");
      }
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div className="d-flex justify-content-center flex-column text-left">
      <div className="auth-inner m-5">
        <form onSubmit={handleSubmit}>
          <h3>Initiate RTGS Payment</h3>
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          <div className="mb-3">
            <label>Sender Account</label>
            <select
              className="form-select"
              name="senderAccountNo"
              defaultValue="Please select account"
              // value={transaction.senderAccountNo}
              onChange={handleChange}
            >
            <option>Please select account</option>
            {accounts.map((account) => (
              <option key={account.accNo}>{account.accNo}</option>
            ))}
            </select>
            {errors.senderAccountNo && (
              <p className="error-message">{errors.senderAccountNo}</p>
            )}
          </div>
          <div className="mb-3">
            <label>Receiver Account</label>
            <input
              type="text"
              className="form-control"
              placeholder="Receiver Account"
              name="receiverAccountNo"
              value={transaction.receiverAccountNo}
              onChange={handleChange}
            />
            {errors.receiverAccountNo && (
              <p className="error-message">{errors.receiverAccountNo}</p>
            )}
          </div>
          <div className="mb-3">
            <label>Transaction Password</label>
            <input
              type="password"
              className="form-control"
              name="transPassword"
              value={transaction.transPassword}
              onChange={handleChange}
              placeholder="Enter transaction password"
            />
            {errors.transPassword && (
              <p className="error-message">{errors.transPassword}</p>
            )}
          </div>
          <div className="mb-3">
            <label>Amount</label>
            <input
              type="text"
              className="form-control"
              placeholder="Amount"
              name="amount"
              value={transaction.amount}
              onChange={handleChange}
            />
            {errors.amount && <p className="error-message">{errors.amount}</p>}
          </div>

          {/* <div className="mb-3">
            <label>Transaction Date</label>
            <input type="date" 
            className="form-control" 
            name="transactionDate"
            //   value={transaction.transactionDate}
            //   onChange={handleChange}
              />
          </div> */}
          <div className="mb-3">
            <label>Maturity Instructions</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter maturity instructions"
              name="maturityInstruction"
              value={transaction.maturityInstruction}
              onChange={handleChange}
            />
            {errors.maturityInstruction && (
              <p className="error-message">{errors.maturityInstruction}</p>
            )}
          </div>
          <div className="mb-3">
            <label>Remarks</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter remark"
              name="remarks"
              value={transaction.remarks}
              onChange={handleChange}
            />
            {errors.remarks && (
              <p className="error-message">{errors.remarks}</p>
            )}
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RTGSPayment;
