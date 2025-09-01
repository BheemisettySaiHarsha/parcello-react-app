// components/Footer.js (Updated)
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center space-y-4">
            <img 
              className="h-12 w-12 rounded-lg" 
              src="https://raw.githubusercontent.com/BheemisettySaiHarsha/mlproject/main/parcello.jpg" 
              alt="Logo" 
            />
            <div className="text-center">
              <p className="text-lg font-semibold">© 2025 Parcello Limited</p>
              <p className="text-gray-400 text-sm">Delivering happiness to your doorstep</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <Link 
              to="/company" 
              className="hover:text-yellow-300 transition-colors duration-300 font-medium"
            >
              Company
            </Link>
            <Link 
              to="/contact-us" 
              className="hover:text-yellow-300 transition-colors duration-300 font-medium"
            >
              Contact us
            </Link>
            <Link 
              to="/legal" 
              className="hover:text-yellow-300 transition-colors duration-300 font-medium"
            >
              Legal
            </Link>
            <Link 
              to="/life-at-parcello" 
              className="hover:text-yellow-300 transition-colors duration-300 font-medium"
            >
              Life at Parcello
            </Link>
            <Link 
              to="/privacy-policy" 
              className="hover:text-yellow-300 transition-colors duration-300 font-medium"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="hover:text-yellow-300 transition-colors duration-300 font-medium"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
