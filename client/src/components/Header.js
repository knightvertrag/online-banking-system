import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({isLoggedIn, setIsLoggedIn}) => {
  const history = useNavigate();
  const logOut = () => {
    localStorage.removeItem("custId");
                      setIsLoggedIn(false);
                      history("/")

  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
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
                <li className="nav-item p-2">
                  <Link className="nav-link" to="/openaccount">
                    Open account
                  </Link>
                </li>
                <li className="nav-item p-2">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item p-2">
                  <button
                    className="nav-link"
                    onClick={logOut}
                  >
                    Log out
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item p-2">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item p-2">
                  <Link className="nav-link" to="/register">
                    Register
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
