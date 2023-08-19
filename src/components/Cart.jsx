import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemListOfCart from "./ItemListOfCart";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.itemsObj);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    const totalCost = useSelector(store => store.cart.totalCost);
    console.log(totalCost);
    console.log(cartItems);
    return (
        <div>
            {cartItems.length !== 0 ? (
                <div className="flex m-1 p-2 justify-between w-2/12 items-center">
                    <button
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        onClick={handleClearCart}
                    >
                        clear cart
                    </button>
                </div>
            ) : (
                <Link to="/">
                    <div className="flex justify-center">
                        <div className="text-lg font-bold bg-black w-5/12 flex justify-center text-white p-2 m-3 rounded-full">
                            Add Some Item to the Cart
                        </div>
                    </div>
                </Link>
            )}

            <ItemListOfCart />
            {cartItems.length !== 0 ? (
                <div className="sticky bottom-0 w-53 rounded-lg w-3/12 flex text-2xl text-ellipsis m-4 text-right bg-green-100 p-2 shadow-2xl">
                    Your Total Bill: ₨.{totalCost}.00
                </div>
            ) : null}
        </div>
    );
};
export default Cart;
