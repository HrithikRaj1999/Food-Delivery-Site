import { useContext, useState } from "react";
import { logoUrl } from "../utils/constants";
import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../context/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    // const onlineStatus = useOnlineStatus();
    const HandleClick = () => {
        setLoggedIn(!loggedIn);
    };
    const { LoggedInUser } = useContext(UserContext);
    const btnLabel = loggedIn ? `Log Out` : "Log In";

    // subscribing to the appStore using a Selector or get data
    const cartItems = useSelector(store => store.cart.itemsObj); //getter
    const itemId = useSelector(store => store.cart.itemsId);
    console.log(
        "cartItems",
        cartItems.map(i => i.card.info.name),
        "ids",
        itemId
    );
    return (
        <div className="flex justify-between shadow-lg bg-zinc-800 fixed top-0 w-full p-1">
            <div className="flex items-center ">
                <img className="w-20 px-1 rounded-full hover:rounded-2xl" src={logoUrl} />
                <a href="/">
                    <h1 className="px-4 font-bold  text-white text-2xl hover: hover:text-3xl">
                        Foodie Paradise
                    </h1>
                </a>
            </div>
            <div className="flex items-center text-white ">
                <ul className="flex p-4 mx-4 text-xl ">
                    <li className="px-3 hover:text-blue-300 hover:font-bold hover:text-2xl">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-3 hover:text-blue-300 hover:font-bold hover:text-2xl">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-3 hover:text-blue-300 hover:font-bold hover:text-2xl">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li
                        className="px-3 hover:text-blue-300 hover:font-bold hover:text-2xl"
                        onMouseOver={() => console.log(cartItems)}
                    >
                        <Link to="/cart">
                            🛒<span>({cartItems.length}) Items</span>
                        </Link>
                    </li>
                    <li className="px-3 hover:text-blue-300 hover:font-bold hover:text-2xl">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <button
                        className="px-3 hover:text-blue-300 hover:font-bold hover:text-2xl"
                        onClick={HandleClick}
                    >
                        {btnLabel}
                    </button>
                    {loggedIn ? <li>{LoggedInUser}</li> : null}
                </ul>
            </div>
        </div>
    );
};

export default Header;
