import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";
import OfflinePage from "./OffilinePage";
import Shimmer from "./Shimmer";

const Body = () => {
    const {
        values,
        searchText,
        filtered,
        handleRatingChange,
        handleSearchText,
        handleSearchButton,
        getTopRatedRes,
        handleClearFilter,
        GetEachResData,
    } = useRestaurantData();
    const onlineStatus = useOnlineStatus();
    console.log({ bodyRendered: values });
    return onlineStatus ? (
        <div className="body">
            <div className="filter">
                <input type="text" value={searchText} onChange={handleSearchText}></input>
                <button className="btn-search" onClick={handleSearchButton}>
                    Search
                </button>
                <div className="btn-filter">
                    <button className="btn-filter-onRating" onClick={getTopRatedRes}>
                        Show Top Restaurant
                    </button>
                    {filtered ? (
                        <button className="btn-clear-filter" onClick={handleClearFilter}>
                            Clear
                        </button>
                    ) : null}
                </div>
                <div className="btn-sort">
                    <select
                        name="cars"
                        id="cars"
                        onChange={handleRatingChange}
                        placeholder="Select Rating"
                    >
                        <option value="best">Best</option>
                        <option value="avg">Average</option>
                    </select>
                </div>
            </div>

            {values?.length !== 0 ? (
                <div className="res-container">
                    <GetEachResData />
                </div>
            ) : (
                <div>
                    <Shimmer />
                </div>
            )}
        </div>
    ) : (
        <OfflinePage />
    );
};

export default Body;
