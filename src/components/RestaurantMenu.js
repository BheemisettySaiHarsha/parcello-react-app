import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantHeader from "./RestaurantHeader";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // State to track the single expanded category
  const [showIndex, setShowIndex] = useState(null);

  const { restaurant, menuCategories, loading, error } = useRestaurantMenu(resId);

  // Toggle a single category
  const toggleCategory = (categoryIndex) => {
    if (showIndex === categoryIndex) {
      setShowIndex(null); // close if clicked again
    } else {
      setShowIndex(categoryIndex); // open this one
    }
  };

  if (loading) return <Shimmer />;
  if (error) return <div className="text-red-500 text-center p-4">{error}</div>;
  if (!restaurant) return <div className="text-gray-500 text-center p-4">Restaurant not found</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white">
      {/* Restaurant Header Component */}
      <RestaurantHeader restaurant={restaurant} />

      {/* Menu Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Menu</h2>

        {menuCategories.length > 0 ? (
          <div className="space-y-4">
            {menuCategories.map((category, categoryIndex) => (
              <RestaurantCategory
                key={category?.card?.card?.categoryId || categoryIndex}
                data={category?.card?.card}
                isExpanded={showIndex === categoryIndex}
                onToggle={() => toggleCategory(categoryIndex)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🍽️</div>
            <p className="text-gray-500 text-lg">No menu items available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
