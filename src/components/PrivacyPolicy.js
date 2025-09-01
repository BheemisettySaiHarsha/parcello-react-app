// components/PrivacyPolicy.js
const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl opacity-90">Your privacy is important to us</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <div>
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> August 31, 2025
            </p>
            <p className="text-gray-600 leading-relaxed">
              At Parcello, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Name, email address, and phone number</li>
                  <li>Delivery address and payment information</li>
                  <li>Order history and preferences</li>
                  <li>Account credentials and profile information</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Usage Information</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Device information and IP address</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and time spent on our platform</li>
                  <li>Location data (with your consent)</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Process and fulfill your food orders</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send order confirmations and delivery updates</li>
              <li>Improve our services and user experience</li>
              <li>Send promotional offers (with your consent)</li>
              <li>Ensure platform security and prevent fraud</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information Sharing</h2>
            <p className="text-gray-600 mb-4">We may share your information with:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Restaurant Partners:</strong> Order details and delivery address</li>
              <li><strong>Delivery Partners:</strong> Contact information and delivery address</li>
              <li><strong>Payment Processors:</strong> Payment information for transaction processing</li>
              <li><strong>Service Providers:</strong> Third-party services that help us operate our platform</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
            <p className="text-gray-600 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, 
              and regular security assessments.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Access and review your personal information</li>
              <li>Correct or update your information</li>
              <li>Delete your account and associated data</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
              <li>Withdraw consent for data processing</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies and Tracking</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We use cookies and similar technologies to enhance your experience, analyze usage patterns, 
              and provide personalized content. You can control cookie settings through your browser preferences.
            </p>
            <p className="text-gray-600">
              Types of cookies we use: Essential, Performance, Functional, and Marketing cookies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain your personal information only as long as necessary to provide our services, 
              comply with legal obligations, resolve disputes, and enforce our agreements. 
              Inactive accounts may be deleted after 3 years of inactivity.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600">
                <strong>Email:</strong> privacy@parcello.com<br />
                <strong>Phone:</strong> 1800-PARCELLO<br />
                <strong>Address:</strong> Parcello Technologies Pvt. Ltd., 123 Tech Park, Bangalore, Karnataka 560001
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Updates to This Policy</h3>
            <p className="text-blue-700">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes 
              by posting the new policy on our website and updating the "Last Updated" date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
