// E:\ReactJS\src\utils\apiService.js

// const API_BASE_URL = process.env.NODE_ENV === 'development'   ? 'http://localhost:5000'
//   : 'https://your-server-name.onrender.com'; // Update after deployment

// E:\ReactJS\src\utils\apiService.js
const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:5000'
  : 'https://parcello-server.onrender.com'; // Replace with your Render URL

export const apiService = {
  async getRestaurants(lat = '12.9351929', lng = '77.62448069999999') {
    try {
      console.log('🔄 Making API request to:', `${API_BASE_URL}/api/restaurants`);
      
      const response = await fetch(
        `${API_BASE_URL}/api/restaurants?lat=${lat}&lng=${lng}`
      );
      
      console.log('📡 Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Response error:', errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
      
      const data = await response.json();
      console.log('✅ Successfully received data');
      return data;
    } catch (error) {
      console.error('💥 Fetch error details:', {
        message: error.message,
        type: error.name,
        stack: error.stack
      });
      throw error;
    }
  },

  async getRestaurantMenu(restaurantId, lat = '12.9351929', lng = '77.62448069999999') {
    try {
      console.log('🔄 Making menu API request for restaurant:', restaurantId);
      
      const response = await fetch(
        `${API_BASE_URL}/api/menu/${restaurantId}?lat=${lat}&lng=${lng}`
      );
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('💥 Menu fetch error:', error);
      throw error;
    }
  }
};
