// utils/useRestaurantMenu.js
import { useState, useEffect } from "react";
import { apiService } from "./apiService";

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuCategories, setMenuCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resId) return;
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      setError(null);

      console.log('Fetching menu from server for restaurant:', resId);
      const json = await apiService.getRestaurantMenu(resId);

      // Extract restaurant info
      const restaurantInfo = json?.data?.cards?.[2]?.card?.card?.info;
      setRestaurant(restaurantInfo);

      // Extract menu categories
      const menuCards =
        json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      const itemCategories = menuCards.filter(
        (card) =>
          card?.card?.card?.itemCards &&
          card?.card?.card?.itemCards?.length > 0
      );

      setMenuCategories(itemCategories);
    } catch (err) {
      console.error("Error fetching menu:", err);
      setError("Failed to load restaurant menu.");
    } finally {
      setLoading(false);
    }
  };

  return { restaurant, menuCategories, loading, error };
};

export default useRestaurantMenu;
