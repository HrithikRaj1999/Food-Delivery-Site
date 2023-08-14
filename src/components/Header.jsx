import { useState } from "react";
import { logoUrl } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const HandleClick = () => {
    setLoggedIn(!loggedIn);
  };
  const btnLabel = loggedIn ? "Log Out" : "Log In";
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logoUrl} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login-button login-button-gradient login-button-rounded login-button-shadow"
            onClick={HandleClick}
          >
            {btnLabel}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
