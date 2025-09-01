// components/Cart.js
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem, addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom"; // Add useNavigate import

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Add this line

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(addItem(item));
  };

  // Add this function to handle checkout navigation
  const handleCheckout = () => {
    console.log("Navigating to checkout..."); // Debug log
    navigate("/checkout");
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item?.card?.info?.price || item?.card?.info?.defaultPrice || 0;
      return total + (price / 100);
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const deliveryFee = subtotal > 0 ? 40 : 0;
  const tax = subtotal * 0.05;
  const total = subtotal + deliveryFee + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-md w-full">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some delicious items from our restaurants!</p>
          <Link 
            to="/" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg inline-block"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 className="text-3xl font-bold">Your Cart</h1>
              <button 
                onClick={handleClearCart}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Clear All Items
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item, index) => {
                  const itemInfo = item?.card?.info;
                  const price = itemInfo?.price || itemInfo?.defaultPrice || 0;
                  
                  return (
                    <div 
                      key={`${itemInfo?.id}-${index}`} 
                      className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-200"
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        {itemInfo?.imageId && (
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={CDN_URL + itemInfo.imageId} 
                              alt={itemInfo.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-gray-800 truncate">
                            {itemInfo?.name}
                          </h3>
                          <p className="text-xl font-bold text-blue-600 mt-1">
                            ₹{(price / 100).toFixed(2)}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => handleIncreaseQuantity(item)}
                            className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                          >
                            +
                          </button>
                          <button 
                            onClick={() => handleRemoveItem(index)}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Order Summary */}
              <div className="mt-8 lg:mt-0">
                <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Subtotal ({cartItems.length} items)</span>
                      <span className="font-semibold">₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Delivery Fee</span>
                      <span className="font-semibold">₹{deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Tax (5%)</span>
                      <span className="font-semibold">₹{tax.toFixed(2)}</span>
                    </div>
                    
                    <hr className="border-gray-300"/>
                    
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span className="text-blue-600">₹{total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Updated Checkout Button */}
                  <button 
                    onClick={handleCheckout}
                    className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
