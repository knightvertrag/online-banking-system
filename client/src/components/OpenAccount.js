import React, { useEffect, useState } from "react";
import AuthenticationService from "../service/AuthenticationService";

const OpenAccount = ({profile}) => {

  

  
  return (
    <div>
      Open Account
      {profile.firstName}
    </div>
  );
};

export default OpenAccount;
