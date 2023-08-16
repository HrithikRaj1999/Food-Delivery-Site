import { foodLink } from "../utils/constants";

const RestaurantCard = ({ data }) => {
    const { name, cuisines, avgRating, avgRatingString, cloudinaryImageId } = data;
    const ratingToShow = avgRating || avgRatingString;  //in data there is sometime avgRatingSting string instead of avgRating
    //destructuring on the fly

    const imgLink = `${foodLink + cloudinaryImageId}`
    return (
        <div className="res-card m-4 p-4 w-[200px] h-[380px] rounded-lg  bg-slate-100 hover:border-solid hover:border-2  hover:border-black hover:z-50">
            <img
                className="res-logo w-[200px] h-[150px] rounded-lg"
                src={imgLink}
            />
            <div className="res-info p-2 w-[200px] ">
                <h3 className="font-bold font-sarif py-4 text-lg">{name}</h3>
                <p>{cuisines.join(', ')}</p>
                <h4>{ratingToShow}</h4>
            </div>

        </div>
    );
};

export default RestaurantCard;