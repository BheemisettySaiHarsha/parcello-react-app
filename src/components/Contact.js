// components/Contact.js
const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600">We'd love to hear from you! Send us a message.</p>
        </div>
        
        <form className="space-y-6">
          <div>
            <input 
              type="text" 
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300" 
              placeholder="Your Name"
            />
          </div>
          <div>
            <input 
              type="email" 
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300" 
              placeholder="Your Email"
            />
          </div>
          <div>
            <textarea 
              rows="5"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none" 
              placeholder="Your Message"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
