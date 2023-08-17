import { foodLink } from "../utils/constants";

export const RestaurantCard = ({ data }) => {
    console.log({ data });
    const { name, cuisines, avgRating, avgRatingString, cloudinaryImageId } = data;
    const ratingToShow = avgRating || avgRatingString; //in data there is sometime avgRatingSting string instead of avgRating
    //destructuring on the fly

    const imgLink = `${foodLink + cloudinaryImageId}`;
    return (
        <div className="res-card m-4 p-4 w-[200px] h-[380px] rounded-lg shadow-md flex flex-col justify-between bg-white hover:shadow-2xl  transition duration-200">
            <img
                className="res-logo w-[200px] h-[150px] rounded-lg object-cover"
                src={imgLink}
                alt={`${name} Logo`}
            />
            <div className="res-info p-4">
                <h3 className="font-semibold text-xl mb-2">{name}</h3>
                <p className="text-gray-600 mb-2">{cuisines.join(", ")}</p>
                <div className="flex items-center">
                    <span className="text-green-500 font-semibold mr-1">Rating:</span>
                    <span>{ratingToShow}</span>
                </div>
            </div>
        </div>
    );
};
export const RestaurantCardWithMessage = RestaurantCard => {
    return props => {
        return (
            <div>
                <label className="absolute p-1 bg-black text-white font-sansarif m-1 rounded-lg">
                    {props.message}
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};
