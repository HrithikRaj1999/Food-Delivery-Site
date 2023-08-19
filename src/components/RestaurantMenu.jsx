import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useSelector } from "react-redux";

const RestaurantMenu = () => {
    const { id } = useParams();
    const [showIndex, setShowIndex] = useState(-1);
    const { resInfo, differentCategoryOfMenu } = useRestaurantMenu(id);
    const foodCategoryAndItsFoodList = differentCategoryOfMenu?.filter(
        categories =>
            categories?.card?.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    const totalCost = useSelector(store => store.cart.totalCost);
    console.log(totalCost);

    return resInfo?.length === 0 ? (
        <Shimmer />
    ) : (
        <div>
            <div className="menu mt-30 ">
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
            <div className="sticky bottom-10 right-12  w-2/12 rounded-lg  flex text-xl text-ellipsis m-3 text-right bg-grey-300 p-2 shadow-lg">
                Your Total Bill: ₨.{totalCost}.00
            </div>
        </div>
    );
};
export default RestaurantMenu;
