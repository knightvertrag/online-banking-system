import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
      <div className="container justify-content-between">
        <div>
          <Link className="navbar-brand" to="/">
            CITIZENS BANK
          </Link>
        </div>

        <ul className="navbar-nav ml-auto d-flex flex-row">
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
        </ul>
      </div>
    </nav>
  );
};

export default Header;
