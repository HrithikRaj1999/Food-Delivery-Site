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
        <div className="mt-[9rem]">
            <div className="utility flex items-center">
                <div className="search m-1 p-2 flex items-center">
                    <input
                        className="p-2 w-60 border border-solid rounded-full border-black bg-slate-50"
                        type="text"
                        value={searchText}
                        onChange={handleSearchText}
                    ></input>
                    <button
                        className="btn-search   p-2 mx-1 bg-gray-300  rounded-full"
                        onClick={handleSearchButton}
                    >
                        Search
                    </button>
                </div>
                <div className="btn-filter p-2">
                    <button
                        className="btn-filter-onRating  p-2 mx-1  bg-gray-300 rounded-full "
                        onClick={getTopRatedRes}
                    >
                        Show Top Restaurant
                    </button>
                    {filtered ? (
                        <button
                            className="btn-clear-filter  p-2 mx-1  bg-gray-300 rounded-full"
                            onClick={handleClearFilter}
                        >
                            Clear
                        </button>
                    ) : null}
                </div>
                <div className="btn-sort relative inline-block text-left  ">
                    <select
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        onChange={handleRatingChange}
                        value="default"
                        placeholder="Select Rating"
                    >
                        <option value="default" disabled>
                            Select Rating
                        </option>
                        <option value="best" className="text-gray-400 ">Best</option>
                        <option value="avg" className="text-gray-400 " >Average</option>
                    </select>
                </div>
            </div>
            {values?.length !== 0 ? (
                <div className="res-container px-5 flex flex-wrap">
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
