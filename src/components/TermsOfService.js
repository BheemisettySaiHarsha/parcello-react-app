// components/TermsOfService.js
const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl opacity-90">Please read these terms carefully before using our services</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <div>
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> August 31, 2025
            </p>
            <p className="text-gray-600 leading-relaxed">
              Welcome to Parcello! These Terms of Service ("Terms") govern your use of our food delivery platform. 
              By using our services, you agree to be bound by these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              By accessing or using Parcello's services, you agree to comply with and be bound by these Terms of Service 
              and our Privacy Policy. If you do not agree with any part of these terms, you may not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Service Description</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Parcello is a food delivery platform that connects customers with local restaurants. We facilitate:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Food ordering and delivery services</li>
              <li>Payment processing</li>
              <li>Customer support</li>
              <li>Order tracking and notifications</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. User Accounts</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Account Creation</h3>
                <p className="text-gray-600">
                  You must create an account to use our services. You are responsible for maintaining 
                  the confidentiality of your account credentials.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Account Requirements</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>You must be at least 18 years old</li>
                  <li>Provide accurate and complete information</li>
                  <li>Maintain updated account information</li>
                  <li>Use the account only for lawful purposes</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Orders and Payments</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Order Placement</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Orders are subject to restaurant availability</li>
                  <li>We reserve the right to cancel orders for any reason</li>
                  <li>Order confirmations are sent via email/SMS</li>
                  <li>Delivery times are estimates, not guarantees</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-2">Payment Terms</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Payment is required at the time of order placement</li>
                  <li>We accept major credit cards, debit cards, and digital wallets</li>
                  <li>All prices are inclusive of applicable taxes</li>
                  <li>Additional charges may apply for delivery and service fees</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Cancellation and Refunds</h2>
            <div className="bg-yellow-50 rounded-lg p-4 mb-4">
              <p className="text-yellow-800 font-medium">Cancellation Policy</p>
              <p className="text-yellow-700">
                Orders can be cancelled within 5 minutes of placement. After this time, 
                cancellations are subject to restaurant approval.
              </p>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Full refund for orders cancelled before preparation</li>
              <li>Partial refund may apply for orders cancelled during preparation</li>
              <li>No refund for completed deliveries (quality issues handled separately)</li>
              <li>Refunds processed within 3-7 business days</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. User Conduct</h2>
            <p className="text-gray-600 mb-4">You agree not to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Use the service for any illegal or unauthorized purpose</li>
              <li>Interfere with or disrupt the service or servers</li>
              <li>Transmit viruses, malware, or malicious code</li>
              <li>Harass or abuse other users, delivery partners, or restaurant staff</li>
              <li>Provide false or misleading information</li>
              <li>Attempt to circumvent security measures</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Delivery Terms</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Delivery is available within our service areas only</li>
              <li>Delivery times are estimates based on various factors</li>
              <li>You must be available to receive your order</li>
              <li>Valid ID may be required for age-restricted items</li>
              <li>Additional delivery charges may apply for certain areas</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Limitation of Liability</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-600 leading-relaxed">
                Parcello's liability is limited to the amount you paid for the order in question. 
                We are not responsible for indirect, incidental, or consequential damages. 
                Our maximum liability shall not exceed ₹1,000 per incident.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed">
              All content on our platform, including logos, trademarks, and software, is owned by Parcello 
              or our licensors. You may not reproduce, distribute, or create derivative works without our consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Termination</h2>
            <p className="text-gray-600 leading-relaxed">
              We reserve the right to terminate or suspend your account at any time for violation of these terms. 
              You may also terminate your account by contacting customer support.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Contact Information</h2>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-700">
                For questions about these Terms of Service, contact us at:<br />
                <strong>Email:</strong> legal@parcello.com<br />
                <strong>Phone:</strong> 1800-PARCELLO<br />
                <strong>Address:</strong> Parcello Technologies Pvt. Ltd., 123 Tech Park, Bangalore, Karnataka 560001
              </p>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-2">Changes to Terms</h3>
            <p className="text-red-700">
              We reserve the right to modify these terms at any time. Continued use of our services 
              after changes constitutes acceptance of the new terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
