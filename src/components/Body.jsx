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
    return onlineStatus ? (
        <div>
            <div className="utility flex items-center">
                <div className="search m-1 p-2 flex items-center">
                    <input
                        className="p-2 mx-2 w-60 border border-solid rounded-full border-black bg-slate-50"
                        type="text"
                        value={searchText}
                        onChange={handleSearchText}
                    ></input>
                    <button
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        onClick={handleSearchButton}
                    >
                        Search
                    </button>
                </div>
                <div className="btn-filter m-1 p-2 flex items-center">
                    <button
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 "
                        onClick={getTopRatedRes}
                    >
                        Show Top Restaurant
                    </button>
                </div>
                <div className="btn-filter m-1 p-2 flex items-center">
                    {filtered ? (
                        <button
                            className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            onClick={handleClearFilter}
                        >
                            Clear
                        </button>
                    ) : null}
                </div>

                <div className="btn-filter m-1 p-2 flex items-center">
                    <select
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        onChange={handleRatingChange}
                        value="default"
                        placeholder="Select Rating"
                    >
                        <option value="default" disabled>
                            Select Rating
                        </option>
                        <option value="best" className="text-gray-400 ">
                            Best
                        </option>
                        <option value="avg" className="text-gray-400 ">
                            Average
                        </option>
                    </select>
                </div>
            </div>
            {values?.length !== 0 ? (
                <div className="flex flex-wrap justify-center p-5">
                    <GetEachResData />
                </div>
            ) : (
                <div className="flex flex-wrap justify-center p-5">
                    <Shimmer />
                </div>
            )}
        </div>
    ) : (
        <OfflinePage />
    );
};

export default Body;
