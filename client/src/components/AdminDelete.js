import React, { useState } from 'react'
import ViewAccounts from './ViewAccounts'
import AdminService from '../service/AdminService';

const AdminDelete = () => {
  const [accntNo, setaccntNo] = useState('');
  const handleDeactivate = async () => {
  try{
    const deactivate = await AdminService.deactivateAccount(accntNo);
      console.log('API response: ', deactivate);
  } catch(error){
    console.error("Deactivate error")
  }
}
  return (
    <><div>AdminDelete</div><div>
       <div className="mb-3">
            <label>Account Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Account Number"

              value={accntNo}
              onChange={(e) => setaccntNo(e.target.value)}

            />
          </div>
          <button className="btn btn-primary" onClick={handleDeactivate}>Deactivate</button>
      </div></>
  )
}

export default AdminDelete