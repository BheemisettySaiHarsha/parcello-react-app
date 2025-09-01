// components/Login.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dummyCredentials = {
    email: "demo@parcello.com",
    password: "demo123"
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      if (formData.email === dummyCredentials.email && 
          formData.password === dummyCredentials.password) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", formData.email);
        localStorage.setItem("userName", formData.username || "Demo User");
        navigate("/");
      } else {
        setError("Invalid credentials. Use demo@parcello.com / demo123");
      }
    } else {
      if (formData.username && formData.email && formData.password) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", formData.email);
        localStorage.setItem("userName", formData.username);
        navigate("/");
      } else {
        setError("Please fill all fields");
      }
    }
  };

  const fillDemoCredentials = () => {
    setFormData({
      username: "Demo User", // Default name, user can change
      email: dummyCredentials.email,
      password: dummyCredentials.password
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {isLogin ? "Welcome Back" : "Join Parcello"}
          </h1>
          <p className="text-gray-600">
            {isLogin ? "Sign in to your account" : "Create your account"}
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username field for both login and signup */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Your Name {!isLogin && "*"}
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required={!isLogin}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
            />
            {isLogin && (
              <p className="text-xs text-gray-500 mt-1">Optional for demo login</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password *
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>

          <button 
            type="button" 
            onClick={fillDemoCredentials} 
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Use Demo Credentials
          </button>
        </form>

        {/* Toggle */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>

        {/* Demo Info */}
        <div className="mt-8 bg-gray-50 rounded-lg p-4 text-center">
          <h4 className="font-semibold text-gray-800 mb-2">Demo Credentials:</h4>
          <p className="text-sm text-gray-600 mb-1">You can change the name to anything you like!</p>
          <p className="text-sm text-gray-600 mb-1">Email: demo@parcello.com</p>
          <p className="text-sm text-gray-600">Password: demo123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
