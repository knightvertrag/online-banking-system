import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import OpenAccount from "./components/OpenAccount";
import AuthenticationService from "./service/AuthenticationService";
import Dashboard from "./components/Dashboard";
import { useEffect, useState } from "react";
import PaymentForm from "./components/PaymentForm";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});

  const fetchProfile = () => {
    // AuthenticationService.getCustomer().then((response) => {
    //   setProfile(response.data);
    // });
    setProfile({abcf:"abcf"})
  };
  
  useEffect(() => {
    if(isLoggedIn && Object.keys(profile).length==0)
        fetchProfile(); //invokes fetchProfile() method when component is rendered
  }, [isLoggedIn]);
  return (
    <Router>
      <div className="min-vh-100">
        <Header profile={profile} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <div>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/openaccount" element={<OpenAccount profile={profile}/>} />
            <Route path="/dashboard" element={<Dashboard profile={profile} fetchProfile={fetchProfile}/>} />
            <Route path="/payment" element={<PaymentForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
