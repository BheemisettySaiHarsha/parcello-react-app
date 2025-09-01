// components/Company.js
const Company = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Company</h1>
          <p className="text-xl opacity-90">Building the future of food delivery, one order at a time</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Mission & Vision */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To connect people with great food and memorable experiences through innovative 
                technology, reliable service, and a commitment to supporting local restaurants 
                and communities.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-purple-600 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the world's most trusted food delivery platform, making delicious food 
                accessible to everyone while empowering restaurants to grow their business 
                and reach new customers.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for perfection in every order and interaction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Community</h3>
              <p className="text-gray-600">Supporting local businesses and bringing people together</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">Constantly improving through technology and creativity</p>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Company Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Founded</h3>
              <p className="text-gray-600 mb-6">2023</p>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Headquarters</h3>
              <p className="text-gray-600 mb-6">Bangalore, India</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Industry</h3>
              <p className="text-gray-600 mb-6">Food Delivery & Technology</p>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Employees</h3>
              <p className="text-gray-600 mb-6">50+ Passionate Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
