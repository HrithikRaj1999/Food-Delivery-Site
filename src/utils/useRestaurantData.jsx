import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
const useRestaurantData = () => {
    const [initialData, setInitialData] = useState([]); //to get only initial data and we do not perform on this
    const [values, setValues] = useState([]); //to perform operation and to render this
    const [searchText, setSearchText] = useState("");
    const [searchData, setSearchData] = useState([]);
    const filtered = values?.length !== initialData?.length;

    const getApiData = async () => {
        const responseData = await axios.get(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.545512447222734&lng=73.792013078928&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const restaurants =
            responseData?.data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants;
        setInitialData(restaurants);
        setValues(restaurants);
    };
    const handleClearFilter = () => {
        setValues(initialData);
    };

    const handleSearchButton = () => {
        const searchResults = values?.filter(res => {
            const cuisines = res?.info?.cuisines.map(item => item.toLowerCase());
            const isCuisineExist = cuisines
                .map(c => c.toLowerCase().includes(searchText.toLowerCase()))
                .includes(true);

            return (
                isCuisineExist || res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
        });
        console.log({ searchResults });
        setValues(searchResults?.length === 0 ? values : searchResults);
        setSearchData(searchResults?.length === 0 ? values : searchResults);
    };
    const handleSearchText = e => setSearchText(e.target.value);
    const getTopRatedRes = () => {
        const filterDataFromInitialData = values?.filter(res => {
            const rating = res.info.avgRating || res.info.avgRatingString;
            return rating >= 4.5;
        });
        setValues(filterDataFromInitialData);
    };
    const handleRatingChange = e => {
        const tempData = searchData.length > 0 ? [...searchData] : [...initialData];
        const newData = tempData
            .filter(res => {
                if (e.target.value === "best") return res.info.avgRating > 4;
                else return res.info.avgRating > 3 && res.info.avgRating < 4;
            })
            .sort((a, b) => {
                b.info.avgRating - a.info.avgRating;
            });
        setValues(newData);
    };
    const GetEachResData = () => {
        return values?.map((data, indx) => {
            console.log({ data });
            return (
                <Link className="res-link" to={`/restaurant/${data.info.id}`}>
                    <RestaurantCard key={data.info.id} data={data.info} />
                </Link>
            );
        });
    };

    useEffect(() => {
        getApiData();
    }, []);
    return {
        values,
        searchText,
        filtered,
        handleRatingChange,
        handleSearchText,
        handleSearchButton,
        getTopRatedRes,
        handleClearFilter,
        GetEachResData,
    };
};
export default useRestaurantData;
