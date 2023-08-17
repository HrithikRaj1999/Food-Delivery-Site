import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { id } = useParams();
    const { resInfo, differentCategoryOfMenu} =
        useRestaurantMenu(id);

    const foodCategoryAndItsFoodList = differentCategoryOfMenu?.filter(
        categories =>
            categories?.card?.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log("fc", foodCategoryAndItsFoodList);
    return resInfo?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="menu mt-60 ">
            {foodCategoryAndItsFoodList.map((categories, index) => (
                <RestaurantCategory key={index} data={categories?.card.card} />
            ))}
        </div>
    );
};
export default RestaurantMenu;
