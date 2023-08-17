import { foodLink } from "../utils/constants";

const ItemList = ({ foodList }) => {
    const imgId = foodLink;
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
                            <button className="p-1 rounded-lg bg-black text-white shadow-lg">
                                Add +
                            </button>
                        </div>
                        <img src={imgId+item.card?.info.imageId} className="w-[130px] h-[130px] rounded-lg" />
                    </div>
                </div>
            ))}
        </div>
    );
};
export default ItemList;
