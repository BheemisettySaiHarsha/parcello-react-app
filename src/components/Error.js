// components/Error.js (or Err.js)
import { Link, useRouteError } from "react-router-dom";

const Err = () => {
  const error = useRouteError();
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg p-12 text-center max-w-md w-full">
        <div className="text-6xl mb-6">😵</div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {error?.status === 404 ? "Page Not Found" : "Oops! Something Went Wrong"}
        </h1>
        <p className="text-gray-600 mb-8">
          {error?.status === 404 
            ? "The page you're looking for doesn't exist."
            : "We encountered an unexpected error."
          }
        </p>
        <Link 
          to="/"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-block"
        >
          Go Back Home
        </Link>
        
        {/* Show error details in development */}
        {process.env.NODE_ENV === 'development' && error && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-sm text-gray-500">Error Details</summary>
            <pre className="mt-2 text-xs text-red-600 bg-red-50 p-4 rounded overflow-auto">
              {error.message || JSON.stringify(error, null, 2)}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
};

export default Err;
