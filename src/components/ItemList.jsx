import { useDispatch, useSelector } from "react-redux";
import { foodLink } from "../utils/constants";
import { addItems, getTotalCostOfAddedItem, removeItems } from "../utils/cartSlice";

const ItemList = ({ foodList }) => {
    const imgId = foodLink;
    const dispatch = useDispatch();
    // subscribing to the appStore using a Selector or get data
    const cartItems = useSelector(store => store.cart.itemsObj); //getter

    const handleAddItem = item => {
        //dispatch an action or perform an action this is setter
        dispatch(addItems(item)); //this will go to reducer function action in payload
    };
    const handleRemoveItem = item => {
        dispatch(removeItems(item));
    };
    const totalCost = useSelector(store => store.cart.totalCost);

    return (
        <div>
            {foodList?.map(item => (
                <div
                    key={item.card.info.id}
                    className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                    <div className="w-9/12">
                        <div className="py-2">
                            <span className="text-lg font-bold">{item.card.info.name}</span>
                            <span>
                                - ₹
                                {item.card.info.price
                                    ? item.card.info.price / 100
                                    : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            {cartItems.some(
                                cartItem => cartItem.card.info.id === item.card.info.id
                            ) ? (
                                <div className="bg-black rounded-lg">
                                    <button
                                        className="p-1 rounded-lg bg-black text-white shadow-lg"
                                        onClick={() => handleAddItem(item)}
                                    >
                                        +
                                    </button>
                                    <span className="text-white  bg-black">
                                        {
                                            cartItems.filter(
                                                cartItem =>
                                                    cartItem.card.info.id === item.card.info.id
                                            ).length
                                        }
                                    </span>

                                    <button
                                        className="p-1 rounded-lg bg-black text-white shadow-lg"
                                        onClick={() => handleRemoveItem(item)}
                                    >
                                        -
                                    </button>
                                </div>
                            ) : (
                                <button
                                    className="p-1 rounded-lg bg-black text-white shadow-lg"
                                    onClick={() => handleAddItem(item)}
                                >
                                    Add +
                                </button>
                            )}
                        </div>
                        <img
                            src={imgId + item.card?.info?.imageId}
                            className="w-[130px] h-[130px] rounded-lg"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ItemList;
