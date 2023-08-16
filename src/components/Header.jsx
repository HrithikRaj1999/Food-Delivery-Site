import { useState } from "react";
import { logoUrl } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const onlineStatus = useOnlineStatus();
    const HandleClick = () => {
        setLoggedIn(!loggedIn);
    };
    const btnLabel = loggedIn ? "Log Out" : "Log In";
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logoUrl} />
                <h1 className="logo-label">Foodie Paradise</h1>
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
                    <li>
                        <Link to="/grocery">Grocery</Link>
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
