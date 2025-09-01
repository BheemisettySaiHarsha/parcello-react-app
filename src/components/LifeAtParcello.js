// components/LifeAtParcello.js
const LifeAtParcello = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Life at Parcello</h1>
          <p className="text-xl opacity-90">Join our team and be part of the food delivery revolution</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Culture */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Culture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovation First</h3>
              <p className="text-gray-600">
                We encourage creativity and out-of-the-box thinking. Every team member's ideas are valued and heard.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Collaborative Spirit</h3>
              <p className="text-gray-600">
                We work together as one team, supporting each other and celebrating collective achievements.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Fast-Paced Growth</h3>
              <p className="text-gray-600">
                Join us in our rapid journey of growth and be part of building something extraordinary.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Perks & Benefits</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Competitive salary and equity options
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Comprehensive health insurance
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Free meals and snacks
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Flexible working hours
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Work from home options
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Learning and development budget
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Growth Opportunities</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">★</span>
                  Career advancement programs
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">★</span>
                  Mentorship from industry experts
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">★</span>
                  Conference and workshop attendance
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">★</span>
                  Cross-functional project opportunities
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">★</span>
                  Leadership development programs
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">★</span>
                  Innovation time for personal projects
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team - Only Sai Harsha */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Founder</h2>
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-sm">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">SH</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Sai Harsha</h3>
              <p className="text-blue-600 font-semibold mb-2">Developer & CEO</p>
              <p className="text-gray-500 mb-4">Founder and Lead Developer</p>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Passionate full-stack developer with a vision to revolutionize food delivery through 
                  innovative technology and exceptional user experiences.
                </p>
              </div>
              <div className="mt-4 flex justify-center space-x-3">
                <div className="bg-blue-100 rounded-full p-2">
                  <span className="text-blue-600 text-sm">💻 React</span>
                </div>
                <div className="bg-purple-100 rounded-full p-2">
                  <span className="text-purple-600 text-sm">🚀 Innovation</span>
                </div>
                <div className="bg-green-100 rounded-full p-2">
                  <span className="text-green-600 text-sm">📈 Leadership</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional info about the founder */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">About Our Founder</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-semibold text-gray-800 mb-2">Vision</h4>
                <p className="text-gray-600 text-sm">
                  Building a seamless food delivery platform that connects people with great food experiences
                </p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-3">💡</div>
                <h4 className="font-semibold text-gray-800 mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">
                  Constantly exploring new technologies to enhance user experience and operational efficiency
                </p>
              </div>
              <div className="p-4">
                <div className="text-3xl mb-3">🌟</div>
                <h4 className="font-semibold text-gray-800 mb-2">Mission</h4>
                <p className="text-gray-600 text-sm">
                  Making quality food accessible to everyone while supporting local restaurants and communities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl opacity-90 mb-8">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => alert("Careers page coming soon! Contact saiharsha@parcello.com")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              View Open Positions
            </button>
            <button 
              onClick={() => alert("Email us at careers@parcello.com or reach out to Sai Harsha directly!")}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Send Your Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeAtParcello;
