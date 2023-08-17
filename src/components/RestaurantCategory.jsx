import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
    const [showItem, setShowItem] = useState(false);
    const foodList = data?.itemCards;
    console.log(foodList);
    return (
        <div>
            <div className="w-6/12 m-auto my-7 bg-slate-50 p-4 hover:z-50 shadow-md hover:shadow-2xl font-medium">
                <div className="flex justify-between" onClick={() => setShowItem(!showItem)}>
                    <span className="font-bold text-lg">
                        {data?.title}({data?.itemCards?.length})
                    </span>
                    <span>{showItem ? "🔼" : "🔽"}</span>
                </div>
                {showItem ? <ItemList foodList={foodList} /> : null}
            </div>
        </div>
    );
};
export default RestaurantCategory;
