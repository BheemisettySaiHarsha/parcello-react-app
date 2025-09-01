const RestaurantHeader = ({ restaurant }) => {
  return (
    <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-yellow-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-3">{restaurant.name}</h1>
      <div className="space-y-2">
        <p className="text-gray-600 text-lg">{restaurant.cuisines?.join(", ")}</p>
        <div className="flex items-center space-x-4 text-sm text-gray-700">
          <span className="flex items-center bg-green-500 text-white px-2 py-1 rounded">
            ⭐ {restaurant.avgRating}
          </span>
          <span className="font-medium">{restaurant.sla?.deliveryTime} mins</span>
          <span className="font-medium">₹{restaurant.costForTwo / 100} for two</span>
        </div>
        <p className="text-gray-600">
          {restaurant.areaName}, {restaurant.city}
        </p>
      </div>
    </div>
  );
};

export default RestaurantHeader;
