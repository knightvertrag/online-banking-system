import React, {useState} from "react";
import AdminService from "../../service/AdminService";
import "../Login.css"
const AdminDepositWithdraw = ({}) => {
    
    const [transact, setTransact] = useState('');
    const [accntNo, setAccntNo] = useState('');
    const [amount, setAmount] = useState('');
    const [successMessage , setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleDeposit = async () => {
      if (!accntNo || !amount) {
        setErrorMessage('Please Enter both Account No and Amount');
        return;
      }
      const transact = { accntNo, amount };
  
      try {
        const apiResponse = await AdminService.deposit(transact);
        console.log('API response: ', apiResponse);
        setSuccessMessage(apiResponse.data);
        
      }
      catch (error) {
        console.error('Deposit error: ', error);
        setErrorMessage('An error occured during Deposit');
      }
    }
    const handleWithdraw = async () => {
        if (!accntNo || !amount) {
          setErrorMessage('Please Enter both Account No and Amount');
          return;
        }
        const transact = { accntNo, amount };
    
        try {
          const apiResponse = await AdminService.withdraw(transact);
          console.log('API response: ', apiResponse);
          setSuccessMessage(apiResponse.data);
          
        }
        catch (error) {
          console.error('Withdraw error: ', error);
          setErrorMessage('An error occured during Withdraw');
        }
      }
    return (
      <div className=" d-flex justify-content-center flex-column text-left center-screen">
        <div className="auth-inner m-5">
          
  
            <h3>Deposit/Withdraw</h3>
            <div className="mb-3">
              <label>Account Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Account Number"
  
                value={accntNo}
                onChange={(e) => setAccntNo(e.target.value)}
  
              />
            </div>
            <div className="mb-3">
              <label>Amount</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter amount"
  
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary" onClick={handleDeposit}>
                Deposit
              </button>
              <br /> 
              <button type="submit" className="btn btn-primary" onClick={handleWithdraw}>
                Withdraw
              </button>
  
              {errorMessage && <p className='error-message'>{errorMessage}</p>}
              {successMessage && <p className='successMessage'>{successMessage}</p>}

            </div>
          
          <div>
            
          </div>
  
        </div>
      </div>
    );


}

export default AdminDepositWithdraw;