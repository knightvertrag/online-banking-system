import React, { useEffect, useState } from "react";
import TransactionsService from "../../service/TransactionService";

export const TransactionItem = ({ accNo }) => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = () => {
    TransactionsService.getTransactions(accNo).then((response) => {
      setTransactions(response.data);
      //   console.log(response.data);
    });
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="row justify-content-center m-5">
      {transactions.length > 0 ? (
        <table className="table table-success w-auto">
          <thead>
            <tr className="table-danger">
              <th> Sender Account No.</th>
              <th> Receiver Account No.</th>
              <th> Amount</th>
              <th> Transaction Time</th>
              <th> Remarks </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.transId}>
                <td> {transaction.senderAccount.accNo} </td>
                <td> {transaction.receiverAccount.accNo} </td>
                <td> {transaction.amount}</td>
                <td> {transaction.transactionTime} </td>
                <td> {transaction.remarks ? transaction.remarks : "-"} </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3>No transactions</h3>
      )}
    </div>
  );
};
