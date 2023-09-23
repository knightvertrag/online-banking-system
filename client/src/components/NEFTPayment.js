import React from "react"

const NEFTPayment = () => {
    return(<div>
        <div className="d-flex justify-content-center flex-column text-left">
      <div className="auth-inner m-5">
        <form >
          <h3>Initiate NEFT Payment</h3>

          <div className="mb-3">
            <label>From Account</label>
            <input
              type="text"
              className="form-control"
              placeholder="From Account"
              name="fromAccount"
            //   value={transaction.fromAccount}
            //   onChange={handleChange}
          
            />
            
          </div>
          <div className="mb-3">
            <label>To Account</label>
            <input
              type="text"
              className="form-control"
              placeholder="To Account"
              name="toAccount"
            //   value={transaction.toAccount}
            //   onChange={handleChange}
            />
            
          </div>
          <div className="mb-3">
            <label>Amount</label>
            <input
              type="text"
              className="form-control"
              placeholder="Amount"
              name="amount"
            //   value={transaction.amount}
            //   onChange={handleChange}
            />
          </div>
          
          <div className="mb-3">
            <label>Transaction Date</label>
            <input type="date" 
            className="form-control" 
            name="transactionDate"
            //   value={transaction.transactionDate}
            //   onChange={handleChange}
              />
          </div>
          
          <div className="mb-3">
            <label>Remark</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter remark"
              name="remark"
            //   value={customer.fatherName}
            //   onChange={handleChange}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          
        </form>
      </div>
    </div>

    </div> );
}

export default NEFTPayment;