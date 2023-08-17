import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { id } = useParams();
    const [showIndex, setShowIndex] = useState(-1);
    const { resInfo, differentCategoryOfMenu } = useRestaurantMenu(id);
    const foodCategoryAndItsFoodList = differentCategoryOfMenu?.filter(
        categories =>
            categories?.card?.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    return resInfo?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="menu mt-60 ">
            {foodCategoryAndItsFoodList.map((categories, index) => (
                //controlled Component
                //state of res category is controlled in this resmenu component
                //this is known as lifting a state. (state lifting)
                <RestaurantCategory
                    key={index}
                    index={index}
                    showItem={index === showIndex}
                    setShowIndex={setShowIndex}
                    data={categories?.card.card}
                />
            ))}
        </div>
    );
};
export default RestaurantMenu;
