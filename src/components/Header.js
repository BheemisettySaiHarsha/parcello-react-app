// components/Header.js
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const { loggedInUser, setUserName } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // Logout
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
      setUserName("Guest");
      setBtnNameReact("Login");
    } else {
      // Navigate to login (handled by Link)
    }
  };

  return (
    <div className="sticky top-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo + Text */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-4">
              <img 
                className="h-12 w-12 rounded-lg hover:scale-105 transition-transform duration-300" 
                src="https://raw.githubusercontent.com/BheemisettySaiHarsha/mlproject/main/parcello.jpg" 
                alt="Parcello Logo" 
              />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Parcello
                </h1>
                <p className="text-xs text-gray-500">Food Delivery</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              Contact
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-6">
            <div className="text-sm text-gray-600">
              Welcome, <span className="font-semibold text-blue-600">{loggedInUser}</span>!
            </div>
            
            <Link to="/cart" className="relative">
              <div className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300">
                <span className="text-2xl">🛒</span>
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </Link>

            {isLoggedIn ? (
              <button
                onClick={handleAuthClick}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
              >
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
