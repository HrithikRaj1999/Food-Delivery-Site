import { useEffect, useState } from "react";
import { MenuUrl } from "./constants";
import axios from "axios";

const useRestaurantMenu = id => {
    const [resInfo, setResInfo] = useState([]);
    const menuUrl = MenuUrl(id);
    const fetchData = async () => {
        const responseData = await axios.get(menuUrl);
        setResInfo(responseData);
    };
    const info = resInfo?.data?.data?.cards[0]?.card?.card?.info;
    const { name = "Default Name", cuisines = [], costForTwoMessage = "Unknown" } = info || {};
    const differentCategoryOfMenu =
        resInfo?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1); //exclude first option as it is not usefull
    useEffect(() => {
        fetchData();
    }, []);
    return {
        resInfo,
        info,
        differentCategoryOfMenu,
        name,
        cuisines,
        costForTwoMessage,
    };
};
export default useRestaurantMenu;
