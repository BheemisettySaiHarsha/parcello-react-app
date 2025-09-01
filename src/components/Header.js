// components/Header.js
import { useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const userData = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  
  // Add error handling for useSelector
  let cartItems = [];
  try {
    cartItems = useSelector((store) => store.cart.items);
  } catch (error) {
    console.error("Redux store not available:", error);
    cartItems = [];
  }
  
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLoginToggle = () => {
    if (isLoggedIn) {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userName");
      window.location.reload();
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              className="h-10 w-10 rounded-lg hover:scale-105 transition-transform duration-300" 
              src={LOGO_URL} 
              alt="Parcello Logo" 
            />
            <span className="text-white font-bold text-xl hidden sm:block">Parcello</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium"
            >
              About
            </Link>
            <Link 
              to="/cart" 
              className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium relative"
            >
              Cart ({cartItems.length})
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:text-yellow-300 transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Online Status */}
            <div className="hidden sm:flex items-center space-x-2 text-white">
              <span className="text-sm font-medium">Online Status:</span>
              <span className="text-lg">
                {onlineStatus ? "🟢" : "🔴"}
              </span>
            </div>

            {/* User Info */}
            {isLoggedIn && (
              <span className="text-white text-sm hidden lg:block">
                Welcome, {localStorage.getItem("userName") || "User"}!
              </span>
            )}

            {/* Login/Logout Button */}
            <button 
              onClick={handleLoginToggle}
              className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
