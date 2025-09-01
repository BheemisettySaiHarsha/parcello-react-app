// components/Legal.js
const Legal = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Legal Information</h1>
          <p className="text-xl opacity-90">Important legal documents and policies</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Disclaimer */}
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <span className="text-yellow-600 text-2xl">⚠️</span>
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-semibold text-yellow-800">Educational Disclaimer</h3>
              <p className="text-yellow-700 mt-2 leading-relaxed">
                <strong>Important Notice:</strong> This Legal Information page contains placeholder/dummy data created for 
                educational and demonstration purposes only. All company registration numbers, licenses, certifications, 
                and legal details shown here are <strong>fictitious</strong> and not associated with any real entity. 
                This content is part of a learning project and should not be considered as actual legal documentation.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Documents */}
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Company Registration</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Company Name:</span>
                <span className="text-gray-600">Parcello Technologies Private Limited</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Registration Number:</span>
                <span className="text-gray-600">U72900KA2023PTC168XXX</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-semibold text-gray-700">GST Number:</span>
                <span className="text-gray-600">29XXXXX1234X1XX</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Registered Office:</span>
                <span className="text-gray-600">Bangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Licenses */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Licenses & Certifications</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">FSSAI License</h3>
                <p className="text-sm text-gray-600">Food Safety and Standards Authority of India certification for food delivery operations.</p>
                <p className="text-xs text-blue-600 mt-2">License No: 12345678901234</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">ISO 27001</h3>
                <p className="text-sm text-gray-600">Information Security Management System certification ensuring data protection.</p>
                <p className="text-xs text-blue-600 mt-2">Certificate No: ISO-27001-2023</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">PCI DSS Compliance</h3>
                <p className="text-sm text-gray-600">Payment Card Industry Data Security Standard compliance for secure payments.</p>
                <p className="text-xs text-blue-600 mt-2">Certified: 2023-2024</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">Startup India</h3>
                <p className="text-sm text-gray-600">Recognized startup under the Startup India initiative by Government of India.</p>
                <p className="text-xs text-blue-600 mt-2">Recognition No: DIPP-12345</p>
              </div>
            </div>
          </div>

          {/* Legal Policies */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Legal Documents</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div>
                  <h3 className="font-semibold text-gray-800">Terms of Service</h3>
                  <p className="text-sm text-gray-600">Our terms and conditions for using Parcello services</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div>
                  <h3 className="font-semibold text-gray-800">Privacy Policy</h3>
                  <p className="text-sm text-gray-600">How we collect, use, and protect your personal information</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div>
                  <h3 className="font-semibold text-gray-800">Refund & Cancellation Policy</h3>
                  <p className="text-sm text-gray-600">Our policies for order cancellations and refunds</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div>
                  <h3 className="font-semibold text-gray-800">Cookie Policy</h3>
                  <p className="text-sm text-gray-600">Information about how we use cookies on our website</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium">View</button>
              </div>
            </div>
          </div>

          {/* Contact Legal */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Legal Queries</h2>
            <p className="text-gray-700 mb-4">
              For any legal queries, compliance questions, or business partnerships, please contact our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div>
                <p className="font-semibold text-gray-800">Legal Department</p>
                <p className="text-gray-600">legal@parcello.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Business Partnerships</p>
                <p className="text-gray-600">partnerships@parcello.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
