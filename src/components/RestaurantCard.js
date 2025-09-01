// components/RestaurantCard.js
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const info = resData.info;
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    sla,
    deliveryTime,
  } = info;
 
  
  const time = sla?.deliveryTime || deliveryTime || "NA";

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer h-80 flex flex-col">
      <div className="h-44 overflow-hidden relative">
        <img
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          src={CDN_URL + cloudinaryImageId}
          alt="Restaurant"
        />
      </div>
      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">
            {name}
          </h3>
          <h4 className="text-sm text-gray-600 mb-3 truncate">
            {Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}
          </h4>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <span className="bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center">
            ⭐ {avgRating}
          </span>
          <span className="text-blue-600 font-semibold text-sm">
            {time} mins
          </span>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10 uppercase tracking-wide">
          Fast Delivery
        </div>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
