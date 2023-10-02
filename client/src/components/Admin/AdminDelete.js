import React, { useState } from 'react'
import AdminService from '../../service/AdminService';
import { Button } from "react-bootstrap";
import "../Login.css"

const AdminDelete = () => {
  const [accntNo, setaccntNo] = useState('');
  const handleDeactivate = async () => {
    try {
      const deactivate = await AdminService.deactivateAccount(accntNo);
      console.log('API response: ', deactivate);
    } catch (error) {
      console.error("Deactivate error")
    }
  }
  const handleActivate = async () => {
    try {
      const activate = await AdminService.activateAccount(accntNo);
      console.log('API response: ', activate);
    } catch (error) {
      console.error("Error activating account")
    }
  }
  return (
    <><div className=" d-flex justify-content-center flex-column text-left center-screen">
      <div className="auth-inner m-5">
        <label>Admin Deactivate account</label>
        <br /> <br />
        <input
          type="text"
          className="form-control"
          placeholder="Enter Account Number"

          value={accntNo}
          onChange={(e) => setaccntNo(e.target.value)}

        />
        <br />

        <Button variant='light' onClick={handleDeactivate} style={{"margin":"10px"}}>Deactivate</Button>
        <Button variant='light' onClick={handleActivate}>Activate</Button>

      </div>

    </div></>
  )
}

export default AdminDelete