import { useState } from "react";
import { logoUrl } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    // const onlineStatus = useOnlineStatus();
    const HandleClick = () => {
        setLoggedIn(!loggedIn);
    };
    const btnLabel = loggedIn ? "Log Out" : "Log In";
    return (
        <div className="flex justify-between shadow-lg bg-zinc-800 fixed top-0 w-full p-1">
            <div className="flex items-center ">
                <img className="w-20 px-1 rounded-full hover:rounded-2xl" src={logoUrl} />
                <h1 className="px-4 font-bold  text-white text-3xl hover: hover:text-black  hover:bg-cyan-100 rounded-full">Foodie Paradise</h1>
            </div>
            <div className="flex items-center text-white ">
                <ul className="flex p-4 m-4">
                    <li className="px-3 ">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-3">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-3">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="px-3">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="px-3">
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
