import { foodLink } from "../utils/constants";

const RestaurantCard = ({ data }) => {
    const { name, cuisines, avgRating, avgRatingString, cloudinaryImageId } = data;
    const ratingToShow = avgRating || avgRatingString;  //in data there is sometime avgRatingSting string instead of avgRating
    //destructuring on the fly

    const imgLink = `${foodLink + cloudinaryImageId}`
    return (
        <div className="res-card">
            <img
                className="res-logo"
                src={imgLink}
            />
            <div className="res-info">
                <h3>{name}</h3>
                <p>{cuisines.join(', ')}</p>
                <h4>{ratingToShow}</h4>
            </div>

        </div>
    );
};

export default RestaurantCard;