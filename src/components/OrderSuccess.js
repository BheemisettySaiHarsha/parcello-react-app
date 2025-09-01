// components/OrderSuccess.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    // Get order details from localStorage
    const savedOrder = localStorage.getItem("lastOrder");
    if (savedOrder) {
      setOrderDetails(JSON.parse(savedOrder));
    } else {
      // Fallback order details
      setOrderDetails({
        orderId: `ORD${Date.now()}`,
        amount: 0,
        paymentMethod: "Demo Payment",
        timestamp: new Date().toISOString(),
        items: 0
      });
    }
  }, []);

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-md w-full">
        {/* Success Animation */}
        <div className="mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-green-600 mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-600">Your payment was processed successfully</p>
        </div>

        {/* Order Details */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Details</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Order ID:</span>
              <span className="font-semibold">{orderDetails.orderId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Amount Paid:</span>
              <span className="font-semibold text-green-600">₹{orderDetails.amount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method:</span>
              <span className="font-semibold">{orderDetails.paymentMethod}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Items:</span>
              <span className="font-semibold">{orderDetails.items} items</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Delivery:</span>
              <span className="font-semibold text-blue-600">30-45 minutes</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => alert("Order tracking feature coming soon!")}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
          >
            Track Your Order
          </button>
          <Link
            to="/"
            className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300 block"
          >
            Order More Food
          </Link>
        </div>

        <div className="mt-6">
          <p className="text-xs text-gray-500">
            We'll send you updates via SMS and email
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
