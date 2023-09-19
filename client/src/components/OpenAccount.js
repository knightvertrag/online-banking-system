import React, { useEffect, useState } from "react";
import AuthenticationService from "../service/AuthenticationService";

const OpenAccount = () => {
  const [profile, setProfile] = useState({});

  //react hook to manage life cycle of a Componenent
  useEffect(() => {
    fetchProfile(); //invokes fetchProfile() method when component is rendered
  }, []);

  return (
    <div>
      Open Account
      {profile.firstName}
    </div>
  );
};

export default OpenAccount;
