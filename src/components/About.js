// components/About.js
import { LOGO_URL } from "../utils/constants";
const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Parcello</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Your favorite food, delivered fresh and fast
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Our Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Parcello was born from a simple idea: great food should be accessible 
              to everyone, everywhere. Founded in 2023, we've grown from a small 
              startup to a leading food delivery platform, connecting food lovers 
              with their favorite restaurants.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We believe that food brings people together, and our mission is to 
              make that connection as seamless as possible. Whether you're craving 
              comfort food or exploring new cuisines, Parcello is here to deliver 
              happiness to your doorstep.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center">
  <img src={LOGO_URL} alt="Parcello Logo" className="w-40 h-40 object-contain" />
</div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Why Choose Parcello?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Lightning Fast</h3>
              <p className="text-gray-600">Average delivery time of 30 minutes or less</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Assured</h3>
              <p className="text-gray-600">Every restaurant is verified and regularly inspected</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">💯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Best Prices</h3>
              <p className="text-gray-600">Competitive pricing with regular discounts and offers</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">🌟</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Top Rated</h3>
              <p className="text-gray-600">Thousands of satisfied customers and 5-star reviews</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600 font-semibold">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-gray-600 font-semibold">Partner Restaurants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600 font-semibold">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">1M+</div>
              <div className="text-gray-600 font-semibold">Orders Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
