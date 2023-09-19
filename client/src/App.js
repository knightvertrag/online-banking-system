import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import OpenAccount from "./components/OpenAccount";

function App() {
  return (
    <Router>
      <div className="min-vh-100">
        <Header />
        <div>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/openaccount" element={<OpenAccount />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
