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
import ViewProfile from "./components/ViewProfile";
import EditProfile from "./components/EditProfile";
import Admin from "./components/Admin/Admin";
import AdminDelete from "./components/Admin/AdminDelete";
import AdminDash from "./components/Admin/AdminDash";
import DashboardHome from "./components/DashboardHome";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});

  const fetchProfile = () => {
    AuthenticationService.getCustomer(localStorage.getItem("custId")).then((response) => {
      console.log(response);
      setProfile(response);
    });
  };
  
  useEffect(() => {
    if(isLoggedIn)
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
            <Route path="/dashboard" element={<Dashboard  fetchProfile={fetchProfile} isLoggedIn={isLoggedIn} profile={profile} />} />
            <Route path="/dashboardhome" element={<DashboardHome profile={profile}/>}></Route>
            <Route path="/payment" element={<PaymentForm />} />
            <Route path="viewProfile/:id" element={<ViewProfile profile={profile}/>} />
            <Route path="editProfile/:id" element={<EditProfile profile={profile}/>} />
            <Route path="/admin" element= {<Admin setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/adminDashboard" element={<AdminDash setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/deactiveAccount" element={<AdminDelete/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
