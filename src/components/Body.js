// components/Body.js
import { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { apiService } from "../utils/apiService";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);
const fetchData = async () => {
  try {
    console.log('Fetching restaurants from server...');
    const json = await apiService.getRestaurants();
    
    const cards = json?.data?.cards;
    const restaurantCard = cards?.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
    );

    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (Array.isArray(restaurants)) {
      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } else {
      console.warn("No restaurants found in API response");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
  const filterTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res?.info?.avgRating > 4.3
    );
    setFilteredRestaurants(filteredList);
  };

  const onlineStatus = useOnlineStatus();
  
  if (onlineStatus === false) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-md">
          <div className="text-6xl mb-6">📶</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">You're Offline</h1>
          <p className="text-gray-600">Please check your internet connection</p>
        </div>
      </div>
    );
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  if (searchText && filteredRestaurants.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Search Bar */}
        <div className="bg-white shadow-sm border-b sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="flex bg-gray-100 rounded-full px-4 py-2 border-2 border-gray-200 focus-within:border-blue-500 transition-colors duration-300">
                <input
                  type="text"
                  className="bg-transparent outline-none flex-1 px-4 py-2 min-w-64"
                  placeholder="Search restaurants..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                  onClick={() => {
                    const searchedRestaurants = listOfRestaurants.filter((res) =>
                      res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurants(searchedRestaurants);
                  }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* No Results */}
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <div className="text-6xl mb-6">🔍</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">No Results Found</h2>
            <p className="text-gray-600">Try searching with different keywords</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search and Filter Section */}
      <div className="bg-white shadow-sm border-b sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            {/* Search Bar */}
            <div className="flex bg-gray-100 rounded-full px-4 py-2 border-2 border-gray-200 focus-within:border-blue-500 transition-colors duration-300">
              <input
                type="text"
                className="bg-transparent outline-none flex-1 px-4 py-2 min-w-64"
                placeholder="Search restaurants..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                onClick={() => {
                  const searchedRestaurants = listOfRestaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurants(searchedRestaurants);
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Search
              </button>
            </div>

            {/* Filter Button */}
            <button 
              className="bg-white border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              onClick={filterTopRated}
            >
              Top Rated Restaurants
            </button>
          </div>
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.isArray(listOfRestaurants) &&
            filteredRestaurants.map((restaurant) => (
              <Link 
                key={restaurant?.info?.id} 
                to={`/restaurant/${restaurant?.info?.id}`}
                className="block"
              >
                {restaurant.info.sla.deliveryTime < 20 ? (
                  <RestaurantCardPromoted resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
