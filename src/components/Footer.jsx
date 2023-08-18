import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Footer = () => {
    const { place } = useContext(UserContext);
    return <div className="p-2  bg-black border-gray-200 border-2 text-left text-white flex justify-between">{place}</div>;
};

export default Footer;
