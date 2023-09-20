import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RTGSPayment from './RTGSPayment';
import Dropdown from 'react-bootstrap/Dropdown';
import IMPSPayment from './IMPSPayment';
import NEFTPayment from './NEFTPayment';

function PaymentForm() {
  
  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
  

  return (
    <div className="app-container">
        
      <Dropdown  onSelect={handleSelect}>
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
      <Tab value={value} />
    </div>
  );
}

function Tab({value}) {
  
    if (value.toString() == 'RTGS') {
      return <RTGSPayment />;
    }else if (value.toString()=='IMPS') {
      return <IMPSPayment />;
    }else {
      return <NEFTPayment />;
    }
  }

export default PaymentForm;
