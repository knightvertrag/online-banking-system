import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Header.css";

const Header = ({isLoggedIn, setIsLoggedIn}) => {
  const history = useNavigate();
  const logOut = () => {
    localStorage.removeItem("custId");
                      setIsLoggedIn(false);
                      history("/")

  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top navbar-main">
      <div className="container justify-content-between">
        <div>
          <Link className="navbar-brand" to="/">
            CITIZENS BANK
          </Link>
        </div>

        <div className="btn-group">
          <ul className="navbar-nav ml-auto d-flex flex-row">
            {isLoggedIn ? (
              <>
                {/* <li className="nav-item p-2">
                  <Link className="nav-link" to="/openaccount">
                  <Button variant='light'>Open Account</Button>
                  </Link>
                </li> */}
                <li className="nav-item p-2">
                  <Link className="nav-link" to="/dashboard">
                  <Button variant='light'>Dashboard</Button>
                    
                  </Link>
                </li>
                <li className="nav-item p-2">
                <Link className="nav-link" to="/">
                  <Button variant='light' onClick={logOut}>Log Out</Button>
                  </Link>
                {/* <Button variant='light' className="nav-link"
                    onClick={logOut}>Log out</Button> */}
                  {/* <button
                    className="nav-link"
                    onClick={logOut}
                  >
                    Log out
                  </button> */}
                </li>
              </>
            ) : (
              <>
                <li className="nav-item p-2">
                  <Link className="nav-link" to="/login">
                    <Button variant='light'>Login</Button>
                    {/* Login */}
                  </Link>
                </li>
                <li className="nav-item p-2">
                  <Link className="nav-link" to="/register">
                  <Button variant='light'>Register</Button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
