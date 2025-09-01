// components/Checkout.js
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";

const Checkout = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("mock"); // mock or razorpay
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Load user details from localStorage
  useEffect(() => {
    const userName = localStorage.getItem("userName") || "";
    const userEmail = localStorage.getItem("userEmail") || "";
    setUserDetails(prev => ({
      ...prev,
      name: userName,
      email: userEmail
    }));
  }, []);

  // Calculate totals
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

  // Mock Payment Function
  const handleMockPayment = () => {
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      const success = Math.random() > 0.1; // 90% success rate for demo
      
      if (success) {
        // Save order details
        const orderDetails = {
          orderId: `ORD${Date.now()}`,
          amount: total,
          paymentMethod: "Demo Payment",
          timestamp: new Date().toISOString(),
          items: cartItems.length,
          userDetails
        };
        
        localStorage.setItem("lastOrder", JSON.stringify(orderDetails));
        dispatch(clearCart());
        navigate("/order-success");
      } else {
        alert("Payment failed! Please try again.");
      }
      setLoading(false);
    }, 2000); // 2 second delay to simulate processing
  };

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Razorpay Payment Function
  const handleRazorpayPayment = async () => {
    setLoading(true);
    
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load. Using demo payment instead.");
      handleMockPayment();
      return;
    }

    // Create order with proper error handling
    const options = {
      key: "rzp_test_MoHj8KDS2wfonN", // Replace with your actual test key
      amount: Math.round(total * 100), // Amount in paise
      currency: "INR",
      name: "Parcello Food Delivery",
      description: `Food Order - ${cartItems.length} items`,
      image: "https://raw.githubusercontent.com/BheemisettySaiHarsha/mlproject/main/parcello.jpg",
      handler: function (response) {
        console.log("Payment Success:", response);
        
        // Save order details
        const orderDetails = {
          orderId: response.razorpay_order_id || `ORD${Date.now()}`,
          paymentId: response.razorpay_payment_id,
          amount: total,
          paymentMethod: "Razorpay",
          timestamp: new Date().toISOString(),
          items: cartItems.length,
          userDetails
        };
        
        localStorage.setItem("lastOrder", JSON.stringify(orderDetails));
        dispatch(clearCart());
        navigate("/order-success");
      },
      prefill: {
        name: userDetails.name,
        email: userDetails.email,
        contact: userDetails.phone,
      },
      notes: {
        address: userDetails.address,
      },
      theme: {
        color: "#667eea",
      },
      modal: {
        ondismiss: function() {
          setLoading(false);
          console.log("Payment modal closed");
        }
      },
      // Handle payment failure
      error: function(error) {
        console.error("Payment Error:", error);
        alert("Payment failed! Using demo payment instead.");
        setLoading(false);
        handleMockPayment();
      }
    };

    try {
      const paymentObject = new window.Razorpay(options);
      paymentObject.on('payment.failed', function (response) {
        console.error("Payment failed:", response.error);
        alert("Payment failed! Using demo payment instead.");
        setLoading(false);
        handleMockPayment();
      });
      paymentObject.open();
    } catch (error) {
      console.error("Razorpay error:", error);
      alert("Razorpay error! Using demo payment instead.");
      handleMockPayment();
    }
    
    setLoading(false);
  };

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = () => {
    if (!userDetails.name || !userDetails.email || !userDetails.phone || !userDetails.address) {
      alert("Please fill all required fields");
      return;
    }

    if (paymentMethod === "mock") {
      handleMockPayment();
    } else {
      handleRazorpayPayment();
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-md">
          <div className="text-6xl mb-6">🛒</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Add some items to proceed to checkout</p>
          <button 
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            Continue Shopping
          </button>
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
            <h1 className="text-3xl font-bold">Checkout</h1>
            <p className="opacity-90 mt-2">Complete your order</p>
          </div>

          <div className="p-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12">
              {/* Customer Details Form */}
              <div className="mb-8 lg:mb-0">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Delivery Details</h2>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={userDetails.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={userDetails.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={userDetails.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Delivery Address *
                    </label>
                    <textarea
                      name="address"
                      value={userDetails.address}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Enter your complete delivery address"
                      required
                    />
                  </div>
                </form>

                {/* Payment Method Selection */}
                <div className="mt-8 bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">Choose Payment Method</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="mock"
                        checked={paymentMethod === "mock"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="font-medium text-blue-700">Demo Payment (Recommended)</span>
                      <span className="text-green-600 text-sm">✅ Always works</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="razorpay"
                        checked={paymentMethod === "razorpay"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span className="font-medium text-blue-700">Razorpay (Real Integration)</span>
                      <span className="text-yellow-600 text-sm">⚠️ May fail in demo</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <div className="bg-gray-50 rounded-xl p-6 sticky top-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>
                  
                  {/* Cart Items */}
                  <div className="space-y-3 mb-6 max-h-60 overflow-y-auto">
                    {cartItems.map((item, index) => {
                      const itemInfo = item?.card?.info;
                      const price = itemInfo?.price || itemInfo?.defaultPrice || 0;
                      return (
                        <div key={`${itemInfo?.id}-${index}`} className="flex justify-between items-center py-2">
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-gray-800 truncate">
                              {itemInfo?.name}
                            </h4>
                            <p className="text-xs text-gray-500">₹{(price / 100).toFixed(2)}</p>
                          </div>
                          <div className="text-sm font-semibold text-gray-800">
                            1x
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Price Breakdown */}
                  <div className="space-y-3 border-t border-gray-300 pt-4">
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
                    
                    <div className="flex justify-between items-center text-lg font-bold border-t border-gray-300 pt-3">
                      <span>Total Amount</span>
                      <span className="text-blue-600">₹{total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Payment Button */}
                  <button 
                    onClick={handlePayment}
                    disabled={loading}
                    className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      `Pay ₹${total.toFixed(2)} ${paymentMethod === "mock" ? "(Demo)" : ""}`
                    )}
                  </button>

                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                      {paymentMethod === "mock" 
                        ? "Demo payment - No real money charged" 
                        : "Secured by Razorpay"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
